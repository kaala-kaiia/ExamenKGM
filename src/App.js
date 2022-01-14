import logo from "./logo.svg";
import "./assets/scss/App.scss";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
