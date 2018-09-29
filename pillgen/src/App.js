import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageGenerator from './Components/ImageGenerator/imagegenerator';
import ShapeControl from './Components/ShapeControl/shapecontrol';
import TextInputControl from './Components/TextInputControl/textinputcontrol'
import TextLayoutControl from './Components/TextLayoutControl/textlayoutcontrl'
import TextureControl from './Components/TextureControl/texturecontrol';
import './assets/fonts/fonts.css'



class App extends Component {
  state = {
    texture: 1,
    shape: 0,
    imprint: 0,
    imprintStyle: 0,
    color: 0,
    imprintLayout: 0
  }

  rotateTexture = () => {
    setInterval(() => this.updatePillConfig(), 2000)
  }

  updatePillConfig = () => {
    if (this.state.texture < 10) {
      console.log(this.state.texture)
      this.setState({
        texture: this.state.texture + 1
      })
    }
  }

  onPillTextChangeHandler = (val) => {
    console.log(val.target.value);
    this.setState({
      imprint: val.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <div className="controls-container">
            <h2>Controls</h2>
            <ShapeControl />
            <TextureControl />
            <TextInputControl pillTextChangeHandler={this.onPillTextChangeHandler} />
            <TextLayoutControl />
            <button onClick={() => this.rotateTexture()}>Generate</button>
          </div>
          <div className="imagegen-container">
            <h2>Pill Image</h2>
            <ImageGenerator texture={this.state.texture} text={this.state.imprint} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
