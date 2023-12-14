'use client'

import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

export default function ButtonLetsDo({ Link, bgcol }) {


    return (
        <div className='flex justify-center w-full  h-auto'>
            <a href={`/${Link}`}>
                <button className={`flex justify-center items-center gap-14 md:gap-16 flex-row h-[3rem] md:h-[3.5rem] w-[10rem] md:w-[15rem] rounded-xl ${bgcol} drop-shadow-md shadow-violet-500`}>
                    <h1 className='text-white text-[1rem] md:text-[1.5rem] font-semibold'>Lets Do</h1>
                    <p className='text-white text-[1rem] md:text-[1.5rem]'><FaArrowRightLong /></p>
                </button>
            </a>

        </div>
    )
}
