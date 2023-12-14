import React from 'react'

export default function ButtonJawaban({ id, actives, handleClick, jawaban }) {
    return (
        <div className='flex flex-col w-full rounded-md border '>
            <button className={`w-full  h-[5rem] border ${actives ? 'active' : ''}`} onClick={() => handleClick(id)} >
                <p>{jawaban}</p>
            </button>
        </div>
    )
}
