import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

function Card({post}) {

  const regex = /\s/g;
  const URL_title = post.title.replace(regex, '-').toLowerCase();
 
  return (

    
    <div>
         <Link to={`/article/${URL_title}`} >
      <div className="feed_card_inner">
        <img src="https://uploads.guim.co.uk/2020/04/04/daniel-sessler-N98aPtXcDYs-unsplash.jpg" className="card_img"></img>
      <div className="card_title">{post.title}</div>
            <div className="card_tags"><div className="tag">#tagone</div> <div className="tag">#tagtwo</div> <div className="tag">#tagthree</div> </div>
  <div className="card_author">{post.author}</div>
            <div className="timestamp"></div>
            </div>
          <div className="card_btn">Save</div>
          </Link>
    </div>
  );
}

export default Card;