const Pizza = (props) => {
  const { name = "", src, ingredients = "", photoName = "" } = props;

  return (
    <li className="pizza">
      <img src={src} alt={photoName} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
      </div>
    </li>
  );
};

export { Pizza };
