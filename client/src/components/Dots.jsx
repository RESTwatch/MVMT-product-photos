import React from 'react';

const Dots = (props) => (
    <ul className="slick-dots">
      <li>
        <img name="frontImg" src={props.images.frontImg} className="front" onClick={props.selectImg} />
      </li>
      <li>
        <img name="sideImg" src={props.images.sideImg} className="side" onClick={props.selectImg} />
      </li>
      <li>
        <img name="backImg" src={props.images.backImg} className="back" onClick={props.selectImg} />
      </li>
      <li>
        <img name="box" src={props.images.box} className="box" onClick={props.selectImg} />
      </li>
      <li>
        <img name="styleImg" src={props.images.styleImg} className="style" onClick={props.selectImg} />
      </li>
    </ul>
)

export default Dots;
