import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Router from 'next/router';
import Files from 'react-butterfiles';

import { withAuth, withLoginRequired } from 'use-auth0-hooks';

function EditBio({ auth }) {
  const { user } = auth;
  const [bio, setBio] = useState();
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [image, setImage] = useState('');
  const [userBio, setUserBio] = useState();
/*   const [files, setFiles] = useState([]);
 */
  useEffect(() => {
    getUser();
  }, []);



  const createUser = async name => {
    await axios.post(`/users`, {
      name: name,
      image: user.picture
    });
  };

  const editBio = (user, combinedPost) => {
    axios
      .get(`/users/${user.nickname}`)
      .then(res => {
        if (!res.data[0]) {
          createUser(user.nickname);
        }
        return res;
      })
      .then(res => {
        axios.put(`/bio/${user.nickname}`, combinedPost);
      });
  };

  const getUser = async () => {
    await axios
      .get(`/users/${user.nickname}`)
      .then(res => {
        
        if (res.data.length > 0) 
       { setUserBio(res.data[0]);
        setBio(res.data[0].bio);
        setLocation(res.data[0].location)
        setImage(res.data[0].image)
        setWebsite(res.data[0].website); }
      });
  };

  const submitHandler = () => {
    if (bio.length < 1 && location.length < 1 && website.length < 1) {
      alert('You must add some info before submitting!');
      return false;
    }
    const imageString = image.length > 6 ? image : null;
    const combinedPost = { bio, location, website, image};
    editBio(user, combinedPost);
    Router.push('/submitted');
  };

  const bioChangeHandler = e => {
    setBio(e.target.value);
  };

  const locationChangeHandler = e => {
    setLocation(e.target.value);
  };
  const websiteChangeHandler = e => {
    setWebsite(e.target.value);
  };
  const imageChangeHandler = e => {
    setImage(e.target.value);
  };

  return (
    <div className='create_wrapper'>
      <span className='headline_span'>Bio:</span>
      <input
        className='create_headline'
        value={bio}
        onChange={bioChangeHandler}
        placeholder={'Tell us about yourself. Briefly!'}
      ></input>
      <span className='headline_span'>Location:</span>
      <input
        className='create_tags'
        value={location}
        onChange={locationChangeHandler}
        placeholder={'Where are you living?'}
      ></input>
      

      <span className='headline_span'>Website:</span>
      <input
        className='create_tags'
        value={website}
        onChange={websiteChangeHandler}
        placeholder={'Where can we find you online?'}
      ></input>

<span className='headline_span'>Image:</span>
      <input
        className='create_tags'
        value={image}
        onChange={imageChangeHandler}
        placeholder={'Got a selfie handy? Link us'}
      ></input>
{/* 
      <Files
        multiple={false}
        maxSize='2mb'
        accept={['image/jpg', 'image/jpeg']}
        onSuccess={newFile => {
          console.log('new file is...', newFile);
          setFiles([...newFile]);
        }}
      >
        {({ browseFiles, getDropZoneProps, getLabelProps }) => (
          <>
            <label {...getLabelProps()} className='headline_span'>
              Upload a profile image
            </label>
            <div {...getDropZoneProps({ className: 'myDropZone' })} />
            <button onClick={browseFiles}>Select files...</button>

            <div>
              {files[0] && files[0].name}
            </div>
          </>
        )}
      </Files> */}

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
