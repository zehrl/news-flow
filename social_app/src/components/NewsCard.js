// import Card from 'react-bootstrap/Card';
// import Bing from '../utils/bingNews';
// import React, { useState} from "react";



const NewsCard = ({article : {url, title, description, publishedDate, thumbnail, category, provider}}) => {

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={thumbnail} alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">published by: {provider}</small></p>
            <p className="card-text"><small className="text-muted">{publishedDate}</small></p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default NewsCard