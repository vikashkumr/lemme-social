const router = require('express').Router();
const Post = require('../models/post.model');
const User = require('../models/user.model');



//follow 
router.put('/follow', (req, res) => {
    User.findByIdAndUpdate(req.body.followId , {
        $push: {followers: req.userData._id}
    },{new: true}, (err, result) => {
        if(err) {
            res.status(422).json({error: err})
        }
        User.findOneAndUpdate(req.userData._id, {
            $push: {following: req.body.followId}
        }, {new: true}).then(result => {
            res.json(result);
        }).catch(err => {
            return res.status(422).json({error: err})
        })
    })
       
})


//unfollow 
router.put('/unfollow', (req, res) => {
    User.findByIdAndUpdate(req.body.unfollowId , {
        $pull: {followers: req.userData._id}
    },{new: true}, (err, result) => {
        if(err) {
            res.status(422).json({error: err})
        }
        User.findOneAndUpdate(req.userData._id, {
            $pull: {following: req.body.unfollowId}
        }, {new: true}).then(result => {
            res.json(result);
        }).catch(err => {
            return res.status(422).json({error: err})
        })
    })
       
})




//get profile of user route
router.get('/:id', (req, res) => {
    User.findOne({_id: req.params.id})
    .select("-password")
    .then(user => {
        Post.find({postedBy: req.params.id})
        .populate("postedBy", "_id name")
        .exec((err, post) => {
            if(err) {
                return res.status(422).json({error: err})
            }
            res.json({user, post})
        })
    })
    .catch(err => {
        return res.status(404).json({error: "user not found"}) 
    })
})


module.exports = router;