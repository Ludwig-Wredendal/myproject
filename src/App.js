import Home from "./pages/Home";
import Contact from "./components/Contact";
import Facebook from "./components/Facebook";
import Menu from "./components/Menu";
import Cursor from "./Cursor";

import Extra from "./pages/Extra";
import Extratwo from "./pages/Extratwo";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path="/" element = {<Home/>} />
        <Route path="/extra" element = {<Extra/>} />
        <Route path="/extratwo" element = {<Extratwo/>} />
      </Routes>

      <Contact/>
      <Facebook/>
      <Menu />


    </Router>

    <Cursor />

    </div>
  );
}

export default App;
