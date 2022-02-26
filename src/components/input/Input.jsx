import { useState } from "react";

import "./input-styles.scss";

const Input = (props) => {
  const { placeholder, onClick } = props;
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    onClick && onClick(event);
  };

  return (
    <input
      value={value}
      onChange={handleChange}
      className="input"
      placeholder={placeholder}
      type="search"
    />
  );
};

export default Input;
