import Board from "./components/Board";
import Button from "./components/Button";

const Start = () => {
  function hello() {
    console.log("Hello");
  }

  return (
    <div className="w-screen h-screen bg-blue-200 flex justify-center items-center gap-5">
      <div className="w-full flex justify-center gap-5">
        <Board />
        <div className="flex flex-col gap-3 justify-around">
          <div className="text-5xl font-black">Tic-Tae-Toe</div>
          <div className="flex gap-3 justify-center">
            <Button text={"Solo"} color={"bg-rose-200"} onClick={hello} />
            <Button text={"Multi"} color={"bg-teal-200"} onclick={hello} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
