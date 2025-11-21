import Grid from "./gridComp";
import "./overview.css";


const Overview = () => {

  return (
    <>
      <Grid>
        <div style={{ "textAlign": "left" }}>
          <article>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          </article>
        </div>
        <div>
          <div style={{
            backgroundColor: "gray",
            width: "300px",
            height: "300px"
          }}>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Overview;
