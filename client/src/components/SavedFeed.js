import React, { useEffect, useState } from "react";
import SaveCard from "./SaveCard";
// import devData from "../utils/savedCardsDevData.json"
import savedArticlesAPI from "../utils/savedArticlesAPI";
import { useAuthenticatedUser } from '../utils/auth'

function SavedFeed() {
    const authData = useAuthenticatedUser();
    // console.log("SavedFeed(), authData: ", authData)

    const [saveCards, setSaveCards] = useState([])
    const generateCards = (data) => {
        const cards = data.map(savedArticle => {
            // console.log("savedArticle: ", savedArticle)
            return <SaveCard savedArticle={savedArticle} getSavedArticles={getSavedArticles} />
        })

        setSaveCards(cards)
    }

    const getSavedArticles = async () => {

        return savedArticlesAPI
            .getFavorites(authData.email)
            .then(savedArticles => {
                console.log("savedArticles: ", savedArticles)
                generateCards(savedArticles)
            })
    }

    useEffect(() => {
        console.log("SavedFeed.js useEffect() called")

        // Only run if there is user authenticated data (ie. email)
        if (authData) {
            // Run API
            getSavedArticles()
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authData])

    return (
        <div className="card-container overflow-auto">
            {(saveCards.length > 0) ? saveCards : <h2 className="text-center secondary-text">You have no saved posts.</h2>}
        </div>
    )
}

export default SavedFeed;