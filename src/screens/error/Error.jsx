import { useNavigate } from "react-router-dom";

import Button from "../../components/button/Button";

import "./error-styles.scss";

import teamRocketImg from "../../assets/images/team-rocket-trio.svg";

const Error = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="container-error">
      <img className="team-rocket-img" src={teamRocketImg} alt="Team Rocket" />
      <div className="error-text-container">
        <span className="text text-white">The rocket team</span>
        <span className="text text-black">has won this time.</span>
      </div>
      <Button btnLabel="Return" onClick={handleClick} className="return-btn" />
    </div>
  );
};

export default Error;
