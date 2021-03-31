import React, { useEffect, useState } from "react";
import thirdPartyAPI from "../utils/thirdPartyAPI";
import NewsCard from "./NewsCard";

function NewsFeed({location}) {

    const [newsCards, setNewsCards] = useState([])

    const generateCards = (results) => {
        const cards = results.map(article => {
            
            // Check if URL is in the user's saved list and change to saved to true
            // article.saved = true;
            
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
        <div className="card-container overflow-auto scroll-bar">
            {newsCards}
            {(newsCards.length > 0) ? newsCards : <h2 className="text-center secondary-text">No results for this location.</h2>}
        </div>
    )
}

export default NewsFeed;