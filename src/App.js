import React from 'react';
import './App.css';
import 'tachyons';
import Clarifai from 'clarifai';
import Particles from 'react-tsparticles';
import particlesData from './assets/particles.json'
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Title from './components/Title/Title';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

const api = process.env.REACT_APP_API_KEY;
const app = new Clarifai.App({
  apiKey: api
});

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      lookalike: '',
      confidence: ''
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      botRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  findLookALike = (data) => {
    this.setState({lookalike: data.outputs[0].data.regions[0].data.concepts[0].name});
    this.setState({confidence: data.outputs[0].data.regions[0].data.concepts[0].value});
  }

  displayFaceBox = (box) => {
    this.setState({box: box})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})

    app.models.predict(Clarifai.CELEBRITY_MODEL, this.state.input)
    .then(response => {
      this.findLookALike(response);
      this.displayFaceBox(this.calculateFaceLocation(response));
    })
    .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }

  render() {
    const {isSignedIn, imageUrl, route, box, lookalike, confidence} = this.state;
    let page;
    if (route === 'home'){
      page = <div>
              <Logo />
              <Rank />
              <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} 
              lookalike={lookalike} confidence={confidence}/>
              <FaceRecognition box={box} imageUrl={imageUrl}/>
            </div>
    } else if (route === 'signin') {
      page = <div>
              <Title />
              <Signin onRouteChange={this.onRouteChange}/>
            </div>
    } else if (route === 'signout') {
      page = <div>
              <Title />
              <Signin onRouteChange={this.onRouteChange}/>
            </div>
    } else {
      page = <div>
              <Title />
              <Register onRouteChange={this.onRouteChange}/>
            </div>
    }
    return (
      <div className="App">
        <Particles className="particles" id="tsparticles" options={particlesData}/>
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/>
        {page}
      </div>
    );
  }
}

export default App;
