import React, { useState } from "react";
import Bmiblock from "./Bmiblock";

function Bmiform() {
  const [growth, setValue] = useState(" ");
  const [weight, setweight] = useState(" ");
  const [valuename, setName] = useState(" ");
  const [valuemale, setMale] = useState("Мужской");

  const [blockarr, setBlock] = useState([{ empty: 1 }]);

  function submitHandler(event) {
    event.preventDefault();
    if (valuename) {
      for (var i = 0; i < valuename.length; i++) {
        var chr = valuename.charCodeAt(i);
        if (((chr > 90 || chr < 65) && (chr > 122 || chr < 97) && (chr > 1103 || chr < 1040)) && (chr !== 32)) {
          alert("ФИО введено некорректно");
          return 0;
        }
      }
    }

    if (growth.trim() <= 280 && growth.trim() > 0) {
    } else {
      alert("Рост ошибочен");
      return 0;
    }

    if (weight.trim() <= 500 && weight.trim() > 0) {
    } else {
      alert("Вес ошибочен");
      return 0;
    }

    let bmi = (weight / Math.pow(growth * 0.01, 2)).toFixed(2);

    setBlock(
      blockarr.concat([
        {
          id: Date.now(),
          name: "ФИО:" + valuename,
          male: "пол: " + valuemale,
          growth: "рост: " + growth,
          weight: "вес: " + weight,
          bmi: "bmi: " + bmi,
        },
      ])
    );
  }

  return (
    <div className="maipageflex">
      <div className="flexfix">
      <div className="bmiform">
        <form className="mainformpos"onSubmit={submitHandler}>
          <h4>ФИО</h4>
          <input
            className="inputform"
            value={valuename}
            onChange={(event) => setName(event.target.value)}
          />
          <select onChange={(event) => setMale(event.target.value)}>
            <option value="Мужской">Мужской</option>
            <option value="Женский">Женский</option>
            <option value="Боевой вертолет">Боевой вертолет</option>
          </select>
          <h4>Рост</h4>
          <input
            className="inputform"
            value={growth}
            onChange={(event) => setValue(event.target.value)}
          />
          <h4>Вес</h4>
          <input
            className="inputform"
            value={weight}
            onChange={(event) => setweight(event.target.value)}
          />
          <button type="submit">gg</button>
        </form>
      </div>
      </div>
      <div>
        <Bmiblock blockarr={blockarr} />
      </div>
    </div>
  );
}

export default Bmiform;
