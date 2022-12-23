import React, { useState } from "react";
import "./Slider.css";

const Slider = () => {

  const colors = () => {
    const red = document.getElementById("red").value;
    const green = document.getElementById("green").value;
    const blue = document.getElementById("blue").value;
    const alpha = document.getElementById("alpha").value;

    document.body.style.backgroundColor =
      "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
  };

  return (
    <div className="container">
      <div className="wapper">
        R
        <input
          className="input-range"
          type="range"
          min="0"
          max="255"
          id="red"
          onInput={colors}
        />
      </div>
      <div className="wapper">
        B
        <input
          className="input-range"
          type="range"
          min="0"
          max="255"
          id="blue"
          onInput={colors}
        />
      </div>
      <div className="wapper">
        G
        <input
          className="input-range"
          type="range"
          min="0"
          max="255"
          id="green"
          onInput={colors}
        />
      </div>
      <div className="wapper">
        A
        <input
          className="input-range"
          type="range"
          min="0.00"
          max="1.00"
          id="alpha"
          onInput={colors}
        />
      </div>
    </div>
  );
};

export default Slider;
