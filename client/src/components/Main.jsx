import React from 'react';

const Main = (props) => {
  let showZoom = props.zoomed ? 'photos-current-img-hide' : 'photos-current-img-show'
  return (
    <div className={showZoom} onClick={props.toggleZoom}>
      <img className="photos-slider-image" src={props.currImage}/>
      <img className="photos-zoom-icon" src="https://s3-us-west-1.amazonaws.com/hrsf107-the-event-handlers-mvmt-photos/zoom-hover.png" />
    </div>
  );
}

export default Main;
