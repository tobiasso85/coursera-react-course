import "./gridComp.css"; // optional if you use the CSS below


const Grid = (props) => {

  const { children, ...rest } = props;

  const style = {
    gridCols: children.length,
    gridTemplateColumns: Array(children.length).fill("auto").join(" ")
  }
  return (
    <div className="thegrid" style={style} {...rest}>
        {children}
    </div>
  );
};

export default Grid;
