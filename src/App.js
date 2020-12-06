import './App.css';
import tachyons from 'tachyons';
import Particles from 'react-tsparticles';
import particles from './assets/particles.json'
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Title from './components/Title/Title';

//const particleOptions = JSON.parse(particles);

function App() {
  return (
    <div className="App">
      <Particles className="particles" id="tsparticles" options={particles}/>
      <Navigation />
      <Title />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
