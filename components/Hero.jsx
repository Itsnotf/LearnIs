"use client";
import { ButtonLetsDo } from '.';
import Button from './Button'
import Image from 'next/image';
import DaunBiru from '../public/DaunBiru.svg'
import DaunHijau from '../public/DaunHijau.svg'



export default function Hero() {
    return (
        <div className="flex md:flex-row flex-col w-full h-full overflow-hidden   ">
            <Image src={DaunBiru} alt='' className='absolute md:bottom-0 sm:buttom-0 bottom-[50%] left-0 md:w-[138px] w-[100px] ' />
            <Image src={DaunHijau} alt='' className='absolute md:bottom-0 sm:buttom-0 -bottom-[0%] right-0 md:w-[138px] w-[100px] ' />

            <div className='flex flex-col justify-center items-center md:w-[50%] w-full  md:h-full h-[50%]  bg-gradient-to-r from-cyan-500 to-blue-500 '>

                <div className=' text-center md:mb-[10rem] md:mt-[10rem]  justify-center  md:w-[50%] w-[60%] md:h-auto  h-[50%]  '>
                    <h1 className='text-[3rem]  font-bold  drop-shadow-xl shadow-[#0075FF]  text-[#0075FF] '>Listening</h1>
                    <p className='font-light md:text-[20px] text-[15px] text-white mt-[1rem]'>Listening atau adalah hal yang
                        sangat penting. Mendengar dan
                        menyimak dalam bahasa Inggris ini </p>
                </div>
                <ButtonLetsDo Link='listening' bgcol='linear-listening' />
            </div>

            <div className='flex flex-col justify-center items-center md:w-[50%] w-full  md:h-full h-[50%]  bg-gradient-to-r from-green-500 to-lime-500 '>

                <div className='text-center md:mb-[10rem] md:mt-[10rem]  md:w-[50%] w-[60%] md:h-auto h-[50%]  '>
                    <h1 className='text-[3rem] font-bold  drop-shadow-xl  text-lime-500 '>Grammer</h1>
                    <p className='font-light md:text-[20px] text-[15px] text-white mt-[1rem]'>Grammar adalah sistem aturan yang membantu kita menyusun kalimat. Ini salah satu aspek penting</p>
                </div>
                <ButtonLetsDo Link='grammer' bgcol='linear-grammer' />
            </div>
        </div>
    );
}
