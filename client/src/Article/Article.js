import React from 'react';
import './Article.css';
import Footer from './Footer/Footer';


function Article({props, post, upVote}) {

console.log(props);


const postInfo = post;
  
  return (
    postInfo &&
    <div>
   <div className="whitespace"></div>
   
    <div className="body_wrapper">
      <div className="article_title">{postInfo.title}</div>
      <div className="article_author">{postInfo.author}</div>
      <div className="article_tags">{postInfo.tags.map(tag => <div>{tag}</div>)}</div>
      <div className="article_body">{postInfo.body}
        
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet dolor et purus facilisis varius. Nullam eu tincidunt enim, at commodo est. Aliquam non lobortis est. Vestibulum dolor lacus, pharetra at semper sit amet, lobortis eu diam. Curabitur ullamcorper venenatis justo, sed aliquet odio gravida id. Ut mollis felis id turpis vehicula sagittis. Vivamus maximus dolor ut sapien laoreet sodales. Nullam vitae suscipit nulla.

</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet dolor et purus facilisis varius. Nullam eu tincidunt enim, at commodo est. Aliquam non lobortis est. Vestibulum dolor lacus, pharetra at semper sit amet, lobortis eu diam. Curabitur ullamcorper venenatis justo, sed aliquet odio gravida id. Ut mollis felis id turpis vehicula sagittis. Vivamus maximus dolor ut sapien laoreet sodales. Nullam vitae suscipit nulla.

</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet dolor et purus facilisis varius. Nullam eu tincidunt enim, at commodo est. Aliquam non lobortis est. Vestibulum dolor lacus, pharetra at semper sit amet, lobortis eu diam. Curabitur ullamcorper venenatis justo, sed aliquet odio gravida id. Ut mollis felis id turpis vehicula sagittis. Vivamus maximus dolor ut sapien laoreet sodales. Nullam vitae suscipit nulla.

</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet dolor et purus facilisis varius. Nullam eu tincidunt enim, at commodo est. Aliquam non lobortis est. Vestibulum dolor lacus, pharetra at semper sit amet, lobortis eu diam. Curabitur ullamcorper venenatis justo, sed aliquet odio gravida id. Ut mollis felis id turpis vehicula sagittis. Vivamus maximus dolor ut sapien laoreet sodales. Nullam vitae suscipit nulla.

</p>

      </div>
      <Footer upVote={upVote} post={post} />
    </div>

    <div className="article_sidebar"></div>

    
    </div>
  );
}

export default Article;