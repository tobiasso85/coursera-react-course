import { useState } from "react";
import logoSvg from "./logo.svg";
import "./navigationbar.css"; // optional if you use the CSS below


import { Link } from "react-router-dom";



const Navbar = ({ internalLinks }) => {

  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <header>

        <nav className="navbar">
          <div className="nav-left">
            <img src={logoSvg} alt="logo"></img>
          </div>

          <button 
          className="hamburger" 
          type="button" 
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ?
            <div>
              <div className="bar1x"></div>
              <div className="bar2x"></div>
              <div className="bar3x"></div>
            </div> : 
            <div>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
}
        </button>

          <div className={expanded ? 'navbarlinks expanded' : 'navbarlinks'} 
          onClick={() => setExpanded(!expanded)}>
            <ul>
              {
                internalLinks.filter(x => x.name).map((e, i) => {
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

      </header>

    </>
  );
};

export default Navbar;
