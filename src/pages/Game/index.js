import Board from "./components/Board";

const Game = () => {
  return (
    <div className="w-screen h-screen bg-blue-200 flex justify-center items-center gap-5">
      <div className="w-full flex justify-center gap-5">
        <Board />
      </div>
    </div>
  )
};

export default Game;
