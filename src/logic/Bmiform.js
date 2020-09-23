import React, { useState } from "react";
import Bmiblock from "./Bmiblock";

function Bmiform() {
  const [growth, setValue] = useState("");
  const [weight, setweight] = useState("");
  const [valuename, setName] = useState("");
  const [valuesurname, setSurname] = useState("");
  const [valuemale, setMale] = useState("Мужской");

  const [blockarr, setBlock] = useState([{ empty: 1 }]);

  function submitHandler(event) {
    event.preventDefault();

    checkName(valuename);
    checkName(valuesurname);
    function checkName(name) {
      for (var i = 0; i < name.length; i++) {
        var chr = name.charCodeAt(i);
        if (
          (chr > 90 || chr < 65) &&
          (chr > 122 || chr < 97) &&
          (chr > 1103 || chr < 1040) &&
          chr !== 32
        ) {
          alert("ФИО введено некорректно");
          return 0;
        }
      }
    }

    if (growth.trim() <= 280 && growth.trim() > 0) {
      /* empty */
    } else {
      alert("Рост ошибочен");
      return 0;
    }

    if (weight.trim() <= 500 && weight.trim() > 0) {
      /* empty */
    } else {
      alert("Вес ошибочен");
      return 0;
    }

    let bmi = (weight / Math.pow(growth * 0.01, 2)).toFixed(2);

    console.log(valuename.toLowerCase())
    let sortid = valuename.toLowerCase() + valuesurname.toLowerCase();

    console.log(sortid)
    console.log(sortid.charCodeAt(0))

    setBlock(
      blockarr.concat([
        {
          id: Date.now(),
          sortid: sortid,
          name: "ФИО: " + valuename + " " + valuesurname,
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
          <form className="mainformpos" onSubmit={submitHandler}>
            <h4>ФИО</h4>
            <input
              placeholder="Имя"
              className="inputnameform"
              value={valuename}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              placeholder="Фамилия"
              className="inputsurnameform"
              value={valuesurname}
              onChange={(event) => setSurname(event.target.value)}
            />
            <select onChange={(event) => setMale(event.target.value)}>
              <option value="Мужской">Мужской</option>
              <option value="Женский">Женский</option>
              <option value="Боевой вертолет">Боевой вертолет</option>
            </select>
            <h4>Рост</h4>
            <input
              placeholder="см"
              className="inputform"
              value={growth}
              onChange={(event) => setValue(event.target.value)}
            />
            <h4>Вес</h4>
            <input
              className="inputform"
              placeholder="кг"
              value={weight}
              onChange={(event) => setweight(event.target.value)}
            />
            <button type="submit">gg</button>
          </form>
        </div>
      </div>
      <div>
        <Bmiblock
          blockarr={blockarr.sort(function (a, b) {
            if (a.sortid > b.sortid) {
              return 1;
            }
            if (a.sortid < b.sortid) {
              return -1;
            }
            return 0; 
          })}
        />
      </div>
    </div>
  );
}

export default Bmiform;
