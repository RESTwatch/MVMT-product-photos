import React from 'react';

const Main = (props) => (
  <div className="photos-current-img" onClick={props.toggleZoom}>
    <img className="photos-slider-image" src={props.currImage}/>
    <img className="photos-zoom-icon" src="https://s3-us-west-1.amazonaws.com/hrsf107-the-event-handlers-mvmt-photos/zoom-hover.png" />
  </div>
)

export default Main;
