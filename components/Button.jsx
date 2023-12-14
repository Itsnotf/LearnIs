"use client";
import React from 'react'

export default function Button({ link, text, describe, styles }) {
    return (
        <div className={`w-full rounded-lg h-[7rem] ${styles}`}>
            <a href={`/${link} `}>
                <div className='text-white flex flex-col justify-center h-full  items-center'>
                    <h1 className='font-semibold text-lg '>{text}</h1>
                    <p className='text-gray-200 text-[10px] font-light'>{describe}</p>
                </div>

            </a>
        </div>
    )
}
