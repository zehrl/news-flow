import React, { useEffect, useState } from "react";
import SaveCard from "./SaveCard";
import devData from "../utils/savedCardsDevData.json"

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
        


        console.log("generating cards: ", devData)
        generateCards(devData)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="card-container overflow-auto">
            {saveCards}
        </div>
    )
}

export default SavedFeed;