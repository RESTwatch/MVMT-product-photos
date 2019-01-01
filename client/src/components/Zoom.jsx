import React from 'react';

const Zoom = (props) => {
  let showZoom = props.zoomed ? 'photos-zoom-box-true' : 'photos-zoom-box-false'

  return (
    <div className={showZoom} onClick={props.toggleZoom}>
      <img className="photos-zoom-image" src={props.currImage}/>
      <div className="photos-zoom-icon">
        <img className="photos-zoom-hover-icon" src="https://s3-us-west-1.amazonaws.com/hrsf107-the-event-handlers-mvmt-photos/zoom-hover.jpg"></img>
      </div>
    </div>
  );
}

export default Zoom;