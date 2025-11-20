import './App.css';
import Footer from './comps/footer';
import Navbar from './comps/navbar';


const externalLinks = []
const internalLinks = [{
  href: "#projects",
  name: "Projects"
}, {
  href: "#contact",
  name: "Contact Me"
}]

function App() {
  return (
    <div className="App">
        <Navbar internalLinks={internalLinks} externalLinks={externalLinks}></Navbar>

      <Footer></Footer>
    </div>
  );
}

export default App;
