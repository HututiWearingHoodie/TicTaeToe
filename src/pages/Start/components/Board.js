import O from "./O";
import X from "./X";

const Board = () => {
  return (
    <div className="w-10/12 aspect-square rounded-lg overflow-hidden sm:w-6/12 ">
      <div className="grid gap-2 grid-cols-3 grid-rows-3 bg-white">
        <div className="aspect-square bg-rose-300 flex justify-center items-center">
          <O />
        </div>
        <div className="aspect-square bg-rose-300 flex justify-center items-center ">
          <X />
        </div>
        <div className="aspect-square bg-rose-300 flex justify-center items-center">
          <O />
        </div>
        <div className="aspect-square bg-rose-300"></div>
        <div className="aspect-square bg-rose-300 flex justify-center items-center">
          <X />
        </div>
        <div className="aspect-square bg-rose-300"></div>
        <div className="aspect-square bg-rose-300 flex justify-center items-center">
          <O />
        </div>
        <div className="aspect-square bg-rose-300 flex justify-center items-center">
          <X />
        </div>
        <div className="aspect-square bg-rose-300"></div>
      </div>
    </div>
  );
};

export default Board;
