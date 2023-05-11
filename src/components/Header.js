import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full fixed top-0 flex justify-between gap-3 px-6 py-4">
      <Link className="text-3xl" to="/">
        Tic-Tac-Toe
      </Link>
      <Link className="text-3xl" to="/game">
        Game
      </Link>
    </div>
  );
}
