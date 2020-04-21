import React from 'react';
import Link from 'next/link';

function Submitted(props) {
  return (
    <div className="submitted">
      Submitted!
      <br /><br />
      <a href='/' className="feed_btn">Go back to the feed.</a>
    </div>
  );
}

export default Submitted;