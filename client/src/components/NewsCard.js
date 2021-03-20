import React from 'react';

const NewsCard = ({ article: { url, title, description, publishedDate, thumbnail, category, provider } }) => {
// const NewsCard = () => { 

  return (

    // <a href={url} target="_blank">
    //   <div className="card mb-3" style={{ width: "540px", height: "150px", }}>
    //     <div className="row g-0">
    //       <div className="col-md-4 newsImg">
    //         <img src={thumbnail} alt="Headline" style={{ width: "200px", height: "150px" }} />
    //       </div>
    //       <div className="col-md-8">
    //         <div className="card-body">
    //           <h5 className="card-title">{title}</h5>
    //           <p className="card-text">{description}</p>
    //           <p className="card-text"><small className="text-muted"><em>{publishedDate}</em></small></p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </a>

    <div className="card mb-3 news-card" style={{maxWidth: "600px", margin: "auto"}}>
      <div className="card-body d-flex">
        <img className="me-3 rounded article-thumbnail"
          src={thumbnail} alt="...">
        </img>
        <div className="d-flex flex-column flex-grow-1 align-items-stretch">
          <div className="d-flex justify-content-between align-items-start">
            <h5 className="card-title article-title me-2">{title}</h5>
            <button className="btn btn-primary save-button" type="submit">Save</button>
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
    </div>

  )

}

export default NewsCard