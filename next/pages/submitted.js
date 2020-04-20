import React from 'react';
import Link from 'next/link';

function Submitted(props) {
  return (
    <div className="submitted">
      Submitted!
      <br /><br />
     <Link href="/"><button className="feed_btn"> Go back to the feed</button></Link>
    </div>
  );
}

export default Submitted;