import PropTypes from "prop-types";
import "./styles.css";

export function Flower(props) {
  return (
    props.char && (
      <>
        <div className="sunflower">
          <div className="head">
            <div id="eye-1" className="eye"></div>
            <div id="eye-2" className="eye"></div>
            <div className="mouth"></div>
          </div>
          <div className="petals"></div>
          <div className="trunk">
            <div className="left-branch"></div>
            <div className="right-branch"></div>
          </div>
          <div className="vase">{props.char}</div>
        </div>
      </>
    )
  );
}
Flower.propTypes = {
  char: PropTypes.string.isRequired, // Esto valida que "char" sea una cadena de texto requerida
};
