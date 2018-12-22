import React from 'react';

const Dots = (props) => (
  <div className="dots">
    <ul>
      <li>
        <img src={props.images.frontImg} className="front"/>
      </li>
      <li>
        <img src={props.images.sideImg} className="side"/>
      </li>
      <li>
        <img src={props.images.backImg} className="back"/>
      </li>
      <li>
        <img src={props.images.box} className="box"/>
      </li>
      <li>
        <img src={props.images.styleImg} className="style"/>
      </li>
    </ul>
  </div>
)

export default Dots;
