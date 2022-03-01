import { useAuth } from "../../contexts/UserAuthContext";

import { GoogleAuthBtn } from "../../components/google-auth-btn/GoogleAuthBtn";
import Footer from "../../components/footer/Footer";

import "./user-styles.scss";

export const User = () => {

  const { user } = useAuth();

  return (
    <div className="user">
      <div className="user-info-container">
        <img className="user-img" src={user.profilePic} alt="User Profile" />
        <h1 className='user-info'>{user.name}</h1>
        <h1 className='user-info'>{user.email}</h1>
        <GoogleAuthBtn />
      </div>
      <Footer className="footer-position" />
    </div>
  );
};
