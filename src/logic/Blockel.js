import React, { useState } from "react";

function Blockel({blockarrel}) {


  return (
    <li className="Bmiblock">
      {" "}
      <div>
        <h5> {blockarrel.name}</h5>
        <h5> {blockarrel.male}</h5>
        <h5>{blockarrel.growth}</h5>
        <h5> {blockarrel.weight}</h5>
        <h5> {blockarrel.bmi}</h5>
      </div>

      
    </li>
  );
}

export default Blockel;
