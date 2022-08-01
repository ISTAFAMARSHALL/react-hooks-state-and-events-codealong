import React, { useState } from "react";

function Toggle() {

  let [ isOn, setISOn ] = useState(false);

  function handleClick() {
    setISOn((isOn)=> !isOn);
  }

  return <button style={ isOn ? {background: "red"} : {background: "white"}} onClick={handleClick}>{ isOn ? "ON" : "OFF" }</button>;

}

export default Toggle;
