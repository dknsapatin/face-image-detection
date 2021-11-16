import react, { Component } from "react";
import "./App.css";
import Clarifai from "clarifai";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm.js";
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
    };
  }
  //on the input line
  onInputChange = (event) => {
    console.log(event.target.value);
  };
  //Detect Submit Button
  onButtonSubmit = (event) => {
    console.log("click");
    app.models
      .predict(
        "a403429f2ddf4b49b307e318f00e528b",
        "https://samples.clarifai.com/face-det.jpg"
      )
      .then(
        function (response) {
          console.log(response);
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
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
