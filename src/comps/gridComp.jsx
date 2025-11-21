import "./gridComp.css"; // optional if you use the CSS below


const Grid = (props) => {

  const { children, ...rest } = props;


  return (
    <div className={`thegrid thegrid-${children.length}`} {...rest}>
        {children}
    </div>
  );
};

export default Grid;
