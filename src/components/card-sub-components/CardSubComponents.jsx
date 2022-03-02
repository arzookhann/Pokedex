import CustomizedProgressBars from '../customized-progress-bar/CustomizedProgressBar';

import { capitalize } from '../../utils/functions';

import './cardSubComponents-styles.scss';

export const AbilityPoints = (props) => {

  const { ability, points, className } = props;

  return (
    <div className={`ability-points ${className}`}>
      <div className="points-container">
        <span className="points-text">{points}</span>
      </div>
      <span className="ability">{capitalize(ability)}</span>
    </div>
  );
}

export const TypeLabel = (props) => {
  const { label } = props;
  return (
    <span className={`type-label ${label.toLowerCase()}`}>{capitalize(label)}</span>
  );
}

export const ProgressBar = (props) => {
  const { title = "", value = 0, color = "" } = props;
  const progressBarHeight = 4;
  const percentValue = Math.trunc(value / 1.7);
  return (
    <div className="progress-bar-container">
      <p className="progress-bar-title">
        {capitalize(title)} {value}
      </p>
      <CustomizedProgressBars
        height={progressBarHeight}
        colorValue={color}
        value={percentValue}
      />
    </div>
  );
};

export const IdLabel = (props) => {
  const { id } = props;
  return <div className='id-label'>{id}</div>
}
