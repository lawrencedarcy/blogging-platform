import React from 'react';
import './Feed.css';
import Card from '../Card/Card';



function Feed({posts}) {
  return (
    <div >
     
      {  posts.slice(4, 8).map(post => 
            <div className="feed_card">
            <Card key={post.id} post={post}/>
            </div>
        )}

  
    </div>
  );
}

export default Feed;