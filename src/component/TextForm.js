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
    navigator.clipboard.writeText(text);
    props.showAlert('Copyed Text', 'success');
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
        <h2 className="my-2 mx-2"> {props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(70 111 154)', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lower Case
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleRemoveExtraText}>
          Remove extra Space
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleReverseText}>
          Reverse text
        </button>
      </div>
      <div className="container mx-3 my-3" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your Text Summery</h2>
        <p>
          Number of Words -{' '}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{' '}
          , Number of Charecters - {text.length}{' '}
        </p>
        <p>
          {' '}
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{' '}
          Minutes of Read
        </p>
        <h2>PREVIEW</h2>
        <p>{text.length > 0 ? text : 'Enter Something to the text box'}</p>
      </div>
    </>
  );
}
