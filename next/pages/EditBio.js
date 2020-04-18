import React, {useState} from 'react';
import axios from 'axios';
import Router from 'next/router'
import Sidebar from '../components/Sidebar/Sidebar';

import { withAuth, withLoginRequired } from 'use-auth0-hooks';


 function EditBio({auth}) {
  const { user } = auth;
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');


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
    if(value.length < 10 || headline.length < 5){ alert('You must add a headline and body before submitting!'); return false;}
    const combinePost = {headline, tags, image: image, author: user.nickname || user.name};
    createPost(combinePost);
    Router.push('/submitted');
  }

  const bioChangeHandler = (e) => {
    setHeadline(e.target.value);
  }
  const locationChangeHandler = (e) => {
    setTags(e.target.value);
  }
  const websiteChangeHandler = (e) => {
    setImage(e.target.value);
  }
 
  return (
   
    <div className="create_wrapper">
   
      <span className="headline_span">Bio:</span>
      <input className="create_headline" value={bio} onChange={bioChangeHandler} placeholder='A brief introduction...'></input>
      <span className="headline_span">Location:</span>
      <input className="create_tags" value={location} onChange={locationChangeHandler} placeholder='Tell us where you are living...' ></input>
      <span className="headline_span">Website:</span>
      <input className="create_tags" value={website} onChange={websiteChangeHandler} placeholder='Add an optional website url...' ></input>

    
   <div className="btn_wrapper"><button className="submit_btn" type="submit" onClick={submitHandler} > Save </button></div> 
    </div>
  );
  }
export default withLoginRequired(
  withAuth(EditBio)
);