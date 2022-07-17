import "./App.css";
import Intro from "./components/Intro";
import NavigationBar from "./components/NavigationBar";
import Superhero from "./components/Superhero";
import Trending from "./components/Trending";
import "./style/LandingPage.css";

function App() {
  return (
    <div>
      <div className="myBG vh-100">
        <NavigationBar />
        <Intro />
      </div>
      <div className="trending">
        <Trending />
        <Superhero />
      </div>
    </div>
  );
}

export default App;
