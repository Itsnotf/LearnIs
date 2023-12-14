"use client"
import React from 'react'


export default function CardGrammer({ card }) {
    return (
        <div index={card.id} className=' w-full h-[7rem] border'>
            <div className='flex flex-col w-[90%] min-h-full border mx-auto items-start'>
                <h1 className='text-[2rem] font-semibold'>{card.tittle}</h1>
                <p className='font-light'>{card.describe}</p>
            </div>
        </div>
    )
}
