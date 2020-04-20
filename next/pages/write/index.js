import React, {useState} from 'react';
import axios from 'axios';
import Router from 'next/router'


/* import ReactQuill from 'react-quill'; 
 */
const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;

/* https://github.com/zenoamaro/react-quill
 */

import { withAuth, withLoginRequired } from 'use-auth0-hooks';


 function Create({auth}) {
  const { user } = auth;
  const [value, setValue] = useState('');
  const [headline, setHeadline] = useState('');
  const [tags, setTags] = useState();
  const [image, setImage] = useState('');


  const createPost = (p) => {
    axios.post('http://localhost:3001/posts', {p})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

/*   const addToPosts = async(user, postId) => {
    await axios.get(`http://localhost:3001/users/${user.nickname}`)
    .then((res) => {
    
      if(res.data[0]){
        axios.put(`http://localhost:3001/users/${user.nickname}`, {post: postId});
      }
      else{
       //TODO: create user with post
      }
    })
  }
 */

  const submitHandler = () => {
    if(value.length < 10 || headline.length < 5){ alert('You must add a headline and body before submitting!'); return false;}
    const combinePost = {headline, tags, body: value, image: image, author: user.nickname || user.name};
    createPost(combinePost);
    Router.push('/submitted');
  }

  const changeHandler = (e) => {
    setHeadline(e.target.value);
  }
  const tagChangeHandler = (e) => {
    setTags(e.target.value.toLowerCase());
  }
  const imageChangeHandler = (e) => {
    setImage(e.target.value);
  }
 
  return (
   
    <div className="create_wrapper">
      <span className="headline_span">Headline:</span>
      <input className="create_headline" value={headline} onChange={changeHandler} placeholder='Title your piece...'></input>
      <span className="headline_span">Tags:</span>
      <input className="create_tags" value={tags} onChange={tagChangeHandler} placeholder='Up to four key topics, comma separated...' ></input>
      <span className="headline_span">Image:</span>
      <input className="create_tags" value={image} onChange={imageChangeHandler} placeholder='Add an optional image url...' ></input>
    <span className="body_span">Body:</span>
    <ReactQuill theme="snow" value={value} onChange={setValue}  />
   <div className="btn_wrapper"><button className="submit_btn" type="submit" onClick={submitHandler} > Publish </button></div> 
    </div>
  );
  }
export default withLoginRequired(
  withAuth(Create)
);