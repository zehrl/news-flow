import React, { useEffect, useState } from "react";
import SaveCard from "./SaveCard";
// import devData from "../utils/savedCardsDevData.json"
import savedArticlesAPI from "../utils/savedArticlesAPI";
import { useAuthenticatedUser } from '../utils/auth'

function SavedFeed() {
    // const authData = useAuthenticatedUser();
    const [saveCards, setSaveCards] = useState([])

    const generateCards = (data) => {
        const cards = data.map(savedArticle => {
            // console.log("savedArticle: ", savedArticle)
            return <SaveCard savedArticle={savedArticle} getSavedArticles={getSavedArticles} />
        })

        setSaveCards(cards)
    }

    const getSavedArticles = async () => {

        // console.log("authData: ", authData.email)

        return savedArticlesAPI
            .getFavorites("demo@gmail.com")
            .then(savedArticles => {
                console.log("savedArticles: ", savedArticles)
                generateCards(savedArticles)
            })
    }

    useEffect(() => {
        console.log("SavedFeed.js useEffect() called")
        // Run API
        getSavedArticles()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="card-container overflow-auto">
            {(saveCards.length > 0) ? saveCards : <h2 className="text-center secondary-text">You have no saved posts.</h2>}
        </div>
    )
}

export default SavedFeed;