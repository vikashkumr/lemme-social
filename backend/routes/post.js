const router = require('express').Router();
const Post = require('../models/post.model');
const checkAuth = require('../middleware/check-auth');

//comment
router.put('/comment', checkAuth, (req, res) => {
    const comment = {
        text: req.body.text,
        postedBy: req.userData._id
    }
    Post.findByIdAndUpdate(req.body.postId, {
        $push:{comments: comment}
    }, {
        new: true
    })
    .populate("comments.postedBy", "_id name")
    .populate("postedBy", "_id name")
    .exec((err,result) => {
        if(err) {
            return res.status(422).json({ error: err })
        } else {
            res.json(result);
        }
    })
})


//likes
router.put('/likes', checkAuth, (req, res) => {
    Post.findByIdAndUpdate(req.body.postId, {
        $push:{likes: req.userData._id}
    }, {
        new: true
    }).exec((err,result) => {
        if(err) {
            return res.status(422).json({ error: err })
        } else {
            res.json(result);
        }
    })
})

/*
//unlikes
router.put('/unlikes', (req, res) => {
    Post.findByIdAndUpdate(req.body.postId, {
        $pull:{likes: req.userData._id}
    }, {
        new: true
    }).exec((err,result) => {
        if(err) {
            return res.status(422).json({ error: err })
        } else {
            res.json(result);
        }
    })
})
*/


//view all post
router.get('/allpost', checkAuth, (req, res) => {
    Post.find()
        .populate("postedBy","_id name")
        .populate("comments.postedBy","_id name")
        .exec()
        .then(posts => {
            return res.status(200).json({posts})
        })
        .catch(err => {
            console.log(err);
        });
})

//view post created by followed user
router.get('/getsubpost', (req, res) => {
    Post.find({postedBy: {$in:req.userData.following}})
        .populate("author","_id name")
        .exec()
        .then(posts => {
            return res.status(200).json({posts})
        })
        .catch(err => {
            console.log(err);
        });
})


//post created by only signedin user
router.get('/mypost', checkAuth, (req, res) => {
    Post.find({postedBy : req.userData._id})
        .populate("postedBy","_id name")
        .exec()
        .then(posts => {
            return res.status(200).json({posts})
        })
        .catch(err => {
            console.log(err);
        });
})


//create post
router.post('/createpost', checkAuth, (req,res) => {
    const {title, body, photo} = req.body;
    if(title && body && photo) {
        req.body.password = undefined;
        const post = new Post({
            title,
            body,
            photo,
            postedBy: req.userData._id
        })
        post.save()
            .then(result => {
                res.status(200).json({
                    post: result
                })
            }).catch(err => {
                console.log(err);
            });
    } else {
        return res.status(422).json({
            message: 'add all the field'
        })
    }
})

//delete post

router.delete('/deletepost/:postId', (req, res) => {
    Post.findOne({_id: req.params.postId})
        .populate("postedBy", "_id")
        .exec((err, post) => {
            if(err || !post) {
                res.status(422).json({error: err})
            }
            if(post.postedBy._id.toString() === req.userData._id.toString()) {
                post.remove()
                .then(result => {
                    res.json({message: "success"})
                })
                .catch(err => {
                    console.log(err);
                })
            }
        })
})


module.exports = router;