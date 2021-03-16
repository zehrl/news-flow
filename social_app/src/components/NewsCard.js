// import Card from 'react-bootstrap/Card';
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
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="https://www.bing.com/th?id=OVFT.mEwFvhsff7PuAoBGjh5QXy&pid=News" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default NewsCard