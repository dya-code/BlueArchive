import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import TaskBarBG from "../assets/task_bar.png"
import Cafe from "../assets/cafe.png"
import Schedule from "../assets/schedule.png"
import Students from "../assets/students.png"
import Set from "../assets/sett.png"
import Circle from "../assets/circle.png"
import Build from "../assets/build.png"
import Store from "../assets/store.png"
import Gacha from "../assets/gacha.png"
import Task from "../assets/task_btn.png"

function TaskBar() {
  const [time, setTime] = useState("00:00")

  const currentTime = () => {
    const date = new Date()
    let h = date.getHours() < 12 ? "am" : "pm";
    let hours = String(date.getHours())
    const minutes = String(date.getMinutes())

    if (date.getHours() > 12) { hours = String(date.getHours() - 12) }

    if (h == "am") { setTime(`AM ${hours}:${minutes}`) }
    else { setTime(`PM ${hours}:${minutes}`) }

  }

  const startTime = () => {
    setInterval(currentTime, 1000)
  }

  startTime()

  return (
    <div className="task-bar fixed w-screen h-screen flex  items-end justify-center -z-10">

      <img className='absolute mb-4 w-[96%] shadow-lg' src={ TaskBarBG } />

      <div className="buttons z-10 w-screen flex justify-start items-center mb-[3%] ml-[8%]" id='task-btns'>
        {/* <img className='w-16 mr-[60px] invisible' id="inv" src={ Cafe }></img> */}
        <img className='w-16 mr-[100px] transition duration-100 active:scale-90 cursor-pointer' id="cafe" src={ Cafe }></img>
        <img className='w-12 mt-2 mr-[100px] transition duration-100 active:scale-90 cursor-pointer' id="sche" src={ Schedule }></img>
        <Link to="/students">
          <img className='w-13 mt-3 mr-[100px] transition duration-100 active:scale-90 cursor-pointer' id="student" src={ Students }></img>
          {/*<div className="round rounded-full bg-red-500 w-[15px] h-[15px] ml-[40px] -mt-[70px] fixed animate-ping" id="ping st-ping"></div>*/}
          {/*<div className="round rounded-full bg-red-500 w-[15px] h-[15px] ml-[40px] -mt-[70px] fixed" id="ping st-ping"></div>*/}
        </Link>
        <img className='w-15 mt-4 mr-[100px] transition duration-100 active:scale-90 cursor-pointer' id="set" src={ Set }></img>
        <img className='w-15 mt-3 mr-[100px] transition duration-100 active:scale-90 cursor-pointer' id="circle" src={ Circle }></img>
        <img className='w-13 mt-4 mr-[100px] transition duration-100 active:scale-90 cursor-pointer' id="build" src={ Build }></img>
        <img className='w-15 mt-5 mr-[100px] transition duration-100 active:scale-90 cursor-pointer' id="store" src={ Store }></img>
        <Link to="/pickup">
          <img className='w-15 mr-[70px] transition duration-100 active:scale-90 cursor-pointer' id="gacha" src={ Gacha }></img>
          {/*<div className="round rounded-full bg-red-500 w-[15px] h-[15px] ml-[50px] -mt-[70px] fixed animate-ping"></div>*/}
          {/*<div className="round rounded-full bg-red-500 w-[15px] h-[15px] ml-[50px] -mt-[70px] fixed"></div>*/}
        </Link>
      </div>

      <div className="buttons-text z-10 absolute w-screen flex justify-start items-center mb-[1.5%] ml-[17%]" id='t-text'>
        {/* <img className='w-16 mr-[68px] invisible' src={ Cafe }></img> */}
        <div className="text-2xl font-molu text-[#16365c] mr-[108px]" id="t-cafe">카페</div>
        <div className="text-2xl font-molu text-[#16365c] mr-[100px]" id="t-sche">스케줄</div>
        <div className="text-2xl font-molu text-[#16365c] mr-[113px]" id="t-student">학생</div>
        <div className="text-2xl font-molu text-[#16365c] mr-[110px]" id="t-set">편성</div>
        <div className="text-2xl font-molu text-[#16365c] mr-[112px]" id="t-circle">서클</div>
        <div className="text-2xl font-molu text-[#16365c] mr-[114px]" id="t-build">제조</div>
        <div className="text-2xl font-molu text-[#16365c] mr-[123px]" id="t-store">상점</div>
        <div className="text-2xl font-molu text-[#16365c]" id="t-gacha">모집</div>
      </div>
      
      <div className="absolute w-screen flex justify-end items-center mb-[1.2%] mr-[175px]">
        <div className="text-xl font-molu text-[#16365c] mt-3" id="time">{ time }</div>
      </div>

      <div className="task mb-32">
        <Link to="/task">
          {/*<div className="round rounded-full bg-red-500 w-[15px] h-[15px] ml-[170px] fixed animate-ping"></div>*/}
          {/*<div className="round rounded-full bg-red-500 w-[15px] h-[15px] ml-[170px] fixed"></div>*/}
          <img className='w-[250px] transition duration-100 active:scale-90 cursor-pointer z-60' id="task" src={ Task } />
        </Link>
      </div>

    </div>
  )
}

export default TaskBar