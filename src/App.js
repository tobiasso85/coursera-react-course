import './App.css';
import Footer from './comps/footer';
import Grid from './comps/gridComp';
import Navbar from './comps/navbar';


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
      <Navbar internalLinks={internalLinks} ></Navbar>
      <main className='themain'>
        {/* top little lemon */}
        <Grid>
          <div style={{ "text-align": "left" }}>
            <article>
              <h1>Little Lemon</h1>
              <h3>Chicago</h3>
              <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
              <div>
                <button>Reserve a Table</button>
              </div>
            </article>
          </div>
          <div><div style={{
            backgroundColor: "gray",
            width: "300px",
            height: "300px"
          }}>
          </div></div>
        </Grid>
        {/* specials */}
        <div>

          <Grid>
            <h2 style={{ "textAlign": "left" }}>Specials</h2>
            <div style={{ "textAlign": "right" }}><button>Online Menu</button></div>
          </Grid>
        </div>
        <Grid>
          {[{
            pic: "",
            title: "Greek Salad",
            price: "$12.99",
            desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
          }, {
            pic: "",
            title: "Bruschetta",
            price: "$5.99",
            desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
          }, {
            pic: "",
            title: "Lemon Dessert",
            price: "$5.00",
            desc: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
          }].map((e, i) => {
            return (
              <div key={i} className="card">
                <div style={{
                  backgroundColor: "lightgray",
                  width: "200px",
                  height: "150px"
                }}>
                </div>
                <div className="card-content">
                  <div className="card-title">
                    <h4>{e.title}</h4>
                    <span>{e.price}</span>
                  </div>
                  <p>{e.desc}</p>
                  <div>
                    <a href="#order">Order a delivery</a>
                  </div>
                </div>
              </div>
            )
          })}
        </Grid>
        {/* testimonials */}
        <div style={{ textAlign: "center" }}>
          <h3>

            Testimonials
          </h3>

        </div>
        <Grid>
          {[{
            name: "John Doe",
            pic: "",
            testimony: "This is the best restaurant in the world! The food is amazing and the service is excellent."
          }, {
            name: "Jane Smith",
            pic: "",
            testimony: "I had a wonderful experience at this restaurant. The atmosphere was cozy and the staff were very friendly."
          }, {
            name: "John Doe",
            pic: "",
            testimony: "This is the best restaurant in the world! The food is amazing and the service is excellent."
          }, {
            name: "Jane Smith",
            pic: "",
            testimony: "I had a wonderful experience at this restaurant. The atmosphere was cozy and the staff were very friendly."
          }].map((e, i) => {
            return (
              <div key={i} className="card-testimony">
                <h4>Rating</h4>
                <div style={{
                  backgroundColor: "lightgray",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%"
                }}>
                </div>
                <div className="card-testimony-content">
                  <h4>{e.name}</h4>
                  <p>"{e.testimony}"</p>
                </div>
              </div>
            )
          })}
        </Grid>
        {/* description */}

        <Grid>
          <div style={{ "text-align": "left" }}>
            <article>
              <h1>Little Lemon</h1>
              <h3>Chicago</h3>
              <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </article>
          </div>
          <div><div style={{
            backgroundColor: "gray",
            width: "300px",
            height: "300px"
          }}>
          </div></div>
        </Grid>



      </main>



      <Footer></Footer>
    </div>
  );
}

export default App;
