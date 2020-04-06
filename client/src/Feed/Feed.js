import React from 'react';
import './Feed.css';
import Card from '../Card/Card';

function Feed({posts}) {
  return (
    <div >
     
      {  posts.slice(0, 10).map(post => 
            <div className="feed_card">
            <Card title={post.title} />
            </div>
        )}

  
    </div>
  );
}

export default Feed;