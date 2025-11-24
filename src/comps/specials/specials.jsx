import ButtonLink from "../buttonLink";
import Grid from "../gridComp";
import bruch from "./bruchetta.svg";
import Card from "./card";
import greek from "./greek salad.jpg";
import lemo from "./lemon dessert.jpg";
import "./specials.css";


const Specials = () => {

    return (
        <>
        <div>

            <Grid>
                <h2 style={{ "textAlign": "left" }}>Specials</h2>
                <div style={{ "textAlign": "right" }}>
                  <ButtonLink name="Online Menu" href="/menu" />

                  </div>
            </Grid>
        </div>

        <Grid>
          {[{
            pic: greek,
            title: "Greek Salad",
            price: "$12.99",
            desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
          }, {
            pic: bruch,
            title: "Bruschetta",
            price: "$5.99",
            desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
          }, {
            pic: lemo,
            title: "Lemon Dessert",
            price: "$5.00",
            desc: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
          }].map((e, i) => {
            return (
              <Card key={i} title={e.title} price={e.price} desc={e.desc} pic={e.pic} />
            )
          })}
        </Grid>
        </>
    );
};

export default Specials;
