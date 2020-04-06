import React from 'react';
import './Card.css';

function Card({title}) {

 
  return (

    
    <div>
      <div className="feed_card_inner">
      <div className="card_title">{title}</div>
            <div className="card_tags"><div class="tag">#tagone</div> <div class="tag">#tagtwo</div> <div class="tag">#tagthree</div> </div>
            <div className="card_author">Larry Dawg</div>
            </div>
          <div className="card_btn">Save</div>
    </div>
  );
}

export default Card;