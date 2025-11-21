import About from "../pages/about";
import Home from "../pages/home";
import Login from "../pages/login";
import Menu from "../pages/menu";
import OrderOnline from "../pages/orderOnline";
import Reservations from "../pages/reservations";
import logoSvg from "./logo.svg";
import "./navigationbar.css"; // optional if you use the CSS below


import { Link, Route, Routes } from "react-router-dom";

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
}]

const Navbar = () => {

  return (
    <header>

      <nav className="navbar">
        <div className="nav-left">
          <img src={logoSvg} alt="logo"></img>
        </div>

        <div className="nav-right">
          <ul>
            {
              internalLinks.map((e, i) => {
                return (
                  <li key={i} >
                    <Link to={e.href} className="navItem">{e.name}</Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </nav>

      <Routes>
        {internalLinks.map((e, i) => {
          const Comp = e.comp;
          return <Route key={i} path={e.href} element={<Comp></Comp>}></Route>
        })}
      </Routes>
    </header>
  );
};

export default Navbar;
