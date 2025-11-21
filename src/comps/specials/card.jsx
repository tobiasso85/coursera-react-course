import "./specials.css";


const Card = (props) => {
    const {title, price, desc, ...rest} = props;

    return (
        <>
              <div  className="card" {...rest}>
                <div style={{
                  backgroundColor: "lightgray",
                  width: "200px",
                  height: "150px"
                }}>
                </div>
                <div className="card-content">
                  <div className="card-title">
                    <h4>{title}</h4>
                    <span>{price}</span>
                  </div>
                  <p>{desc}</p>
                  <div>
                    <a href="#order">Order a delivery</a>
                  </div>
                </div>
              </div>
        </>
    );
};

export default Card;
