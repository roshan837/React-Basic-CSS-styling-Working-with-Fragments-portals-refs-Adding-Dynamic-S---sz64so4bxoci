import React, {useState,useRef } from "react";
import "../styles/App.css";

export default function App(){
  const interval = useRef();
  const move = useRef();
  const [x,setX]=useState(0);
  const [y,setY]=useState(0);
  const [time,setTime]=useState(0);
if(x===250 && y===250){
  clearInterval(interval.current);
  window.removeEventListener('keydown',move.current)
}
const start = () => {
  setTime(0);
  setX(0);
  setY(0);
  move.current = (e) =>{
    if(e.key==='ArrowUp')setY(y=>y-5);
    if(e.key==='ArrowDown')setY(y=>y+5);
    if(e.key==='ArrowLeft')setX(x=>x-5);
    if(e.key==='ArrowRight')setX(x=>x+5);
  }
  interval.current=setInterval(()=>setTime(time=>time+1),1000);
  window.addEventListener('keydown',move.current);
}
  return (
   <>
   <div className="ball" style={{top: `${y}px`,left: `${x}px`}}></div>
   <div className="hole"></div>
   <div className="heading-timer">{time}</div>
   <button className="start" onClick={()=>start()}>start</button>
  </>
      )
    }
