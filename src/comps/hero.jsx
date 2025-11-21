import ButtonLink from "./buttonLink";
import Grid from "./gridComp";
import "./hero.css";


const Hero = () => {

    return (
        <Grid>
            <div>
                <article>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <div>
                        <ButtonLink name="Reserve a Table" href="/reservations" />

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
    );
};

export default Hero;
