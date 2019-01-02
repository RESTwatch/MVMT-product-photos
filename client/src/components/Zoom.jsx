import React from 'react';

class Zoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 0,
      left: 0,
    }
    this.panImage = this.panImage.bind(this);
  }
  
  panImage (e) {
    let xPos = -e.clientX / 4;
    let yPos = -e.clientY / 1.5;

    this.setState({
      top: yPos,
      left: xPos,
    });
  }

  render () {
    let showZoom = this.props.zoomed ? 'photos-zoom-box-true' : 'photos-zoom-box-false'
    let divStyle = {
      position: 'absolute',
      top: this.state.top,
      left: this.state.left,
    }

    return (
      <div className={showZoom} onClick={this.props.toggleZoom} onMouseMove={this.panImage}>
        <img className="photos-zoom-image" src={this.props.currImage} style={divStyle}/>
      </div>
    )
  }
  
}

export default Zoom;