import React from 'react';
import urlParser from 'url-parse';
import Main from './Main.jsx';
import Dots from './Dots.jsx';
import Zoom from './Zoom.jsx';
import styles from '../../public/styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: {},
      currImage: null,
      zoomToggle: false,
    }
    this.selectMainImage = this.selectMainImage.bind(this);
    this.toggleZoom = this.toggleZoom.bind(this);
  }

  selectMainImage (e) {
    let photoName = e.target.name;
    this.setState({
      photos: this.state.photos,
      currImage: this.state.photos[photoName],
    });
  }

  toggleZoom (e) {
    this.setState({
      zoomToggle: !this.state.zoomToggle,
    });
  }

  componentDidMount() {
    let pathname = urlParser().pathname;
    let watchId = Number(pathname.slice(pathname.length - 4, pathname.length -1));
    
    fetch(`/api/watches/${watchId}/photos`)
    .then((results) => {
      return results.json();
    })
    .then((photos) => {
      this.setState({
        photos: photos,
        currImage: photos.frontImg,
      });
    })
  }

  render () {
    return (
      <div className="photos-product-left">
        <div className="photos-product-slider">
          <Dots photos={this.state.photos} selectImg={this.selectMainImage} />
          <Main currImage={this.state.currImage} zoomed={this.state.zoomToggle} toggleZoom={this.toggleZoom} />
        </div>
        <Zoom currImage={this.state.currImage} zoomed={this.state.zoomToggle} toggleZoom={this.toggleZoom} />
      </div>    
    )
  }
}

export default App;
