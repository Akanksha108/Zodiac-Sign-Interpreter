import React, { useState } from "react";
import "./styles.css";

const zodiacList = {
  "♈": "Aries",
  "♉": "Taurus",
  "♊": "Gemini",
  "♋": "Cancer",
  "♌": "Leo",
  "♎": "Libra",
  "♏": "Scorpio",
  "♐": "Saggitarius",
  "♑": "Capricorn",
  "♒": "Aquarius",
  "♓": "Pisces"
};

const zodiacSigns = Object.keys(zodiacList);
//console.log(zodiacSigns);

export default function App() {
  const [zodiac, setZodiac] = useState("");

  let inputChangeHandler = (event) => {
    let userInput = event.target.value;
    let zodiac = zodiacList[userInput];
    setZodiac(zodiac);
  };

  let zodiacClickHandler = (zodiac) => {
    zodiac = zodiacList[zodiac];
    setZodiac(zodiac);
  };

  return (
    <div className="App">
      <h1 style={{ color: "orange" }}>Do you believe in Zodiac Signs?</h1>
      <h3>
        If yes, then enter the zodiac symbol and I'll let u know your sign
      </h3>
      <p style={{ fontWeight: "bold" }}>Enter the symbol here</p>
      <input
        type="text"
        style={{ width: "80%", height: "10vh" }}
        onChange={inputChangeHandler}
      />
      <h2> {zodiac} </h2>
      <h3>Zodiac Signs</h3>
      {zodiacSigns.map((zodiac) => {
        return (
          <span
            key={zodiac}
            style={{
              fontWeight: "bold",
              fontSize: "30px",
              padding: "0.5rem",
              cursor: "pointer"
            }}
            onClick={() => zodiacClickHandler(zodiac)}
          >
            {" "}
            {zodiac}{" "}
          </span>
        );
      })}
    </div>
  );
}
