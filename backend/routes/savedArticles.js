const express = require('express')
const { Mongoose } = require('mongoose');
const router = express.Router()
const User = require('../models/User')
const auth = require('./middleware/auth')

router.get('/savedArticles/:email', async (req, res) => {

    try {
        const { email } = req.params;

        const user = await User.findOne({ email })

        if (!user) {
            // User not found by email.
            return res.status(404).json("No user associated with the email provided");
        }

        res.status(200).json(user.savedArticles)

    }
    catch (error) {
        res.status(500).json(error)
    }
})

router.post('/savedArticles', async (req, res) => {

    try {
        // find user 
        const { email, articleData } = req.body;

        const user = await User.findOne({ email })
        // console.log("user: ", user)

        if (!user) {
            // User not found by email.
            return res.status(404).json("No user associated with the email provided");
        }


        // If article is already favorite, return error
        const urls = user.savedArticles.map(article => article.url)
        console.log("urls: ", urls)
        console.log("artivleData.url: ", articleData.url)


        const isUniqueUrl = !(urls.includes(articleData.url));

        if (!isUniqueUrl) {
            return res.status(404).json("User already favorited that article")
        }

        // push article to favorites and save user
        user.savedArticles.push(articleData);

        User.updateOne(user, (err, data) => {
            res.status(200).json("Article Saved")
        });

    }
    catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
});



// router.post("/signin", (req, res, next) => {
//     console.log("/signin called.")

//     let getUser;
//     User.findOne({
//         email: req.body.email,
//     }).then(user => {
//         console.log("User sigining in: ", user);
//         if (!user) {
//             return res.status(401).json({
//                 message: 'No user found.'
//             });
//         }
//         getUser = user;
//         return bcrypt.compare(req.body.password, user.password, (err, same) => {
//             if (err) {console.log("bcrypt password comparison error: ", err)};
//             console.log("Passwords matched? -> ", same);
//         });
//     })
//         .then(response => {
//             // if (!response) {
//             //     return res.status(401).json({
//             //         message: 'No response given by bcrypt. Check bcrypt.compare(req.body.password, user.password)'
//             //     });
//             // }
//             let jwtToken = jwt.sgin({
//                 email: getUser.email,
//                 userId: getUser._id,
//             },
//                 'longer-secret-is-better');

//             res.status(200).json({
//                 token: jwtToken,
//                 msg: getUser
//             });
//         })
//         .catch(e => {
//             return res.status(401).json({
//                 message: 'Authentication failed',
//                 error: e
//             });
//         });
// });

// router.route('all-user').get(authorize, (req, res) => {
//     User.find((error, response) => {
//         if (error) {
//             return netx(error);
//         }
//         res.setDefaultEncoding(200).json(response);
//     });
// })

module.exports = router;