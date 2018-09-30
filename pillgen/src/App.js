import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageGenerator from './Components/ImageGenerator/imagegenerator';
import ShapeControl from './Components/ShapeControl/shapecontrol';
import TextInputControl from './Components/TextInputControl/textinputcontrol'
import TextLayoutControl from './Components/TextLayoutControl/textlayoutcontrl'
import TextureControl from './Components/TextureControl/texturecontrol';
import './assets/fonts/fonts.css'
import { Line, Circle } from 'rc-progress';



class App extends Component {
  state = {
    texture: 1,
    totalCount: 20,
    countWithCurrentText: 0,
    currentTextIndex: 0,
    currentCount:0
  }

  textArray = ['AP 25', 'MP 02', '3335', 'TL67', '9582', '19L2'];
  imagesPerText= 3;
  totalImagesToGenerate = 2;
  completion = 0;

  componentWillMount(){
    this.setState({
      totalCount:this.totalImagesToGenerate
    })
  }

  rotateTexture = () => {
    setInterval(() => {
      if(this.state.totalCount > 0){
        this.updatePillLooks()
      }
    }, 2000)
  }

  updatePillConfig = () => {
    if (this.state.currentTextIndex > -1 && this.state.currentTextIndex % 2 == 0) {
      console.log(this.state.texture)
      this.setState({
        texture: this.state.currentTextIndex + 1
      })
    }
  }

  updatePillLooks = () => {
    if (this.state.totalCount > 0) {
      if (this.state.countWithCurrentText > this.imagesPerText) {
        this.setState(prev => ({
          countWithCurrentText: 0,
          currentTextIndex: prev.currentTextIndex + 1,
        }))

        //this.updatePillConfig();
        console.log(this.state.countWithCurrentText, this.state.currentTextIndex)
      }

      else {
        this.setState(prev => ({
          countWithCurrentText: prev.countWithCurrentText + 1
        }))
        console.log(this.state.countWithCurrentText, this.state.currentTextIndex)
      }


      this.setState(prev => ({
        totalCount:prev.totalCount - 1,
        currentCount:prev.currentCount+1

      }));
      console.log(this.state.currentCount,this.totalImagesToGenerate)
      this.completion = (this.state.currentCount/this.totalImagesToGenerate)*100 ;
      console.log(this.completion)


    } else {
      alert('done')
    }
  }
 shouldComponentUpdate(nextProps,nextState){
  return this.state.countWithCurrentText !=nextState.countWithCurrentText
 }

  onPillTextChangeHandler = (val) => {
    //console.log(val.target.value);
    this.setState({
      totalCount: val.target.value
    })
    this.totalImagesToGenerate = val.target.value;

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
            <Line percent={this.completion} strokeWidth="4" strokeColor="#D3D3D3" />

            <ShapeControl />
            <TextureControl />
            <TextInputControl pillTextChangeHandler={this.onPillTextChangeHandler} />
            <TextLayoutControl />
            <button onClick={() => this.rotateTexture()}>Generate</button>
          </div>
          <div className="imagegen-container">
            <h2>Pill Image</h2>
            <ImageGenerator texture={this.state.texture} text={this.textArray[this.state.currentTextIndex]} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
