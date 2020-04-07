import React from 'react';
import './Article.css';
import axios from 'axios';

function Article({props}) {

  console.log(props)

  
  return (
  
    <div>
   <div className="whitespace"></div>
    
    <div className="body_wrapper">
      <div className="article_title">This is an exciting placeholder article headline</div>
      <div className="article_author">Author here</div>
      <div className="article_tags"></div>
      <div className="article_body">
        
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet dolor et purus facilisis varius. Nullam eu tincidunt enim, at commodo est. Aliquam non lobortis est. Vestibulum dolor lacus, pharetra at semper sit amet, lobortis eu diam. Curabitur ullamcorper venenatis justo, sed aliquet odio gravida id. Ut mollis felis id turpis vehicula sagittis. Vivamus maximus dolor ut sapien laoreet sodales. Nullam vitae suscipit nulla.

</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet dolor et purus facilisis varius. Nullam eu tincidunt enim, at commodo est. Aliquam non lobortis est. Vestibulum dolor lacus, pharetra at semper sit amet, lobortis eu diam. Curabitur ullamcorper venenatis justo, sed aliquet odio gravida id. Ut mollis felis id turpis vehicula sagittis. Vivamus maximus dolor ut sapien laoreet sodales. Nullam vitae suscipit nulla.

</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet dolor et purus facilisis varius. Nullam eu tincidunt enim, at commodo est. Aliquam non lobortis est. Vestibulum dolor lacus, pharetra at semper sit amet, lobortis eu diam. Curabitur ullamcorper venenatis justo, sed aliquet odio gravida id. Ut mollis felis id turpis vehicula sagittis. Vivamus maximus dolor ut sapien laoreet sodales. Nullam vitae suscipit nulla.

</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet dolor et purus facilisis varius. Nullam eu tincidunt enim, at commodo est. Aliquam non lobortis est. Vestibulum dolor lacus, pharetra at semper sit amet, lobortis eu diam. Curabitur ullamcorper venenatis justo, sed aliquet odio gravida id. Ut mollis felis id turpis vehicula sagittis. Vivamus maximus dolor ut sapien laoreet sodales. Nullam vitae suscipit nulla.

</p>

      </div>
    </div>

    <div className="article_sidebar"></div>


    </div>
  );
}

export default Article;