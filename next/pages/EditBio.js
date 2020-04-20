import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Router from 'next/router';

import { withAuth, withLoginRequired } from 'use-auth0-hooks';

function EditBio({ auth }) {
  const { user } = auth;
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [image, setImage] = useState('');
  const [userBio, setUserBio] = useState(); 

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    await axios
      .get(`http://localhost:3001/users/${user.nickname}`)
      .then(res => {
        console.log(res.data[0]);
        setUserBio(res.data[0]);
      });
  };

  const editBio = async (user, body) => {
    await axios.put(`http://localhost:3001/bio/${user.nickname}`, body);
  };

  const submitHandler = () => {
    if (bio.length < 1 && location.length < 1 && website.length < 1) {
      alert('You must add come info before submitting!');
      return false;
    }
    const combinePost = { bio, location, website, image };
    editBio(user, combinePost);
    Router.push('/submitted');
  };

  const bioChangeHandler = e => {
    setBio(e.target.value);
  };
  const imageChangeHandler = e => {
    setImage(e.target.value);
  };

  const locationChangeHandler = e => {
    setLocation(e.target.value);
  };
  const websiteChangeHandler = e => {
    setWebsite(e.target.value);
  };

  return (
    <div className='create_wrapper'>
      <span className='headline_span'>Bio:</span>
      <input
        className='create_headline'
        value={bio}
        onChange={bioChangeHandler}
        placeholder={userBio && userBio.bio || 'Tell us about yourself. Briefly!'}
      ></input>
      <span className='headline_span'>Location:</span>
      <input
        className='create_tags'
        value={location}
        onChange={locationChangeHandler}
        placeholder={userBio && userBio.location || 'Where are you living?'}
      ></input>
      <span className='headline_span'>Image:</span>
      <input
        className='create_tags'
        value={image}
        onChange={imageChangeHandler}
        placeholder='Got a selfie handy?'
      ></input>
      <span className='headline_span'>Website:</span>
      <input
        className='create_tags'
        value={website}
        onChange={websiteChangeHandler}
        placeholder={userBio && userBio.website || 'Where can we find you online?'}
      ></input>

      <div className='btn_wrapper'>
        <button className='submit_btn' type='submit' onClick={submitHandler}>
          {' '}
          Save{' '}
        </button>
      </div>
    </div>
  );
}
export default withLoginRequired(withAuth(EditBio));
