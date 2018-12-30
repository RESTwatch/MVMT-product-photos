import React from 'react';

const Dots = (props) => (
    <ul className="photos-slick-dots">
      <li>
        <img name="frontImg" src={props.photos.frontImg} className="photos-front" onClick={props.selectImg} />
      </li>
      <li>
        <img name="sideImg" src={props.photos.sideImg} className="photos-side" onClick={props.selectImg} />
      </li>
      <li>
        <img name="backImg" src={props.photos.backImg} className="photos-back" onClick={props.selectImg} />
      </li>
      <li>
        <img name="box" src={props.photos.box} className="photos-box" onClick={props.selectImg} />
      </li>
      <li>
        <img name="styleImg" src={props.photos.styleImg} className="photos-style" onClick={props.selectImg} />
      </li>
      <li className="photos-see-it-styled">
        SEE IT STYLED
      </li>
    </ul>
)

export default Dots;
