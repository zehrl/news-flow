import React, { useEffect, useState } from "react";
import SaveCard from "./SaveCard";
// import devData from "../utils/savedCardsDevData.json"
import savedArticlesAPI from "../utils/savedArticlesAPI";

function SavedFeed() {

    const [saveCards, setSaveCards] = useState([])

    const generateCards = (data) => {
        const cards = data.map(savedArticle => {
            // console.log("savedArticle: ", savedArticle)
            return <SaveCard savedArticle={savedArticle} />
        })

        setSaveCards(cards)
    }

    useEffect(() => {

        // Run API
        savedArticlesAPI
            .getFavorites("coolguy69@internet.net")
            .then(savedArticles => {
                console.log("savedArticles: ", savedArticles)
                generateCards(savedArticles)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="card-container overflow-auto">
            {saveCards}
        </div>
    )
}

export default SavedFeed;