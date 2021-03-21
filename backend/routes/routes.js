const express = require('express')
const jwt = require("jsonwebtoken");
const authorize = require('../middleware/auth')
const bcrypt = require('bcrypt')
const router = express.Router()
const User = require('../models/user')

router.get('/allUsers', (req, res) => {
    User
    .find()
    .then((data) => {
        res.json(data);
    })
    .catch((error) => {
        res.json(error)
    })
    console.log("/allUsers called...");
})

router.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, 10)
        .then((hash) => {
            const user = new User({
                fullName: req.body.fullName,
                email: req.body.email,
                password: hash
            });

            user
                .save()
                .then((response) => {
                    res.status(201).json({
                        message: 'User Created',
                        result: response
                    })
                .catch((error) => {
                    res.json(error);
                });
            });
        });
});



router.post("/signin", (req, res, next) => {
    console.log("/signin called.")
    
    let getUser;
    User.findOne({
        email: req.body.email,
    }).then(user => {
        console.log("User sigining in: ", user);
        if (!user) {
            return res.status(401).json({
                message: 'No user found.'
            });
        }
        getUser = user;
        return bcrypt.compare(req.body.password, user.password, (err, same) => {
            if (err) {console.log("bcrypt password comparison error: ", err)};
            console.log("Passwords matched? -> ", same);
        });
    })
        .then(response => {
            // if (!response) {
            //     return res.status(401).json({
            //         message: 'No response given by bcrypt. Check bcrypt.compare(req.body.password, user.password)'
            //     });
            // }
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
                message: 'Authentication failed',
                error: e
            });
        });
});

router.route('all-user').get(authorize, (req, res) => {
    User.find((error, response) => {
        if (error) {
            return netx(error);
        }
        res.setDefaultEncoding(200).json(response);
    });
})



module.exports = router