
import React from 'react';
import savedArticlesAPI from '../utils/savedArticlesAPI';

const NewsCard = ({ article: { url, title, description, publishedDate, thumbnail, category, provider } }) => {
  // const NewsCard = () => { 


  // const [favorites, setFavorites] = useState([])

  // useEffect(() => {
  //   loadFavorites()
  // }, [])

  // function loadFavorites() {
  //   savedArticlesAPI.getFavorites()
  //     .then(res =>
  //       setFavorites(res.data))
  //     .catch(err => console.log(err));
  // };

  // function saveFavorite(articleData) {
  //   savedArticlesAPI.saveArticle(articleData)
  //   .then(res => setFavorites(res.data))
  //   .catch(err=> console.log(err))
  // }

  // function deleteFavorite(id) {
  //     savedArticlesAPI.deleteFavorite(id) 
  //         .then(res => loadFavorites())
  //         .catch(err => console.log(err));
  // };

  const handleSave = () => {

    console.log("url: ", url)

    const articleData = {
      url
    }

    savedArticlesAPI.saveArticle("coolguy69@internet.net", articleData)

    

  }


  return (

    <div className="card mb-3 news-card" style={{ maxWidth: "600px", margin: "auto" }}>
      <div className="card-body d-flex">
        <img className="me-3 rounded article-thumbnail" src={thumbnail} alt="..." />
        <div className="d-flex flex-column flex-grow-1 align-items-stretch">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h5 className="card-title article-title mb-0 me-2">{title}</h5>
            <a className="btn btn-primary save-button" href={url} target="_blank" rel="noopener noreferrer">View</a>
            <a id="saveBtn" className="btn btn-primary save-button" onClick={handleSave}>Save</a>
          
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