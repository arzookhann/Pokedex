import './footer-styles.scss';

const Footer = (props) => {
  const { className } = props;
  return (
    <footer className={`footer ${className}`}>
      <p className='footer-text-left'>Make with ❤️ for the PokéSpartans team Platzi Master</p>
      <p className='footer-text-right'>Ours Team</p>
    </footer>
  )
}

export default Footer;
