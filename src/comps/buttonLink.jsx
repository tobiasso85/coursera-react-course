import { Link } from "react-router-dom";
import "./buttonLink.css";


const ButtonLink = (props) => {
    const { name, href } = props;

    return (
        <>

            <Link to={href} className="buttonLink thebtn" >{name}</Link>
        </>
    );
};

export default ButtonLink;
