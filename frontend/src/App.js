import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Register from "./components/RegisterPage/Register";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <LandingPage/> */}
      <Register/>
    </div>
  );
}

export default App;
