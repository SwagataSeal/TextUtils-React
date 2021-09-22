import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Upper Case', 'success');
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lower Case', 'success');
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert('cleared Text', 'success');
  };

  const handleCopyClick = () => {
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleRemoveExtraText = () => {
    var newText = text.split(/[ ]+/);
    setText(newText.join(' '));
  };

  const handleReverseText = () => {
    var newText = text.split('');
    var reverseString = newText.reverse();
    setText(reverseString.join(''));
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  return (
    <>
      <div className="container" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1> {props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lower Case
        </button>
        <buttopn className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear text
        </buttopn>
        <buttopn className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy text
        </buttopn>
        <buttopn className="btn btn-primary mx-1" onClick={handleRemoveExtraText}>
          Remove extra Space
        </buttopn>
        <buttopn className="btn btn-primary mx-1" onClick={handleReverseText}>
          Reverse text
        </buttopn>
      </div>
      <div className="container mx-3 my-3" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your Text Summery</h2>
        <p>
          Number of Words - {text.split(' ').length} , Number of Charecters - {text.length}{' '}
        </p>
        <p> {0.008 * text.split(' ').length} Minutes of Read</p>
        <h2>PREVIEW</h2>
        <p>{text.length > 0 ? text : 'Enter Something to the text box'}</p>
      </div>
    </>
  );
}
