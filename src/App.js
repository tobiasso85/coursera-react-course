import './App.css';
import Footer from './comps/footer';
import Hero from './comps/hero';
import Navbar from './comps/navigationbar';
import Overview from './comps/overview';
import Specials from './comps/specials/specials';
import Testimonials from './comps/testimonials';


const internalLinks = [{
  href: "#home",
  name: "Home"
}, {
  href: "#about",
  name: "About"
}, {
  href: "#menu",
  name: "Menu"
}, {
  href: "#reservations",
  name: "Reservations"
}, {
  href: "#orderonline",
  name: "Order Online"
}, {
  href: "#login",
  name: "Login"
}]

function App() {
  return (
    <div className="App">
      <Navbar internalLinks={internalLinks} ></Navbar>
      <main className='themain'>
        {/* top little lemon */}
        <Hero></Hero>
        {/* specials */}
        <Specials></Specials>
        {/* testimonials */}
        <Testimonials></Testimonials>
        {/* description */}

       <Overview></Overview>



      </main>



      <Footer></Footer>
    </div>
  );
}

export default App;
