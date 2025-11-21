import { Link } from "react-router-dom";
import "./buttonLink.css";


const ButtonLink = (props) => {
    const {name, href} = props;

  return (
    <>
        <div className="thebtn">

      <Link to={href} className="buttonLink" >{name}</Link>
        </div>
    </>
  );
};

export default ButtonLink;
