import React from 'react'

export default function RadioButton({ id, isAnable, handleClick }) {
    return (
        <div className='w-[10%] bg-gray-50'>
            <button
                className={`w-full h-full border border-gray-100 rounded-md ${isAnable ? 'active' : ''}`}
                onClick={() => handleClick(id)}
            >

            </button>
        </div>
    )
}
