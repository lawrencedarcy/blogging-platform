import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Create.css';

/* https://github.com/zenoamaro/react-quill
 */

 function Create() {

  const [value, setValue] = useState('');
  const [headline, setHeadline] = useState('');


  const changeHandler = (e) => {
    setHeadline(e.target.value);
  }

  return (
    
    <div className="create_wrapper">
      <span>Headline:</span>
      <input className="create_headline" value={headline} onChange={changeHandler} ></input>
    <span>Body:</span>
    <ReactQuill theme="snow" value={value} onChange={setValue} />
    <div className="submit_btn"> Submit post </div>
    </div>
  );
}
export default Create;