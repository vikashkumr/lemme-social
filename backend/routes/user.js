const router = require('express').Router();
const Post = require('../models/post.model');
const User = require('../models/user.model');


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