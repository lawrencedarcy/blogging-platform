import React from 'react';
import './Footer.css';
function Footer({upVote, post}) {

  const [isUpvoted, setIsUpvoted] = useState(false);

  const clickHandler = () => {
    upVote(post._id);
    setIsUpvoted(true);
  }
  return (
    <div className="footer_wrapper">
      <div className="footer">
        <div className={isUpvoted ? "footer_upvote" : "footer_upvote_clicked"} onClick={clickHandler}>upvote</div>
        <div className="footer_share">share</div>
        <div className="footer_share">comment</div>
        </div>
    </div>
  );
}

export default Footer;