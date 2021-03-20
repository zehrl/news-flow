const express = require('express')
const jwt = require("jsonwebtoken");
const authorize = require('../middleware/auth')
const bcrypt = require('bcrypt')
const router = express.Router()
const User = require('../models/user')

router.post('/signup', (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then((hash) => {
        const user = new User({
            fullName: req.body.fullName,
            email: req.body.email,
            password: hash
        });
        user.save().then((response) => {
            res.status(201).json({
                message: 'User Created',
                result: response
            })
            .catch((error) => {
                res.status(500).json({
                    error,
                });
            });
        });
    });
});
    


router.post("/signin", (req, res, next) =>{
    let getUser;
    User.findOne({
        email: req.body.email,
    }).then(user => {
        if(!user) {
            return res.status(401).json({
                message: "Auth Failed"
            });
        }
        getUser = user;
        return bcrypt.compare(req.body.password, user.password);
    })
    .then(response => {
        if(!response) {
            return res.status(401).json({
            message: " Auth Failed"
            });
        }
        let jwtToken = jwt.sgin({
            email: getUser.email,
            userId: getUser._id,
        },
        'longer-secret-is-better');
        
        res.status(200).json({
            token: jwtToken,
            msg: getUser
        });
    })
    .catch(e => {
        return res.status(401).json({
            message:'Authentication failed',
        });
    });
});



module.exports = router