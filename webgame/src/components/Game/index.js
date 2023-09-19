import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import WinOrLoseCard from "../WinOrLoseCard/index";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import "./index.css";
import ScoreCardItem from "../ScoreCradItem";

const Game = (props) => {
  const { letPlayButton, playerDetailsList } = props;
  const [color, setColor] = useState("red");
  const [count, setCount] = useState(40);
  const [isGameInProgress, setIsGameInProgress] = useState(true);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const timmer = setInterval(() => {
      setCount((old) => (old > 0 ? old - 1 : 0));
    }, 1000);

    const min = 1000;
    const max = 2000;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    const changeColor = setInterval(() => {
      setColor((old) => (old === "red" ? "green" : "red"));
    }, randomNum);

    return () => {
      clearTimeout(timmer);
      clearTimeout(changeColor);
    };
  }, []);

  const hanlderClick = () => {
    if (color === "green" && isGameInProgress) {
      setScore((old) => old + 1);
    } else {
      setIsGameInProgress(false);
    }
  };

  const GameCard = () => {
    return (
      <div className="game-container">
        <Box>
          <h1>
            You're about to die in : <span>{count}</span> seconds
          </h1>
        </Box>
        <div className="flex-row-container">
          <div>
            <Box
              width="200px"
              height="200px"
              bgcolor={color}
              borderRadius={4}
            ></Box>
          </div>
          <div>
            <h1>Your Score:{score}</h1>
            <h1>Game Level : {}</h1>
            <Box sx={{ margin: "auto" }}>
              <Button
                type="button"
                variant="contained"
                color="success"
                onClick={hanlderClick}
              >
                Run
                <DirectionsRunIcon sx={{ ml: 1 }} />
              </Button>
            </Box>
          </div>
        </div>
      </div>
    );
  };

  const resetGame = () => {
    setIsGameInProgress(true);
    setScore(0);
    setCount(40);
  };

  const exitButtonHandler = () => {
    letPlayButton();
  };

  const ScoreCard = () => {
    const isWon = score >= 10 ? true : false;
    return (
      <WinOrLoseCard score={score} onClickPlayAgain={resetGame} isWon={isWon} />
    );
  };
  return (
    <div className="bg-container">
      <div >
        <div>
          {isGameInProgress && score < 10 && count > 0 ? (
            GameCard()
          ) : (
            <ScoreCard />
          )}
        </div>
        <div className="scoreBoard-container">
          <table>
            <tr>
              <th>Name</th>
              <th>Game Level</th>
              <th>Duration</th>
            </tr>
              {playerDetailsList.map((each)=>(
                <ScoreCardItem playerDetails={each}/>
              ))}
          </table>
        </div>
      </div>
      <Box sx={{ margin: "auto" }}>
        <Button type="button" variant="contained" onClick={exitButtonHandler}>
          Exit Game
          <ExitToAppIcon sx={{ ml: 1 }} />
        </Button>
      </Box>
    </div>
  );
};
export default Game;
