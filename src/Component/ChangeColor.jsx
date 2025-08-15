import React, { useState } from 'react'

function ChangeColor({changeColor}) {
  
    return (
        
        <button
      onClick={(e) => {
        e.stopPropagation();
        changeColor();
      }} 
             className="px-4 py-2  text-black rounded hover:bg-blue-100 cursor-pointer"
             >Click me</button>
        
    )
}

export default ChangeColor
