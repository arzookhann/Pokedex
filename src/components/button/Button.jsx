import "./button-styles.scss";

const Button = (props) => {
  
  const { children, onClick, className } = props;

  return (
    <button
      onClick={onClick}
      className={`util-button ${className}`}
      role="button"
    >
      {children}
    </button>
  );
};

export default Button;
