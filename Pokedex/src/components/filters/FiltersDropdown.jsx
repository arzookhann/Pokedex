import { useEffect, useState } from "react";

import Button from "../button/Button";
import Overlay from "../overlay/Overlay";

import { capitalize } from "../../utils/functions";

import "./filters-styles.scss";

const FiltersDropdown = (props) => {
  const { heading = "Filter", options = [] } = props;
  const [isActive, setIsActive] = useState(false);
  const rangeFilterHeadings = ["Attack", "Experience"];

  const removeActiveClass = () => setIsActive(false);
  const toggleActiveClass = () => setIsActive(!isActive);

  useEffect(() => {
    isActive && (document.body.style.overflow = "hidden");
    !isActive && (document.body.style.overflow = "unset");
  }, [isActive]);

  return (
    <>
      <div className={`dropdown-filter-box ${isActive ? "active" : ""}`}>
        <label onClick={removeActiveClass} id="close-icon">
          <i className="fa fa-close fa-2x" />
        </label>

        <div className="type-filter-container">
          <h2 className="filter-box-heading">Type</h2>
          <div className="checkbox-item-container">
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
                  <label htmlFor={option} className="checkbox-option-label">
                    {capitalize(option)}
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        {rangeFilterHeadings.map((heading) => (
          <div key={heading} className="dropdown-range-filter-container">
            <h2 className="filter-box-heading">{heading}</h2>
            <div className="range-input-container">
              <div className="drop-down-input-filter-container">
                <input
                  className="filter-range-input"
                  type="number"
                  placeholder="From"
                />
                <span className="filter-bar" />
                <input
                  className="filter-range-input"
                  type="number"
                  placeholder="To"
                />
              </div>
              <Button
                className="btn-style dropdown-btn"
                onClick={removeActiveClass}
              >
                Apply
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div onClick={toggleActiveClass} className="selected">
        {capitalize(heading)}
      </div>

      <Overlay
        onClick={removeActiveClass}
        className={isActive ? "active" : ""}
      />
    </>
  );
};

export default FiltersDropdown;
