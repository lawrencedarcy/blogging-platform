import React from 'react';
import Footer from '../../components/Article/Footer/Footer';
import axios from 'axios';
import { Markup } from 'interweave';
import { DiscussionEmbed } from 'disqus-react';
import Article_Sidebar from '../../components/SideBar/Article_Sidebar';



function Post({post}) {

  const upVote = (id) => {
    axios
      .put(`http://localhost:3001/posts/${id}/up`)
      .then(function(res) {
        console.log(res.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
   
    <div>


   <div className="whitespace"></div>

    <div className="body_wrapper">
    
      <div className="article_title">{post.title}</div>
      <div className="article_author">{post.author}</div>
    <div className="article_tags">{post.tags.slice(0,3).map(tag => <div className="article_tag">#{tag}</div>)}</div>
     <div className="article_body">
       
       
       <Markup content={post.body}/> 

       


<div className="article_disqus" id="disqus">
    <DiscussionEmbed
    shortname='stagetime' 
    config={
        {url: post.id},
        {identifier: post.id},
        {title: post.title}
    }/>
</div>

      </div> 
      <Footer upVote={upVote} post={post}/>
    </div>

   

    </div>
  );
};


Post.getInitialProps = async ({query}) => {
  const res = await axios.get(`http://localhost:3001/post/${query.id}`);
  const result = res.data;
  console.log(result);
  return {post: result};
};

export default Post;