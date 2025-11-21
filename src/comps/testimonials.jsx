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
        </>
    );
};

export default Testimonials;
