import { useState } from "react"

import ChangeColor from "./Component/ChangeColor";


function App() {
  const[value,setvalue]=useState(0);
  const[bgcolor,setbgcolor]=useState("");
  function increaseValue(){
    setvalue(value+1);
  }
  function changecolor(e){
        e.preventDefault();
          const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
          setbgcolor(randomColor);
          console.log("Color Change");
    }

    
  return (
    <>
    <div onClick={increaseValue} style={{backgroundColor:bgcolor}}className="flex items-center justify-center rounded-2xl border-2 border-black h-50 w-80 mx-auto">
      <h1 className="text-2xl">No of counts:{value}</h1>
      <ChangeColor changeColor={changecolor} ></ChangeColor>
    </div>
    </>
  )
}

export default App
