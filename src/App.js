import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <Link to="/game">Game</Link>
      <br />
      <Link to="/board">Board</Link>
      <Outlet />
    </>
  );
}

export default App;
