import React from 'react'
import { Button } from '@/components'


export default function Grammer() {
    return (
        <main className='overflow-hidden w-full min-h-screen flex justify-center items-center'>
            <div className='flex flex-col justify-center w-[95%] min-h-screen text-center '>
                <div className=''>
                    <h1 className='text-[4rem] font-semibold'>Grammer Is Fun</h1>
                </div>
                <div className='w-[50%] h-full mt-[4rem] mx-auto'>
                    <Button link='grammer/question' text='Ayo Belajar' describe='' styles='linear-grammer' />
                </div>
            </div>
        </main>
    )
}
