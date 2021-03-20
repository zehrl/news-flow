import React, { useEffect, useState } from "react";
import API from "../utils/API";
import NewsCard from "./NewsCard";

function NewsFeed({location}) {

    const [newsCards, setNewsCards] = useState([])

    const generateCards = (results) => {
        const cards = results.map(article => {
            return <NewsCard article={article} />
        })

        setNewsCards(cards)
    }

    useEffect(() => {
        API
            .getNews(location)
            .then((res) => generateCards(res))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div>
            {newsCards}
        </div>
    )
}

export default NewsFeed;