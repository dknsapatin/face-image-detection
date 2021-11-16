import react, { Component } from "react";
import "./App.css";
import Clarifai from "clarifai";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";

// Clarifai API
const app = new Clarifai.App({
  apiKey: "c7fd46dde6274cf9a6daaf39cd8305b3",
});
// Particles API
const particlesOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 10,
      },
    },
    number: {
      value: 75,
      density: {
        value_area: 800,
      },
    },
  },
};

//App starts here
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
    };
  }
  //on the input line
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };
  //Detect Submit Button
  onButtonSubmit = (event) => {
    console.log("click");
    //Pass input through imageUrl - Add imageUrl in FaceRecognition below and pass it through
    this.setState({ imageUrl: this.state.input });

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function (response) {
        console.log(
          response.outputs[0].data.regions[0].region_info.bounding_box
        );
      },
      function (err) {}
    );
  };
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
