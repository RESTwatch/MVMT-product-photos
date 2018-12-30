import React from 'react';

const Main = (props) => (
  <div className="photos-current-img">
    <img className="photos-slider-image" src={props.currImage}/>
  </div>
)

export default Main;
