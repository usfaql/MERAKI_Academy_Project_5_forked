import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import Register from "./components/RegisterPage/Register";

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      {/* <LandingPage/> */}
          {/*   <Register/> */}
      <Login/>  
    </div>
  );
}

export default App;
