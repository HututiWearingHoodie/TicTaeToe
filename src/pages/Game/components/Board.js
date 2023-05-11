import { Component, useState } from "react";
import O from "./O";
import X from "./X";

let num = 0;
const Board = () => {
  const [components, setComponents] = useState([]);
  
  const makeShape = event =>{
    if(num===0&&components.length<=1){
      setComponents(components.concat(<O />));
      num=1;
    }else if(num===1&&components.length<1){
      setComponents(components.concat(<X />));
      num=0;
    }
    
  };

  return (
    <div className="w-6/12 aspect-square bg-rose-300 rounded-lg overflow-hidden">
      <div className="grid gap-2 grid-cols-3 grid-rows-3 bg-white">
        <div className="aspect-square bg-rose-300 flex justify-center items-center" onClick={makeShape}>{components}</div>
        <div className="aspect-square bg-rose-300 flex justify-center items-center" onClick={makeShape}></div>
        <div className="aspect-square bg-rose-300 flex justify-center items-center" onClick={makeShape}></div>
        <div className="aspect-square bg-rose-300 flex justify-center items-center" onClick={makeShape}></div>
        <div className="aspect-square bg-rose-300 flex justify-center items-center" onClick={makeShape}></div>
        <div className="aspect-square bg-rose-300 flex justify-center items-center" onClick={makeShape}></div>
        <div className="aspect-square bg-rose-300 flex justify-center items-center" onClick={makeShape}></div>
        <div className="aspect-square bg-rose-300 flex justify-center items-center" onClick={makeShape}></div>
        <div className="aspect-square bg-rose-300 flex justify-center items-center" onClick={makeShape}></div>
      </div>
    </div>
  );
};

export default Board;