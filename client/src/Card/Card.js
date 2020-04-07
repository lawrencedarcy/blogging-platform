import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

function Card({title, post}) {

  const regex = /\s/g;
  const URL_title = title.replace(regex, '-');
 
  return (

    
    <div>
         <Link to={`/article/${URL_title}`} >
      <div className="feed_card_inner">
      <div className="card_title">{title}</div>
            <div className="card_tags"><div className="tag">#tagone</div> <div className="tag">#tagtwo</div> <div className="tag">#tagthree</div> </div>
            <div className="card_author">Larry Dawg</div>
            </div>
          <div className="card_btn">Save</div>
          </Link>
    </div>
  );
}

export default Card;