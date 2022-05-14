import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Pocetna from "./views/Pocetna";
import Objave from "./views/Objave";
import Projekti from "./views/Projekti";
import Onama from './views/Onama';
import Kontakt from './views/Kontakt';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Pocetna/>}/>
          <Route path='/objave' exact element={<Objave/>}/>
          <Route path='/projekti' exact element={<Projekti/>}/>
          <Route path='/o-nama' exact element={<Onama/>}/>
          <Route path='/kontakt' exact element={<Kontakt/>}/>
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
