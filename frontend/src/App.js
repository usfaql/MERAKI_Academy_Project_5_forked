import {Route, Routes} from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import Register from "./components/RegisterPage/Register";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import CoachPrivate from "./components/CoachPrivate/CoachPrivate";
import CreateGym from "./components/CreateGym/CreateGym";

function App() {
  return (
    <div className="App">
     <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/gym/create" element={<CreateGym/>}/>
        <Route path="/coach/private" element={<CoachPrivate/>}/>
      </Routes>
    </div>
  );
}

export default App;
