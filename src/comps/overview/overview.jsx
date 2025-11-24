import Grid from "../gridComp";
import "./overview.css";
import theimg from "./restauranfood.jpg";


const Overview = () => {

  return (
    <>
    <div className="overvieww">

      <Grid>
        <div style={{ "textAlign": "left" }}>
          <article>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          </article>
        </div>
        <div>
          <img src={theimg} alt="restaurant food" height="300px" />
        </div>
      </Grid>
    </div>
    </>
  );
};

export default Overview;
