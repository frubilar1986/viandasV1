import React, { useState, useEffect } from "react";

function LiveCycle({ name }) {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  useEffect(() => {
    console.log("clg arry()");
  }, []);
  useEffect(() => {
    console.log("clg sin dependecias");
  });
  useEffect(() => {
    console.log("contador1" + name);
  }, [count]);
  useEffect(() => {
    console.log("contador2");
  }, [count1]);
  useEffect(() => {
    console.log("contador 1 y contador2");
  }, [count1,count]);

  return (
    <div>
      <h2>LiveCicle {name}</h2>
      <div>Contador 1: {count}</div>
      <div>Contador 2: {count1}</div>
      <hr />
      <button onClick={() => setCount(count + 1)} type="button">
        Click 1
      </button>{" "}
      <br />
      <button onClick={() => setCount1(count1 + 1)} type="button">
        Click 2
      </button>
    </div>
  );
}

export default LiveCycle;
