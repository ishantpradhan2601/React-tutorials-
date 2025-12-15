import React, { useState, useEffect } from 'react';

const UseEffectExample = () => {
  const [like, setLike] = useState(0);
  const [value, setValue] = useState("React");

  useEffect(() => {
    console.log("Component updated, like =", like);

    return () => {
      console.log("Cleanup before next update, previous like =", like);
    };
  }, [like]);

  const changeLike = () => {
    setLike(prev => prev + 1);
  };

  const changeValue = () => {
    setValue("Java");
  };

  return (
    <div>
      <h2>Likes: {like}</h2>
      <h2>Value: {value}</h2>
      <button onClick={changeLike}>Like</button>
      <button onClick={changeValue}>Value</button>
    </div>
  );
};

export default UseEffectExample;
