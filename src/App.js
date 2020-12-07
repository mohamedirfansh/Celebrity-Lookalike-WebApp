import React from 'react';
import './App.css';
import 'tachyons';
import Clarifai from 'clarifai';
import Particles from 'react-tsparticles';
import particles from './assets/particles.json'
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Title from './components/Title/Title';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

const api = process.env.REACT_APP_API_KEY;
const app = new Clarifai.App({
  apiKey: api
});

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input,).then(
    function(response){
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
    },
    function(err){

    }
    );
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles" id="tsparticles" options={particles}/>
        <Navigation />
        <Title />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
