import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

function Card({post}) {

  const regex = /\s/g;
  const URL_title = post.title.replace(regex, '-').toLowerCase();
 
  return (

    
    <div>
         <Link to={`/article/${URL_title}`} >
      <div className="feed_card_inner">
        <img src="https://uploads.guim.co.uk/2020/04/04/daniel-sessler-N98aPtXcDYs-unsplash.jpg" className="card_img"></img>
      <div className="card_title">{post.title}</div>
      <div className="card_tags">
        {post.tags[0] && <div className="tag">{'#' + post.tags[0].name}</div>} 
        {post.tags[1] && <div className="tag">{post.tags[1] && '#' + post.tags[1].name}</div> }
        {post.tags[2] && <div className="tag">{post.tags[2] && '#' + post.tags[2].name}</div> }
        
        </div>
            <div className="card_line">
            <div className="card_author">{post.author}  </div>
            <div className="card_timestamp"><Moment format="LL" className="card_font">{post.timestamp}</Moment></div>
            </div>
            
            </div>
            <div className="card_bottom">
  <div className="card_votes">♡ {post.votes}</div>
          <div className="card_btn">Save</div>
          </div>
          </Link>
    </div>
  );
}

export default Card;