import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faHouse, faGear } from '@fortawesome/free-solid-svg-icons'

import nav from '../assets/navbar.png'
// import home from '../assets/home.png'

function NavBar(props: any) {

  return (
    <div id={'navbar'} className="navbar flex items-center justify-between tracking-tight fixed bg-[#f2fafd] shadow-lg rounded-b-4xl h-[60px] w-screen mb-12 z-30">
      
      <div className="front-menu flex items-center">
        <img id={'navbar-img'} className="h-[60px]" src={ nav } alt="" />

        <div className="first fixed flex items-center justify-center">
          <Link className='z-10' to="/">
            <button id={'prev'} className="prev transition duration-100 active:scale-90 bg-[#456399] flex justify-center items-center rounded-full w-[70px] h-[70px] m-10 mt-[85px] transition duration-300 hover:opacity-70">
              <FontAwesomeIcon id={'prev-icon'} className='text-5xl text-white' icon={faArrowLeft} />
            </button>
          </Link>

          <div id={'pickup-title'} className="title text-[#2c4663] tracking-tight text-4xl border-b-4 h-[47px] -ml-12 mt-3 pl-8 border-[#ffe03d]">{ props.name }</div>
          <button id={'pickup-help'} className="help transition duration-100 active:scale-90 text-white bg-[#2a4566] font-bold text-xl w-8 h-8 ml-2 mt-1 rounded-md transition duration-300 hover:opacity-70">?</button>
        </div>

      </div>
 
      <div className="back-menu flex items-center justify-end">

      <div id={'pickup-sub'} className="sub-line bg-neutral-300 w-[2px] h-[26px] rotate-[12deg] mr-6"></div>

        <button id={'pickup-btn-btn'} className="setting-btn mt-1 mr-6">
          <FontAwesomeIcon id={'pickup-btn'} className='text-4xl text-[#436299] transition duration-100 active:scale-90' icon={faGear} />
        </button>

        <div id={'pickup-sub'} className="sub-line bg-neutral-300 w-[2px] h-[26px] rotate-[12deg] mr-6"></div>

        <Link to="/">
          <button id={'pickup-btn-btn-right'} className="home-btn mt-1 mr-9">
            <FontAwesomeIcon id={'pickup-btn'} className='text-4xl text-[#436299] transition duration-100 active:scale-90' icon={faHouse} />
          </button>
        </Link>

      </div>
      
    </div>
  )
}

export default NavBar