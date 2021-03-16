import Card from 'react-bootstrap/Card';
// import Bing from '../utils/bingNews';
// import React, { useState} from "react";



const NewsCard = () => {

 
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [url, setUrl] = useState("");
  // const [timeStamp, setTime] = useState("")
  // const [error, setError] = useState("");



  //   Bing()
  //     .then(res => {
  //       if (res.data.length === 0) {
  //         throw new Error("No results found.");
  //       }
  //       if (res.data.status === "error") {
  //         throw new Error(res.data.message);
  //       }
  //       console.log(res)
  //       setTitle(res.data[0].value.name);
  //       setUrl(res.data[0].value.url);
  //       setDescription(res.data[0].value.description);
  //       setTime(res.data[0].value.datePublished);
  //     })
  //     .catch(err => setError(err));

  


  
  return (

<div id="newsCard" >
<Card style={{ width: '30rem' }} className="mx-auto shadow-lg p-3 mb-5 bg-white rounded">
    <Card.Body url={url}>
      <Card.Title title={title}></Card.Title>
      <Card.Text description={description}>
        {error}
      </Card.Text>
      <Card.Text>
        <small className="text-muted" time={timeStamp}></small>
      </Card.Text>
    </Card.Body>
  </Card>
</div>
  )

}

export default NewsCard