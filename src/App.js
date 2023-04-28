import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <Link to="/game">Game</Link>
      <Outlet />
    </>
  );
}

export default App;
