import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";  
import Inicio from "./pages/Inicio";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />}/>
          <Route path="/cadastro" element={<Cadastro />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


/*
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Inicio from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

*/