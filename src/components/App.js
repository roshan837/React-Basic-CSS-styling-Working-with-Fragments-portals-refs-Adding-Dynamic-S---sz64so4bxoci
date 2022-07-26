import React, {useEffect, useState } from "react";
import "../styles/App.css";

export default function App(){
  
  const [x,setX]=useState(0);
  const [y,setY]=useState(0);
  const [time,setTime]=useState(0);

  useEffect(()=>{
    const move = (e)=>{
      if(e.key==='ArrowUp')setY(y-5);
      else if(e.key==='ArrowDown')setY(y+5);
      else if(e.key==='ArrowLeft')setX(x-5);
      else if(e.key==='ArrowRight')setX(x+5);
      console.log(e.key)
      if(x===250 && y===250)console.log("done")
    }
    window.addEventListener('keydown',(e)=>move(e));
    return () => window.removeEventListener('keydown',move);
  },[time])


  return (
   <>
   <div className="ball" style={{top: y,left: x}}></div>
   <div className="hole"></div>
   <div className="heading-timer">{time}</div>
   <button className="start" onClick={()=>{
  
    setInterval(()=>setTime(i=>i+1),1000);
  
  }}>start</button>
  </>
      )
    }
