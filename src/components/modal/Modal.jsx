import {
  AbilityPoints,
  IdLabel,
  ProgressBar,
  TypeLabel,
} from "../card-sub-components/CardSubComponents";

import { capitalize } from "../../utils/functions";

import "./modal-styles.scss";
import colors from "../../theme/color.scss";

const ModalCard = (props) => {
  const {
    id = "",
    title = "",
    labels = [],
    abilities = {},
    image,
    onClick = () => {},
    progressStats = {},
    abilityDescription = [],
  } = props;

  const abilityKeys = Object.keys(abilities);
  const progressStatsKeys = Object.keys(progressStats);
  const progressBarColors = [colors.pastelGreen, colors.corn];

  const renderLabel = (label) => <TypeLabel key={label} label={label} />;

  const renderProgressStat = (stat, i) => (
    <ProgressBar
      key={stat}
      title={stat}
      value={progressStats[stat]}
      color={progressBarColors[i]}
    />
  );

  const renderAbility = (ability) => (
    <AbilityPoints
      key={ability}
      className="score"
      ability={ability}
      points={abilities[ability]}
    />
  );

  return (
    <div onClick={onClick} className="modal--card-container">
      <h3 className="modal--card-heading-2">{capitalize(title)}</h3>
      <div className="modal--card-img-container">
        <img className="modal--card-img" src={image} alt="pokemon" />
        <div className="modal--type-label-container">
          {labels.map(renderLabel)}
        </div>
      </div>

      <div className="modal--card-content">
        <div className="modal--head-container">
          <h3 className="modal--card-heading">{capitalize(title)}</h3>
          <p className="generation">Generation 1</p>
          <div className="pokemon-id">
            <IdLabel id={id} />
          </div>
        </div>

        <div className="ability-description">
          <p className="ability-description-text ability-description-heading">
            Ability
          </p>
          <p className="ability-description-text ability-description-content">
            {abilityDescription}
          </p>
        </div>

        <div className="health-progress-bars-container">
          {progressStatsKeys.map(renderProgressStat)}
        </div>

        <div className="modal--ability-points-container">
          {abilityKeys.map(renderAbility)}
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
