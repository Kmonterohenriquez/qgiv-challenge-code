import React, { useState } from "react";
import '../Style/WidgetForm.sass'

const WidgetForm = ({ companyInfo, toggleHandler }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [logo, setLogo] = useState(
    "https://icon-library.com/images/photo-placeholder-icon/photo-placeholder-icon-7.jpg"
  );
  const submitHandler = (e) => {
    e.preventDefault();
    companyInfo(name, goal, logo);
    toggleHandler();
  };
  return (
    <div className="WidgetForm">
      <img src={logo} alt="" />
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          placeholder="Company's logo"
          onChange={(e) => setLogo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter company's name."
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter goal."
          onChange={(e) => setGoal(e.target.value)}
        />

        <button type="submit" className="primary-btn">
          Submit!
        </button>
      </form>
    </div>
  );
};

export default WidgetForm;
