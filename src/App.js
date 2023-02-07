import './App.css';
import { Route, Outlet, BrowserRouter, Routes } from 'react-router-dom';
///pages
import Home from './Pages/Home/Home';

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
          </Routes>
        </div>
      </BrowserRouter>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
