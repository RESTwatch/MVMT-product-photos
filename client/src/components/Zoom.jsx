import React from 'react';

const Zoom = (props) => {
  let showZoom = props.zoomed ? 'photos-zoom-box-true' : 'photos-zoom-box-false'

  const panImage = (e) => {
    let left = -e.clientX / 4;
    let top = -e.clientY;
    const divStyle = {
      position: 'absolute',
      top: top,
      left: left,
    };
    console.log(divStyle);
    return divStyle;
  }

  return (
    <div className={showZoom} onClick={props.toggleZoom} onMouseMove={panImage}>
      <img className="photos-zoom-image" src={props.currImage} />
    </div>
  );
}

export default Zoom;