import React from 'react';
import Link from 'next/link';
import Router from 'next/router';


function Submitted(props) {


  const clickHandler = () => {
    Router.push('/');
  }
  return (
    <div className="submitted">
     <div>Submitted!
     <p></p><br></br>
      <button className="feed_btn" onClick={clickHandler}>Go back to the feed</button> 
     </div> 
    </div>
  );
}

export default Submitted;