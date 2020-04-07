import React, {useState} from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Create.css';

/* https://github.com/zenoamaro/react-quill
 */

 

 function Create() {

  const [value, setValue] = useState('');
  const [headline, setHeadline] = useState('');


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
    const combinePost = {headline, body: value};
    createPost(combinePost);
    setValue('');
    setHeadline('');
  }

  const changeHandler = (e) => {
    setHeadline(e.target.value);
  }

  return (
    
    <div className="create_wrapper">
      <span className="headline_span">Headline:</span>
      <input className="create_headline" value={headline} onChange={changeHandler} ></input>
    <span className="body_span">Body:</span>
    <ReactQuill theme="snow" value={value} onChange={setValue} />
    <button className="submit_btn" type="submit" onClick={submitHandler}> Submit post </button>
    </div>
  );
}
export default Create;