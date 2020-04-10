import React, {useState} from 'react';
import axios from 'axios';
/* import ReactQuill from 'react-quill'; 
 */
const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;

/* https://github.com/zenoamaro/react-quill
 */

import { withAuth, withLoginRequired } from 'use-auth0-hooks';


 function Create({auth}) {

  const [value, setValue] = useState('');
  const [headline, setHeadline] = useState('');
  const [tags, setTags] = useState('');

  const createPost = (p) => {

    axios.post('http://localhost:3001/posts', {p})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };


  const submitHandler = () => {
    const combinePost = {headline, tags, body: value};
    createPost(combinePost);
    setValue('');
    setHeadline('');
  }

  const changeHandler = (e) => {
    setHeadline(e.target.value);
  }
  const tagChangeHandler = (e) => {
    setTags(e.target.value);
  }
 
  return (
   
    <div className="create_wrapper">
      <span className="headline_span">Headline:</span>
      <input className="create_headline" value={headline} onChange={changeHandler} placeholder='Title your piece...'></input>
      <span className="headline_span">Tags:</span>
      <input className="create_tags" value={tags} onChange={tagChangeHandler} placeholder='Up to four key topics, comma separated...' ></input>
    <span className="body_span">Body:</span>
    <ReactQuill theme="snow" value={value} onChange={setValue}  />
   <div className="btn_wrapper"><button className="submit_btn" type="submit" onClick={submitHandler} > Publish </button></div> 
    </div>
  );
  }
export default withLoginRequired(
  withAuth(Create)
);