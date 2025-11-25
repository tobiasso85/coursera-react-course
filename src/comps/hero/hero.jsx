import ButtonLink from "../buttonLink";
import Grid from "../gridComp";
import "./hero.css";

import heroImg from "./restaurant.jpg";


const Hero = () => {

    return (
        <div className="theehero">

        <Grid>
            <div>
                <article>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <div className="btnaround">
                        <ButtonLink name="Reserve a Table" href="/reservations" />

                    </div>
                </article>
            </div>
            <div className="heroImg">
                <img src={heroImg} alt="restaurant"/>
                
            </div>
        </Grid>
        </div>
    );
};

export default Hero;
