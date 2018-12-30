import React from 'react';
import urlParser from 'url-parse';
import Main from './Main.jsx';
import Dots from './Dots.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: {},
      currImage: null,
    }
    this.selectMainImage = this.selectMainImage.bind(this);
  }

  selectMainImage (e) {
    let photoName = e.target.name;
    this.setState({
      photos: this.state.photos,
      currImage: this.state.photos[photoName],
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
          <Main currImage={this.state.currImage} />
        </div>
        <div className="photos-zoom-box"></div>
      </div>    
    )
  }
}

export default App;
