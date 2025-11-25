import Grid from "./gridComp";
import "./testimonials.css";


const Testimonials = () => {

    return (
        <>
        <div style={{ textAlign: "center" }}>
          <h3>

            Testimonials
          </h3>

        </div>
        <Grid>
          {[{
            stars: 5,
            name: "Hanna Doe",
            pic: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3763188.jpg&fm=jpg",
            testimony: "This is the best restaurant in the world! The food is amazing and the service is excellent."
          }, {
            stars: 5,
            name: "Richard Smith",
            pic: "https://www.irreverentgent.com/wp-content/uploads/2018/03/Awesome-Profile-Pictures-for-Guys-look-away2.jpg",
            testimony: "I had a wonderful experience at this restaurant. The atmosphere was cozy and the staff were very friendly."
          }, {
            stars: 5,
            name: "Samantha Dilbert",
            pic: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            testimony: "This is the best restaurant in the world! The food is amazing and the service is excellent."
          }, {
            stars: 4,
            name: "Jo Me",
            pic: "https://images.pexels.com/photos/30695718/pexels-photo-30695718.jpeg?cs=srgb&dl=pexels-lua-jpg-2149316381-30695718.jpg&fm=jpg",
            testimony: "I had a wonderful experience at this restaurant. The atmosphere was cozy and the staff were very friendly."
          }].map((e, i) => {
            return (
              <div key={i} className="card-testimony">
                <h4>{"⭐".repeat(e.stars)}</h4>
                <img src={e.pic} alt={e.name} className="card-testimony-pic" style={{
                  backgroundColor: "lightgray",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%"
                }}>
                </img>
                <div className="card-testimony-content">
                  <h4>{e.name}</h4>
                  <p>"{e.testimony}"</p>
                </div>
              </div>
            )
          })}
        </Grid>
        </>
    );
};

export default Testimonials;
