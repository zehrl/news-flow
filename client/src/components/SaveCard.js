import React from 'react';

const SaveCard = ({savedArticle: { title, description, url, publishedDate, thumbnail, provider }}) => {
  // const SaveCard = () => { 
  return (

    <a href={url} target="_blank" rel="noopener noreferrer" className="card mb-3 news-card" style={{ maxWidth: "600px", margin: "auto" }}>
      <div className="card-body d-flex">
        <img className="me-3 rounded article-thumbnail"
          src={thumbnail} alt="...">
        </img>
        <div className="d-flex flex-column flex-grow-1 align-items-stretch">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h5 className="card-title article-title mb-0 me-2">{title}</h5>
            <button id="saveBtn" className="btn btn-primary save-button" type="submit">Delete</button>
          </div>
          <p className="card-text article-description mb-1">{description}</p>

          <div className="d-flex justify-content-between align-items-end mt-auto">
            <p className="card-text article-publisher mb-0">
              <small className="text-muted">by {provider}
              </small>
            </p>
            <p className="card-text article-published-date mb-0">
              <small className="text-muted">
                {publishedDate}
              </small>
            </p>
          </div>
        </div>
      </div>
    </a>

  )

}

export default SaveCard