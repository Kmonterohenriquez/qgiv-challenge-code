import React, { useState, useEffect } from "react";
import '../Style/DisplayWidget.sass'
import GiveNowModal from "./GiveNowModal";

const DisplayWidget = ({ name, goal, logo, amount, getAmount, success, successHandler }) => {
  const [donate, setDonate] = useState(true);
  const [completion, setCompletion] = useState("");

  const donateHandler = () => {
    setDonate(!donate);
    completionHandler();
  };

  const completionHandler = () => {
    // Calculate percentage to change Process bar CSS Styling
    let newPercent = ((amount * 100) / goal).toFixed(0) + "%";
    newPercent.toString();
    setCompletion(newPercent);
  };

  useEffect(() => {
    completionHandler();
    successHandler()
  }, [donate]);
  return (
    <div className="DisplayWidget">
      <img className="logo" src={logo} alt={name} />
      <div className="DisplayWidget-info">
        <h1 className="company-name">{name}</h1>
        <p className="company-goal">${amount}</p>
        {success ? <h4 className='success-msg'>Thanks for helping us!<br />
        we reached our goal of ${goal}
        </h4> :
        donate ? (
          <>
            <div className="progress-bar">
              <div className="top-part">
                <p className="percents">0%</p>
                <p>RAISED</p>
                <p className="percents">100%</p>
              </div>
              <div className="bar">
                <div className="completion" style={{ width: completion }}></div>
              </div>
            </div>
            <button
              type="submit"
              className="primary-btn"
              onClick={() => donateHandler()}
            >
              Give Now!
            </button>
          </>
        ) : (
          <GiveNowModal donateHandler={donateHandler} getAmount={getAmount} />
        )}
      </div>
    </div>
  );
};

export default DisplayWidget;
