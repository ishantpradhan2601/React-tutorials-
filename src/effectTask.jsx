import React, { useState, useEffect } from "react";

const EffectTask = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log(show ? "Password is visible" : "Password is hidden");

    return () => {
      console.log("Component Unmounted ");
    };
  }, [show]);

  return (
    <div>
      <input
        type={show ? "text" : "password"}
        placeholder="Enter your password"
      />

      <button onClick={() => setShow(!show)}>
        {show ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
};

export default EffectTask;
