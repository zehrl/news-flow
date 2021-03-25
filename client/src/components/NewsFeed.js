import React, { useEffect, useState } from "react";
import thirdPartyAPI from "../utils/thirdPartyAPI";
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
        thirdPartyAPI
            .getNews(location)
            .then((res) => generateCards(res))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])


    return (
        <div className="card-container overflow-auto">
            {newsCards}
        </div>
    )
}

export default NewsFeed;