import { useNavigate } from "react-router-dom";

import Button from "../../components/button/Button";

import "./error-styles.scss";

import teamRocketImg from "../../assets/team-rocket-trio.svg";

const Error = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="container-error">
      <div className="background-text-container">
        <span className="background-error-text">404</span>
        <img className="team-rocket" src={teamRocketImg} alt="team-rocket" />
      </div>
      <div className="error-text">
        <span className="text text-white">The rocket team</span>
        <span className="text text-black">has won this time.</span>
      </div>
      <Button onClick={handleClick} className="return-btn">
        Return
      </Button>
    </div>
  );
};

export default Error;
