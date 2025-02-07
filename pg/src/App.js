import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import CardCursos from './components/CardCursos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/curso.nome/id" element={<CardCursos />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
