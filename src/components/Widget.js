import React, { useState } from "react";
import "../Style/Widget.sass";

// IMPORT COMPONENTS
import WidgetForm from "./WidgetForm";
import DisplayWidget from "./DisplayWidget";

const Widget = ({ updateData, id }) => {
  const [toggle, setToggle] = useState(true);
  const [success, setSuccess] = useState(false);
  const [logo, setLogo] = useState("");
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [amount, setAmount] = useState(0);

  const successHandler = () => {
    if (amount >= goal) {
      setSuccess(!success);
    }
  };

  // TOGGLES
  const toggleHandler = () => setToggle(!toggle);

  // Adding old amount with new amount donated
  const getAmount = (amountDonated) => setAmount(amount + amountDonated);

  // Get Company info from WidgetForm component and store to pass it down into DisplaWidget component 
  const companyInfo = (name, goal, logo) => {
    let newGoal = parseInt(goal).toFixed(2);
    setName(name);
    setGoal(newGoal);
    setLogo(logo);
    // Send new data up to App component
    updateData(logo, name, goal, amount, id);
  };

  return (
    <div className="Widget">
      <div className="Widget-container">
        {toggle ? (
          <WidgetForm companyInfo={companyInfo} toggleHandler={toggleHandler} />
        ) : (
          <div>
            <DisplayWidget
              name={name}
              goal={goal}
              logo={logo}
              amount={amount}
              getAmount={getAmount}
              successHandler={successHandler}
              success={success}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Widget;
