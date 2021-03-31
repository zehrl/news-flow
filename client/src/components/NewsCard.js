
import React, { useEffect, useState } from 'react';
import savedArticlesAPI from '../utils/savedArticlesAPI';
import { useAuthenticatedUser, useIsAuthenticated } from '../utils/auth'

const NewsCard = ({ article: { url, title, description, publishedDate, thumbnail, category, provider } }) => {

  // Determines if card save button is enabled or disabled
  const [btnDisabled, setBtnDisabled] = useState(false)

  const isAuth = useIsAuthenticated();
  const authData = useAuthenticatedUser();


  const handleSave = () => {

    console.log("url: ", url)

    const articleData = {
      title,
      description,
      url,
      publishedDate,
      thumbnail,
      provider
    }

    if (authData) {
      savedArticlesAPI
        .saveArticle(authData.email, articleData)
        .then(setBtnDisabled(true))
    }


  }

  useEffect(() => { }, [btnDisabled])

  return (

    <div className="card mb-3 news-card" style={{ maxWidth: "600px", margin: "auto" }}>
      <div className="card-body d-flex">
        <img className="me-3 rounded article-thumbnail" src={thumbnail} alt="..." />
        <div className="d-flex flex-column flex-grow-1 align-items-stretch">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h5 className="card-title article-title mb-0 me-2">{title}</h5>
            <div className="d-flex flex-nowrap">
              <a className="btn btn-primary save-button me-1" href={url} target="_blank" rel="noopener noreferrer">View</a>

              {/* Only show save button if user is authenticated */}
              {isAuth &&
                <a id="saveBtn" className={`btn btn-primary save-button ${btnDisabled && "disabled"}`} onClick={handleSave}>{btnDisabled ? "Saved" : "Save"}</a>
              }
            </div>

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