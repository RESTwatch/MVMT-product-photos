import React from 'react';

const Main = (props) => (
  <div className="photos-current-img" onClick={props.toggleZoom}>
    <img className="photos-slider-image" src={props.currImage}/>
  </div>
)

export default Main;
