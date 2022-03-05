import './footer-styles.scss';

const Footer = (props) => {
  const { className } = props;
  return (
    <footer className={`footer ${className}`}>
      <p className="footer-text-left">
        Pokémon ❤️ lorem ipsum dolor sit amet consectetur.
      </p>
      <p className="footer-text-right">Arzoo Khan</p>
    </footer>
  );
}

export default Footer;
