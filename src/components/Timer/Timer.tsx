import React, { useState } from 'react'
import play from '../images/play.svg'
import pause from '../images/pause.svg'
import  stopTimer from '../images/stop.webp'
import resetTimer from '../images/reset.png'

const Timer = () => {
let [seconds, setseconds] = useState<number>(0);
let [minutes, setminutes] = useState<number>(0);
let [hours, sethours] = useState<number>(0);
let [interv, setinterv] = useState<any>();
let [status, setstatus] = useState<number>(0);

function startTimer() {
  if(status!==1){
    setstatus(1);
    setinterv(
      setInterval(() => {
        start();
      }, 200)
    );
}
}
  function start() {
    if (seconds===60) {
      minutes++;
      setminutes(minutes);
      seconds=0;
    }
    if (minutes===60) {
      hours++;
      sethours(hours);
      minutes=0;
    }
    setseconds(seconds++);
  }
  function stop() {
    if (status!==0) {
      setstatus(2);
      clearInterval(interv);
    }
  }
  function reset() {
    clearInterval(interv);
    setstatus(0);
    sethours(0);
    setminutes(0);
    setseconds(0);
  }
  return (
    <div >
      <div className="Timer">
        <span>{hours > 10 ? hours : `0${hours}`}</span>:
        <span>{minutes > 10 ? minutes : `0${minutes}`}</span>:
        <span>{seconds > 10 ? seconds : `0${seconds}`}</span>
      </div>
      <div className="btn">
      <span className="mouse" onClick={startTimer}>{status===2 ? <img src={pause} width={50} height={50}/> : <img src={play} width={50} height={50}/>}</span>
      <span className="mouse" onClick={stop}><img src={stopTimer} width={50} height={50}/></span>
      <span className="mouse" onClick={reset}><img src={resetTimer} width={50} height={50}/></span>

      </div>
    </div>
  )
}
export default Timer;
