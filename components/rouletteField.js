import React from "react";

import { spinArray } from "../utils/spinInfo";

export const RouletteField = ({
  setResetTrigger,
  wheelSpin,
  ballSpin,
  realPositionShift,
  resetTrigger,
}) => {
  const [startSpin, setStartSpin] = React.useState(false);
  const [spinResult, setSpinResult] = React.useState([]);

  const { number, color } = spinArray[realPositionShift];

  const spin = (e) => {
    setStartSpin(true);
    const id = e.currentTarget.id;

    const setResult = () => {
      if (spinResult.length > 9) {
        const wrapper = spinResult.splice(0, 1);
        setSpinResult(wrapper);
      }

      setSpinResult([...spinResult, { number, color, result: color === id }]);
    };

    setTimeout(setResult, 4500);
  };

  return (
    <>
      {!startSpin ? (
        <div className="bet-buttons">
          <button className="bet-button" id="red" onClick={spin}>
            Bet Red
          </button>
          <button className="bet-button black" id="black" onClick={spin}>
            Bet Black
          </button>
        </div>
      ) : (
        <div className="bet-buttons">
          <button
            className="bet-button black"
            onClick={() => {
              setStartSpin(false);
              setResetTrigger(!resetTrigger);
            }}
          >
            Reset
          </button>
        </div>
      )}

      {/*  */}
      <img
        src="/images/wheel.png"
        alt="Vercel Logo"
        className={`wheel ${startSpin ? "spin-wheel" : ""}`}
        style={startSpin ? { transform: `rotate(${wheelSpin}deg)` } : {}}
      />
      <div
        className={`ball-wrapper ${startSpin ? "ball-spin" : ""}`}
        style={startSpin ? { transform: `rotate(-${ballSpin}deg)` } : {}}
      >
        <svg height="50" width="50">
          <circle
            cx="25"
            cy="25"
            r="10"
            stroke="black"
            strokeWidth="3"
            fill="white"
          />
        </svg>
      </div>
      <div style={{ position: "absolute", right: "0px" }}>
        Result List
        <div>
          {spinResult.map((elem) => {
            return (
              <div key={Math.random()}>
                {elem.number}, {elem.color}, {elem.result ? "win" : "lose"}
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .wheel {
          margin-top: 100px;
        }

        .spin-wheel {
          // transform: rotate(9.73deg);
          // transform: rotate(979deg);
          transition: 4s;
        }

        .ball-wrapper {
          width: 600px;
          height: 600px;
          position: absolute;
          top: 220px;
          display: flex;
          justify-content: center;
        }

        .ball-spin {
          top: 300px;
          width: 470px;
          height: 470px;
          transform: rotate(-979deg);
          -webkit-transition: 4s;
          transition: 4s;
        }
        .bet-buttons {
          display: flex;
        }

        .bet-button {
          margin: 0 10px;
          width: 100px;
          height: 40px;
          border-radius: 30px;
          border: navajowhite;
          background: red;
          color: white;
        }
        .bet-button:focus {
          outline: none;
        }
        .black {
          background: black;
        }
      `}</style>
    </>
  );
};
