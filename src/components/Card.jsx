function Card({ nombre, color }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        margin: "20px",
        gap: "5px",
      }}
    >
      <h2>Elegiste tu color favorito!</h2>
      <p>Nombre: {nombre}</p>
      <p>Color favorito: {color}</p>
    </div>
  );
}

export default Card;
