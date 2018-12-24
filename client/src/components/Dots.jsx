import React from 'react';

const Dots = (props) => (
    <ul className="slick-dots">
      <li>
        <img name="frontImg" src={props.photos.frontImg} className="front" onClick={props.selectImg} />
      </li>
      <li>
        <img name="sideImg" src={props.photos.sideImg} className="side" onClick={props.selectImg} />
      </li>
      <li>
        <img name="backImg" src={props.photos.backImg} className="back" onClick={props.selectImg} />
      </li>
      <li>
        <img name="box" src={props.photos.box} className="box" onClick={props.selectImg} />
      </li>
      <li>
        <img name="styleImg" src={props.photos.styleImg} className="style" onClick={props.selectImg} />
      </li>
    </ul>
)

export default Dots;
