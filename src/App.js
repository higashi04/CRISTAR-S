import './App.css';
import { Route, Outlet, BrowserRouter, Routes } from 'react-router-dom';
///pages
import Home from './Pages/Home/Home';
import Servicios from './Pages/Servicios/Servicios';
import Nosotros from './Pages/Nosotros/Nosotros';

//components
import OffCanvas from './components/OffCanvas/OffCanvas';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
        <OffCanvas/>
        <div>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='servicios' element={<Servicios/>} />
            <Route path='nosotros' element={<Nosotros/>} />
          </Routes>
        </div>
      </BrowserRouter>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
