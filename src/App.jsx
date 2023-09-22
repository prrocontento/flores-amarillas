import { useState } from "react";
import { Flower } from "./components/Flower";
import { NameInput } from "./components/NameInput";
import "./App.css";

function App() {
  const [showInput, setShowInput] = useState(true);
  const [name, setName] = useState([]);

  return (
    <>
      {showInput && <NameInput setName={setName} setShowInput={setShowInput} />}

      {!showInput && name.length > 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>🌼 Aqui están tus flores amarillas 🌼</span>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              marginRight: window.innerWidth > 768 ? "0" : "44px",
            }}
          >
            {name.map((char, index) => (
              <Flower char={char} key={index} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
