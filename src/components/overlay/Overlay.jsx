import './overlay-styles.scss';

const Overlay = (props) => {
  const { onClick, className } = props;
  return (
    <div
      onClick={onClick}
      className={`overlay ${className}`}
    />
  );
}

export default Overlay;
