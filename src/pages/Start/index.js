import React from "react";
import { Link } from "react-router-dom";
import Board from "./components/Board";
import Button from "./components/Button";

const Start = () => {
  function hello() {
    <div className="w-screen h-screen bg-blue-200 flex justify-center items-center gap-5 ">
      <div className="w-full flex flex-col justify-center items-center gap-5 sm:flex-row ">
        <Board />
        <div className="w-10/12 flex flex-col gap-3 justify-around sm:w-3/12">
          <div className="text-5xl font-black">Tic-Tac-Toe</div>
          <div className="flex gap-3 justify-around sm:justify-normal">
            <Link to="/board">
              <Button text={"Solo"} color={"bg-rose-200"}>
                Solo
              </Button>
            </Link>
            <Button text="Multi" color="bg-teal-200" onClick={hello} />
          </div>
        </div>
      </div>
    </div>;
  }
};

export default Start;
