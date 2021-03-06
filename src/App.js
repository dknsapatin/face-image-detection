import react, { Component } from "react";
import "./App.css";
import Clarifai from "clarifai";
import Navigation from "./components/Navigation/Navigation";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
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

//-----------------App starts here--------------------
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
      route: "Signin",
      isSignedIn: false,
    };
  }

  // This feeds data through calculateFaceLocation which dinds the leftCol, topRow, rightCol, bottomRow
  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  // This shows the blue box that finds the face of the image
  showBox = (box) => {
    this.setState({ box: box });
  };

  //on the input line
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  //Detect Submit Button
  onButtonSubmit = (event) => {
    //Pass input through imageUrl - Add imageUrl in FaceRecognition below and pass it through
    this.setState({ imageUrl: this.state.input });

    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => this.showBox(this.calculateFaceLocation(response)))
      .catch((err) => console.log(err));
  };

  onRouteChange = (route) => {
    if (route === "Signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "Home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {route === "Home" ? (
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition imageUrl={imageUrl} box={box} />
          </div>
        ) : route === "Signin" ? (
          <Signin onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
