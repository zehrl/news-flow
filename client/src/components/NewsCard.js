import '../sass/newsCard.scss';

const NewsCard = ({ article: { url, title, description, publishedDate, thumbnail, category, provider } }) => {
  
  return (

    <a href={url} target="_blank">
      <div className="card mb-3" style={{ width: "540px", height: "150px", }}>
        <div className="row g-0">
          <div className="col-md-4 newsImg">
            <img src={thumbnail} alt="Headline" style={{ width: "200px", height: "150px" }} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted"><em>{publishedDate}</em></small></p>
            </div>
          </div>
        </div>
      </div>
    </a>

  )

}

export default NewsCard