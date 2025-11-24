import "./specials.css";


const Card = (props) => {
  const { title, price, desc, pic, ...rest } = props;

  return (
    <>
      <div className="card" {...rest}>
        <img src={pic} alt={title} className="card-pic" width="100%" />

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
