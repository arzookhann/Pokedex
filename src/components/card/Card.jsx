import {
  AbilityPoints,
  TypeLabel,
} from "../card-sub-components/CardSubComponents";

import { capitalize } from "../../utils/functions";

import "./card-styles.scss";

const Card = (props) => {
  const {
    title = "",
    labels = [],
    abilities = {},
    image,
    onClick = () => {},
  } = props;
  const abilityKeys = Object.keys(abilities);

  return (
    <div onClick={onClick} className="card-container">
      <div className="card-content">
        <h3 className="card-heading">{capitalize(title)}</h3>
        <div className="ability-points-container">
          {abilityKeys.map((ability) => (
            <AbilityPoints
              key={ability}
              className="points"
              ability={ability}
              points={abilities[ability]}
            />
          ))}
        </div>
        <div className="type-label-container">
          {labels.map((label) => (
            <TypeLabel key={label} label={label} />
          ))}
        </div>
      </div>
      <img className="card-img" src={image} alt='pokemon' />
    </div>
  );
};

export default Card;
