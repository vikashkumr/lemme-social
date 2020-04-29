const router = require('express').Router();
const Post = require('../models/post.model');


//view all post

router.get('/allpost', (req, res) => {
    Post.find()
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
router.get('/mypost', (req, res) => {
    Post.find({author : req.userData._id})
        .populate("author","_id name")
        .exec()
        .then(posts => {
            return res.status(200).json({posts})
        })
        .catch(err => {
            console.log(err);
        });
})


//create post
router.post('/createpost', (req,res) => {
    const {title, body} = req.body;
    if(title && body) {
        req.body.password = undefined;
        const post = new Post({
            title,
            body,
            author: req.userData
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

module.exports = router;