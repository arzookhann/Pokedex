import "./button-styles.scss";

const Button = (props) => {

  const { btnLabel = "", onClick = () => {}, className = "" } = props;

  return (
    <button
      onClick={onClick}
      className={`util-button ${className}`}
      role="button"
    >
      {btnLabel}
    </button>
  );
};

export default Button;
