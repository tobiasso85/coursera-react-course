import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ConfirmedBooking from './comps/bookings/confirmedBooking';
import Footer from './comps/footer';
import Navbar from './comps/navigationbar';
import About from './pages/about';
import Home from './pages/home';
import Login from './pages/login';
import Menu from './pages/menu';
import OrderOnline from './pages/orderOnline';
import Reservations from './pages/reservations';


const internalLinks = [{
  href: "/",
  name: "Home",
  comp: Home
}, {
  href: "/about",
  name: "About",
  comp: About
}, {
  href: "/menu",
  name: "Menu",
  comp: Menu
}, {
  href: "/reservations",
  name: "Reservations",
  comp: Reservations
}, {
  href: "/orderonline",
  name: "Order Online",
  comp: OrderOnline
}, {
  href: "/login",
  name: "Login",
  comp: Login
}, {
  href: "/confirmed",
  name: "",
  comp: ConfirmedBooking
}]

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar internalLinks={internalLinks}></Navbar>
        <main className="themain">

          <Routes>
            {internalLinks.map((e, i) => {
              const Comp = e.comp;
              return <Route key={i} path={e.href} element={<Comp></Comp>}></Route>
            })}
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
