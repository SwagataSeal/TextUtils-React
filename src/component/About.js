import React, { useState } from 'react';

export default function (props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white',
  // });

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : 'rgb(53 89 115)',
    backgroundColor: props.mode === 'dark' ? 'rgb(53 89 115)' : 'white',
    border: 'solid',
  };

  // const [btnText, setBtnText] = useState('Enable Dark Mode');

  // const toggleBtn = () => {
  //   if (myStyle.color === 'white') {
  //     setMyStyle({ color: 'black', backgroundColor: 'white' });
  //     setBtnText('Enable light Mode');
  //   } else setMyStyle({ color: 'white', backgroundColor: 'black' });
  //   setBtnText('Enable Light Mode');
  // };

  return (
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'rgb(53 89 115)' }}>
      <h2 className="mx-3 my-3">About Us</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Textutils gives You a way to analyze your text quickly and efficiently. Be it word Cound, Charecter Count or Removing extra spaces etc.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils is a free charecter count tool that provides instant charecter count & word Count statestics for a given text.TextUtils reports the number of Charecters and words. Thus it is suitable for writing tet with word/ Charecter.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browswe Compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              This word Counter tool works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button onClick={toggleBtn} type="button" className="btn btn-primary">
          {btnText}
        </button>
      </div> */}
    </div>
  );
}
