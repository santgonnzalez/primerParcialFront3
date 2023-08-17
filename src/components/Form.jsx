import { useState } from "react";
import Card from "./Card";

function Form() {
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
    setErrorMessage("");
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
    setErrorMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      nombre.trim().length < 3 ||
      nombre.trim().startsWith(" ") ||
      color.length < 6
    ) {
      setErrorMessage("Por favor chequea que la información sea correcta");
    } else {
      setShowCard(true);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={handleNombreChange} />
        </label>
        <br />
        <label>
          Color:
          <input type="text" value={color} onChange={handleColorChange} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {showCard && <Card nombre={nombre} color={color} />}
    </div>
  );
}

export default Form;
