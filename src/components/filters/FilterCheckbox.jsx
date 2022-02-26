import { useState } from "react";

import { capitalize } from "../../utils/functions";

import "./filters-styles.scss";

const FilterCheckbox = (props) => {

  const { heading = "Filter", options = [] } = props;
  const [isActive, setIsActive] = useState(false);

  const removeActiveClass = () => setIsActive(false);
  const toggleActiveClass = () => setIsActive(!isActive);

  return (
    <div className="select-box">
      <div className={`options-container ${isActive && "active"}`}>
        {options.map((option) => {
          option = option.toLowerCase();
          return (
            <div
              key={option}
              onClick={removeActiveClass}
              className="option"
            >
              <input
                type="checkbox"
                className="checkbox"
                id={option}
                name={option}
              />
              <label className="checkbox-option-label" htmlFor={option}>{capitalize(option)}</label>
            </div>
          );
        })}
      </div>
      <div onClick={toggleActiveClass} className="selected">
        {capitalize(heading)}
      </div>
    </div>
  );
};

export default FilterCheckbox;
