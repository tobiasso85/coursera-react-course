import "./footer.css"; // optional if you use the CSS below
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
          <div style={{ width: "80px", height: "200px", backgroundColor: "gray" }}></div>
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
