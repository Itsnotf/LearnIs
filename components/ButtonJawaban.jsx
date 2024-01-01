import React from 'react'

export default function ButtonJawaban({ id, actives, handleClick, jawaban }) {
    return (
        <div className='flex flex-col w-full rounded-md    '>
            <button className={`w-full  h-[5rem] bg-lime-200 text-green-700  focus:text-white  transition-colors  shadow-sm rounded-md ${actives ? ' active' : ''}`} onClick={() => handleClick(id)} >
                <p>{jawaban}</p>
            </button>
        </div>
    )
}
