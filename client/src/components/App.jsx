import React from 'react';
import urlParser from 'url-parse';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: null,
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
      console.log(photos);
      this.setState({
        photos: photos[0],
      });
    });
  }

  render () {
    return (
      <div>
        <div>Hello from Photos</div>
      </div>      
    )
  }
}

export default App;
