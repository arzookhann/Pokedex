import { GoogleAuthBtn } from '../../components/google-auth-btn/GoogleAuthBtn';
import Footer from '../../components/footer/Footer';

import './home-styles.scss';

import banner from '../../assets/images/banner.svg';

const Home = () => {

  return (
    <div className="home">
      <div className="banner-container">
        <div className="banner-content">
          <h1 className="banner-heading">
            <span className="text-bold">Find</span> all your favorite <span className="text-bold">Pokémon</span>
          </h1>
          <h2 className="banner-description">
            You can know the type of Pokémon, its strengths, disadvantages and abilities
          </h2>
          <div className="btn">
            <GoogleAuthBtn />
          </div>
        </div>
        <div className="banner-img-container">
          <img className="banner-img" src={banner} alt="Banner" />
        </div>
      </div>
      <Footer className='footer-position' />
    </div>
  );
}

export default Home;
