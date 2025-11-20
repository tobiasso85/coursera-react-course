import "./navbar.css"; // optional if you use the CSS below


const Navbar = (props) => {

  const { externalLinks, internalLinks } = props;
  return (
    <header>

      <nav className="navbar">
        <div className="nav-left">
          <ul>

            {externalLinks.map((e, index) => {

              return (

                <li>
                  <a key={index} href={e.href} target="_blank" rel="noreferrer">{e.logo}</a>

                </li>
              )
            })}
          </ul>
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
