import '../sass/newsCard.scss';
// import { useState } from 'react';

const NewsCard = () => {
  return (

<a href="#">
<div className="card mb-3" style={{width: "540px", height: "150px", }}>
  <div className="row g-0">
    <div className="col-md-4 newsImg">
      <img src="https://www.bing.com/th?id=OVFT.mEwFvhsff7PuAoBGjh5QXy" alt="headlineimg" style={{width: "200px", height: "150px"}} />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Seattle Sounders FC sign assistant</h5>
        <p className="card-text">Seattle Sounders FC signed assistant coaches Gonzalo Pineda, Preki and Djimi Traore to contract extensions, the club announced Tuesday.</p>
        <p className="card-text"><small className="text-muted"><em>Last updated 3 mins ago</em></small></p>
      </div>
    </div>
  </div>
</div>  
</a>

)

}

export default NewsCard