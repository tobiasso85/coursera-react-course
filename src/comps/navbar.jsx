import logoSvg from "./logo.svg";
import "./navbar.css"; // optional if you use the CSS below


const Navbar = (props) => {

  const { internalLinks } = props;
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
                  <li>
                    <a key={i} href={e.href} className="internallink">{e.name}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
