import { useEffect, useState } from "react";
import API from "../utils/API";
import NewsCard from "./NewsCard";

function NewsFeed() {

    const [newsCards, setNewsCards] = useState([])

    useEffect(() => {
        API
            .getNews("Query")
            .then((res) => {
                console.log("NewsFeed.js, Response: ", res);
                const cards = res.map(article => {
                    return <NewsCard article={article}/>
                })

                setNewsCards(cards);

                console.log("NewsFeed, newsCards: ", newsCards)
            })


    })

    return (
        <div>{newsCards}</div>
    )
}

export default NewsFeed;