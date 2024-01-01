"use client"
import React from 'react'
import Image from 'next/image'
import BookLovers from '../public/BookLovers.svg'
import tasklist from '../public/tasklist.svg'
import QnA from '../public/QnA.svg'
import { FaArrowDown } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import DaunKananGrammer from "../public/DaunKananGrammer.svg"
import DaunKiriGrammer from "../public/DaunKiriGrammer.svg"
import Link from 'next/link'



function HeroGrammer() {

    const handleDown = () => {
        window.scroll({ top: 1000, behavior: 'smooth' })
    }

    return (
        <div className='flex flex-col items-center justify-center w-full min-h-screen mx-auto '>
            <div className=' text-center text-white  w-[50%] pt-10'>
                <h1 className='font-bold text-[3rem]'>Route And Goals</h1>
                <p className="font-light text-[1rem]">Kami bertujuan agar kalian bisa mengetahui tingkat grammer kalian sendiri.</p>
            </div>

            <div className='flex flex-row w-full justify-center gap-5 my-5'>
                <div className='flex flex-col w-[55%] gap-3 '>

                    <div className='w-full md:gap-10 gap-1 flex flex-row h-[250px] items-center shadow-[7px_0px_5px_0px_rgba(0,0,0,0.1)] justify-center bg-[#EAFBF1] rounded-[20px]'>
                        <div className='md:w-[35%] w-[55%] flex flex-col  gap-2 '>
                            <h1 className='font-semibold md:text-xl text-base text-[#4ABA47]'>Kamu harus belajar agar game ini dapar selesai!!</h1>
                            <p className='font-light md:text-base text-xs text-[#819A7B]'>Akan ada tingkatan tingkatan kesulitan berdasarkan materi yang sudah kami sortir, mereka menunggu untuk di selesai kan.</p>
                        </div>
                        <div className='md:w-55%] w-[35%]'>
                            <Image src={BookLovers} className='object-cover' />
                        </div>
                    </div>
                    <div className='w-full gap-10 flex flex-row h-[250px]  shadow-[7px_0px_5px_0px_rgba(0,0,0,0.1)] items-center justify-center bg-[#EAFBF1] rounded-[20px]'>
                        <Image src={tasklist} />
                        <div className='w-[40%] flex flex-col gap-2'>
                            <h1 className='font-semibold text-xl text-[#4ABA47]'>Kerja kan dengan terliti agar hasil memuaskan!!</h1>
                            <p className='font-light text-[#819A7B]'>Kerjakan lah dengan teliti, akan ada beberapa soal jebakan yang mampu mengecoh mu, hati hati dalam menjawab ya goodluck!.</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center w-[35%] h-[512px]  shadow-[7px_0px_5px_0px_rgba(0,0,0,0.1)] bg-[#EAFBF1] rounded-[20px] gap-14 '>
                    <div className='w-[80%] flex flex-col gap-2'>
                        <h1 className='font-semibold text-xl text-[#4ABA47]'>Dan lihat tingkat grammar yang anda miliki!!</h1>
                        <p className='font-light text-[#819A7B]'>Anda akan mengetahui seberapa jauh kemampuan anda, anda berhak untuk Puas atau tetap lah terus berlatih</p>
                    </div>
                    <Image src={QnA} />
                </div>
            </div>
            <div className='text-center bg-[#4ABA47] p-2 rounded-full animate-bounce cursor-pointer' onClick={handleDown}>
                <FaArrowDown className='text-[20px] text-white' />
            </div>

            <div className='flex justify-center items-center h-[10rem] w-full '>
                <div className='h-[40%] items-center w-[20%] justify-center flex flex-row text-[2rem] text-white rounded-2xl shadow-xl linear-grammer'>
                    <Link className='w-[80%] h-full font-semibold flex items-center justify-center'
                        href={{
                            pathname: '/grammer/question'
                        }}
                    >Play Now</Link>
                    <FaArrowRightLong />
                </div>

            </div>
        </div>
    )
}

export default HeroGrammer