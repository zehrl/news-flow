import Card from 'react-bootstrap/Card';
import Bing from '../utils/bingNews';
import React, { useState, useEffect } from "react";



const NewsCard = () => {

  const [search, setSearch] = useState("newsCard");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!search) {
      return;
    }

    Bing.searchTerms(search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setTitle(res.data[0].value.name);
        setUrl(res.data[0].value.url);
        setDescription(res.data[0].value.description)
      })
      .catch(err => setError(err));
  }, [search]);
  };


  
  return (

<div id="newsCard" >
<Card style={{ width: '30rem' }} className="mx-auto shadow-lg p-3 mb-5 bg-white rounded">
    <Card.Body url={url}>
      <Card.Title title={title}></Card.Title>
      <Card.Text description={description}>
        
      </Card.Text>
      <Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Text>
    </Card.Body>
  </Card>
</div>
  )

}

export default NewsCard