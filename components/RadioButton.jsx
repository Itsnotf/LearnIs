import React from 'react'

export default function RadioButton({ id, isAnable, handleClick }) {
    return (
        <div className='w-[10%] bg-gray-50 rounded-md'>
            <button
                className={`w-full h-full rounded-md border-gray-100  ${isAnable ? 'active' : ''}`}
                onClick={() => handleClick(id)}
            >

            </button>
        </div>
    )
}
