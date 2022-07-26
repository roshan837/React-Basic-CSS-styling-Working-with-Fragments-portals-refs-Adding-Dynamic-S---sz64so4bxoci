import React, {useState } from "react";
import "../styles/App.css";

export default function App(){
  
  const [x,setX]=useState(0);
  const [y,setY]=useState(0);
  const [time,setTime]=useState(0);
  const [me,setMe]=useState(false);
  const [count,setCount]=useState(0);
const my=()=>setInterval(()=>setTime(i=>i+1),1000);
const move = (e)=>{
  if(e.key==='ArrowUp')setY(y-5);
  if(e.key==='ArrowDown')setY(y+5);
  if(e.key==='ArrowLeft')setX(x-5);
  if(e.key==='ArrowRight')setX(x+5);
  console.log(e.key,x,y)
  if(x===250 && y===250){setMe(false);setCount(time);
}
}
if(me===true && x!==255 && y!==255)window.addEventListener('keydown',(e)=>move(e));

  return (
   <>
   <div className="ball" style={{top: y,left: x}}></div>
   <div className="hole"></div>
   <div className="heading-timer">{me? time:count}</div>
   <button className="start" onClick={()=>{
    my()
    setMe(!me);
  }}>start</button>
  </>
      )
    }
