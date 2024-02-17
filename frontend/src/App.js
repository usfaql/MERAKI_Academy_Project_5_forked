import {Route, Routes} from "react-router-dom"
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/LoginPage/Login";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
