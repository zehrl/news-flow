const express = require('express')
const { Mongoose } = require('mongoose');
const router = express.Router()
const User = require('../models/User')
const auth = require('./middleware/auth')

router.get('/savedArticles/:email', async (req, res) => {
    console.log("get /savedArticles called...")
    try {

        const { email } = req.params;
        console.log("savedArticles.js, email: ", email)

        const user = await User.findOne({ email })

        if (!user) {
            // User not found by email.
            return res.status(404).json("No user associated with the email provided");
        }

        console.log("user.savedArticles: ", user.savedArticles)
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

// https://mongoosejs.com/docs/subdocs.html
router.delete('/savedArticles', async (req, res) => {

    const {email, url: urlToDelete} = req.body;

    try {
        
        User.findOneAndUpdate(
            { email },
            { $pull: { savedArticles: { url: urlToDelete } } },
            { new: true },
            function(err, results) {
                if (err) { 
                    console.log(err) 
                    throw err
                }

                res.status(200).json(results)
            }
        )

    }
    catch (error) {
        console.log(error)
        res.status(500).json(error)
    }

})

module.exports = router;