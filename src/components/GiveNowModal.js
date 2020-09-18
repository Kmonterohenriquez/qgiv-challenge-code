import React, { useState } from "react";

const GiveNowModal = ({ donateHandler, getAmount }) => {
  const [amount, setAmount] = useState(0);
  const handleSubmit = (e) => {
    let newAmount= parseInt(amount)
    getAmount(newAmount)
    donateHandler();
  };
  return (
    <form className="GiveNowModal" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Enter amount to donate."
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit " className="primary-btn">
        Submit
      </button>
    </form>
  );
};

export default GiveNowModal;
