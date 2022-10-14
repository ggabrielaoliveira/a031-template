import React from "react";
import "./App.css";
import Garagem from "./componentes/Garagem";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";


export default function App() {
  

  return (
    <div className="App">
      <Header/>
     <h1>Aula - Componentes React</h1>
     <Garagem/>
     <Footer/>
    </div>
  );
}
