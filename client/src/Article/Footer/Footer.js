import React from 'react';
import './Footer.css';
function Footer({upVote, post}) {

  const clickHandler = () => {
    upVote(post._id);
  }
  return (
    <div className="footer_wrapper">
      <div className="footer">
        <div className="footer_upvote" onClick={clickHandler}>upvote</div>
        <div className="footer_share">share</div>
        <div className="footer_share">comment</div>
        </div>
    </div>
  );
}

export default Footer;