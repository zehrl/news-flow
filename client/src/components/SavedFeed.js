import React, { useEffect, useState } from "react";
import API from "../utils/API";
import SaveCard from "./SaveCard";

function SavedFeed({location}) {

    const [saveCards, setSaveCards] = useState([])

    const generateCards = (results) => {
        const cards = results.map(article => {
            return <SaveCard article={article} />
        })

        setSaveCards(cards)
    }

    useEffect(() => {
        API
            .getNews(location)
            .then((res) => generateCards(res))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])


    return (
        <div className="card-container overflow-auto">
            {saveCards}
        </div>
    )
}

export default SavedFeed;