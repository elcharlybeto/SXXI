import { Login } from "../Login/Login";
import { Listado } from "../Listado/Listado";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/listado" element={<Listado/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
