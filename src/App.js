import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './comps/footer';
import Navbar from './comps/navigationbar';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
