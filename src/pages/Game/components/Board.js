import { useEffect, useState } from "react";
import O from "./O";
import X from "./X";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Board = () => {
  const [game, setGame] = useState(Array(9).fill(undefined));
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const handleGame = (idx) => {
    if (game[idx] !== undefined) return;

    let prevGame = [...game];
    prevGame[idx] = count % 2 === 0 ? "O" : "X";
    setCount((prevCount) => prevCount + 1);
    setGame(prevGame);
    checkWin(prevGame);
  };

  useEffect(() => {
    const checker = checkWin(game);
    if (!checker) {
      if (count === 9) {
        toast("Draw");
        setTimeout(() => {
          navigate("/game");
        }, 2000);
      }
    } else {
      toast("You Win " + checker.toString());
      setTimeout(() => {
        navigate("/game");
      }, 2000);
    }
  }, [game]);

  const checkWin = (game) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (game[a] !== undefined && game[a] === game[b] && game[a] === game[c]) {
        if (game[a] === "O") return "O";
        else return "X";
      }
    }
  };

  return (
    <div className="w-10/12 aspect-square bg-rose-300 rounded-lg overflow-hidden sm:w-6/12">
      <div className="grid gap-2 grid-cols-3 grid-rows-3 bg-white">
        {game.map((item, index) => (
          <div
            className="aspect-square bg-rose-300 flex justify-center items-center cursor-pointer hover:bg-rose-200"
            onClick={() => handleGame(index)}
            key={index}
          >
            {item !== undefined ? item === "O" ? <O /> : <X /> : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
