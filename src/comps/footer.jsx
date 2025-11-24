import "./footer.css"; // optional if you use the CSS below
import footerimg from "./footer.png";
import Grid from "./gridComp";


const footerColumn = (header, links) => {
  return <>
    <h4>{header}</h4>
    <ul>
      {links.map((l, i) => {
        return <li key={i}>{l.name}</li>
      })}
    </ul>
  </>
}

const Footer = () => {

  return (
    <footer className="footer">
      <Grid>
        <div>
          <img src={footerimg} alt="footer img" height="150px"/>
        </div>
        <div>
          {footerColumn("Document Navigation", [{
            name: "Home"
          },
          {
            name: "About"
          },
          {
            name: "Menu"
          },
          {
            name: "Reservations"
          },
          {
            name: "Order Online"
          },
          {
            name: "Login"
          }])}
        </div>
        <div>
                    {footerColumn("Contact", [{
            name: "Adress"
          },
          {
            name: "phone number"
          },
          {
            name: "email"
          }])}
        </div>
        <div>
          {footerColumn("Social Media Links", [{
            name: "Adress"
          },
          {
            name: "phone number"
          },
          {
            name: "email"
          }])}
        </div>

      </Grid>
    </footer>
  );
};

export default Footer;
