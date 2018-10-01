import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageGenerator from './Components/ImageGenerator/imagegenerator';
import TextInputControl from './Components/TextInputControl/textinputcontrol'
import './assets/fonts/fonts.css'
import { Line, Circle } from 'rc-progress';
import ReactDOM from 'react-dom';




class App extends Component {
  state = {
    texture: 0,
    totalCount: 20,
    countWithCurrentText: 0,
    currentTextIndex: 0,
    currentCount: 1,
    showProgress: false,
    strokeColor: "blue"
  }

  textArray = ['AP 25', 'MP 02', '3335', 'TL67', '9582', '19L2'];
  imagesPerText = 0;
  totalImagesToGenerate = 2;
  completion = 0;
  showProgress = false;

  loop;

  componentWillMount() {
    this.setState({
      totalCount: this.totalImagesToGenerate
    })
  }

  rotateTexture = () => {
    this.setState({
      showProgress: true
    })
    this.completion = (this.state.currentCount / this.totalImagesToGenerate) * 100;
    // if(totalCount>0){

    // }
    this.loop = setInterval(() => {
      this.completion = (this.state.currentCount / this.totalImagesToGenerate) * 100;
      this.updatePillLooks()
    }, 2000)
  }


  updatePillLooks = () => {
    if (this.state.totalCount > 0) {


      this.setState(prevstate => {
        if (prevstate.countWithCurrentText > this.imagesPerText) {
          return {
            countWithCurrentText: 0,
            currentTextIndex: prevstate.currentTextIndex + 1,
            totalCount: prevstate.totalCount - 1,
            currentCount: prevstate.currentCount + 1
          }
        }
        else {
          return {
            countWithCurrentText: prevstate.countWithCurrentText + 1,
            totalCount: prevstate.totalCount - 1,
            currentCount: prevstate.currentCount + 1
          }
        }
      })

    } else {
      //alert('done');
      clearInterval(this.loop);
      this.setState({ showProgress: false })

    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // return (this.state.countWithCurrentText==0 || (this.state.countWithCurrentText != nextState.countWithCurrentText)) || 
    // (this.state.showProgress !=nextState.showProgress)
    return (this.state.currentCount != nextState.currentCount || this.state.strokeColor != nextState.strokeColor || this.state.showProgress !=nextState.showProgress)
    
  }

  onPillTextChangeHandler = (val) => {
    //console.log(val.target.value);
    this.setState({
      totalCount: val.target.value
    })
    this.totalImagesToGenerate = val.target.value;

  }

  render() {
    let progressbar;
    let imagegen;
    if (this.state.showProgress == true) {
      progressbar = <Line percent={this.completion} strokeWidth="2" strokeColor={this.state.strokeColor} />
    }

    if (this.state.showProgress == true) {
      imagegen = <ImageGenerator text={this.textArray[this.state.currentTextIndex]} />
    }
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Pill Image Generator</h1>
        </header>
        <div className="container">
          {/* <div className="controls-container">
            <h2>Controls</h2>
            
          </div> */}
          <div className="imagegen-container">
            <div>
              <b>Enter number of images to generate</b>
              <TextInputControl id="enter-number" pillTextChangeHandler={this.onPillTextChangeHandler} />
              <button style={styles.button} onClick={(e) => this.rotateTexture(e)}>Generate</button>
            </div>

            {progressbar}

            <div>
              {imagegen}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const styles = {
  button: {
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px"
  }
}
export default App;
