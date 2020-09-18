import React from "react";
import "../Style/AddWidget.sass";

const AddWidget = ({ addWidget }) => {
  return (
    <div className="AddWidget" onClick={() => addWidget()}>
      <i className="fas fa-plus"></i>
    </div>
  );
};

export default AddWidget;
