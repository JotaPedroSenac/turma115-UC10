import Home from "./pages/home/Home";
import CadastroPage from "./pages/CadastroPage/CadastroPage";
import {BrowserRouter, Routes, Route } from "react-router-dom";

function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<CadastroPage />} />
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;