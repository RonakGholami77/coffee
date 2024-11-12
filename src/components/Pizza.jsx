const Pizza = (props) => {
  const {
    name = "",
    src = "",
    ingredients = "",
    photoName = "",
    soldOut = false,
  } = props;

  return (
    <li className={soldOut ? "pizza sold-out" : "pizza"}>
      <img src={src} alt={photoName} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
      </div>
    </li>
  );
};

export { Pizza };
