import React, { Component } from 'react';
import './App.css';

class App extends Component {

  createPicture = (upload) => {
    fetch('http://localhost300/pictures', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        picture: {
          img_url: upload
        }
      })
    })
    .then(resp => resp.json())
    .then(p)
  }


  render() {

    let styles = {
      width:'300px',
      height:'200px'
    }

    return (
      <div className="App">
        <form>
          <input type="file"/>
          <br/>
          <div onClick={() => console.log("hi")}>post picture</div>
          <br/>
          <img id="preview" src="#" alt="your upload" style={styles} />
        </form>
      </div>
    );
  }
}

export default App;
