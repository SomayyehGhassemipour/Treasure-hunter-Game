import "./Button.css";
import { getChoosedPosition } from '../../redux/features/positionState/choosedPositionsSlice'
import { useSelector } from "react-redux"

const Button = ({ value, id, onClick }) => {

  const choosedPositions = useSelector(getChoosedPosition)

  let className = value ? value === "T" ? "btn cel-T" : value === "3" ? "btn cel-3" : value === "2" ? "btn cel-2" : "btn cel-1" : choosedPositions.includes(id) ? "btn chose" : "btn"

  return (
    <button
      className={className}
      id={id}
      onClick={onClick}
      disabled={!value ? false : true}>
      {value}
    </button>
  );
};

export default Button;