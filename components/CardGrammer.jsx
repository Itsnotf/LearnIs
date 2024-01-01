"use client"
import React from 'react'


export default function CardGrammer({ card }) {
    return (
        <div index={card.id} className=' w-full h-[10rem] rounded-md  '>
            <div className='flex flex-col w-full justify-center min-h-full  mx-auto items-center'>
                <h1 className='text-[2rem] font-semibold '>{card.tittle}</h1>
                <p className='font-light text-center '>{card.describe}</p>
            </div>
        </div>
    )
}
