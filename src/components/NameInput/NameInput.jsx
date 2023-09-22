import PropTypes from "prop-types";
import { useState } from "react";

export function NameInput(props) {
  const [localName, setLocalName] = useState("");

  const handleChange = (e) => {
    setLocalName(e.target.value);
  };
  const setGlobalName = () => {
    props.setName(localName.toUpperCase().split(""));
    props.setShowInput(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <input
        placeholder="Ingresa tu nombre"
        type="text"
        value={props.name}
        onChange={handleChange}
        style={{ width: "80%", height: "32px", touchAction: "manipulation" }}
      />
      <button
        style={{ background: "#008CBA", width: "52%" }}
        onClick={setGlobalName}
      >
        Aceptar
      </button>
    </div>
  );
}

NameInput.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.any,
  setShowInput: PropTypes.any,
};
