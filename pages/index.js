import React from "react";
import Head from "next/head";

import { RouletteField } from "../components/rouletteField";

export default function Home() {
  const [resetTrigger, setResetTrigger] = React.useState(true);

  const ballPositionShift = 74 + Math.floor(74 * Math.random());
  const wheelPositionShift = 74 + Math.floor(74 * Math.random());

  const ballSpin = (360 / 37) * ballPositionShift + 4;
  const wheelSpin = (360 / 37) * wheelPositionShift;
  const realPositionShift = (ballPositionShift + wheelPositionShift) % 37;

  return (
    <div className="container">
      <Head>
        <title>Roulette</title>
      </Head>

      <main>
        <h1 className="title">Welcome to Roulette</h1>

        <RouletteField
          setResetTrigger={setResetTrigger}
          resetTrigger={resetTrigger}
          wheelSpin={wheelSpin}
          ballSpin={ballSpin}
          realPositionShift={realPositionShift}
        />
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          overflow: hidden;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          padding: 0 50px;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
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

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
