import React from 'react';
import urlParser from 'url-parse';
import Main from './Main.jsx';
import Dots from './Dots.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: {}
    }
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
      });
    })
  }

  render () {
    return (
      <div>
        <Dots images={this.state.photos} />
        <Main currImage={this.state.photos.frontImg} />
      </div>      
    )
  }
}

export default App;
