// InputQuestion.js
"use client";

import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import CardGrammer from './CardGrammer';
import RadioButton from './RadioButton';
import { grammer } from '../constant/index';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import DaunKiriGrammer from '../public/DaunKiriGrammer.svg'
import Image from 'next/image';
import Load from '../public/Loads.svg'
import { FaArrowLeftLong } from "react-icons/fa6";

const InputQuestion = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const router = useRouter();
    const [isAnable, setisAnable] = useState(null);
    const [jumlahSoal, setJumlahSoal] = useState('');
    const [katagory, setKatagory] = useState(null);
    const [loading, setLoading] = useState(false);


    const handleClick = (id) => {
        setisAnable((prev) => (prev === id ? null : id));
        setKatagory(id)
    };

    const Nsoal = {
        banyaksoal: jumlahSoal,
    }

    const Katagori = {
        tingkat: katagory,
    }
    const handleButtom = () => {
        setLoading(true);
    }
    const Loadings = loading !== false;
    const activeCard = grammer.find((card) => card.id === isAnable);
    const isButtonVisible = isAnable !== null && jumlahSoal !== '';

    return (
        <div className='Card '>

            <div className='w-full flex items-center justify-center flex-col min-h-screen h-full '>

                <div className='  animate-pulse rounded-full w-40 h-40 bg-[#90E20C] absolute left-[30%] top-[30%]'></div>
                <div className='  animate-pulse rounded-full w-20 h-20 bg-[#90E20C] absolute left-[50%] top-[56%]'></div>
                <div className='  animate-pulse rounded-full w-20 h-20 bg-[#90E20C] absolute left-[37%] top-[60%]'></div>
                <div className='  animate-pulse rounded-full w-28 h-28 bg-[#90E20C] absolute left-[60%] top-[40%]'></div>
                <div className=' absolute w-full h-full '><Image src={DaunKiriGrammer} className='bottom-0 absolute' /></div>
                <div className=' absolute min-h-screen w-full'><Image src={DaunKiriGrammer} className='absolute right-0 -rotate-180 ' /></div>

                <div className='w-full flex items-center justify-center flex-col h-auto z-50 bg-white/25 gap-5 py-20 rounded-2xl backdrop-blur-lg backdrop-filter shadow-xl text-white '>
                    <div className='h-[10%]  w-[10%] absolute -top-[40%] -left-[70%]  text-[2rem] text-white rounded-lg '>
                        <Link className='w-[80%] h-full font-semibold flex items-center justify-center'
                            href={{
                                pathname: '/grammer'
                            }}
                        ><FaArrowLeftLong /></Link>
                    </div>
                    <h1 className='text-[5rem] font-semibold'>Grammer</h1>
                    <div className='flex flex-row w-[70%] mx-auto gap-2'>
                        <input
                            type="number"
                            min="0"
                            max="100"
                            className="bg-gray-50 border w-full text-gray-900 text-sm appearance-none rounded-lg  focus:border-lime-400 focus:border-[3px] outline-none block  p-2.5"
                            placeholder="number of questions"
                            value={jumlahSoal || ''}
                            onChange={(e) => setJumlahSoal(e.target.value)}
                            required
                        />
                        <RadioButton id={1} isAnable={isAnable === 1} handleClick={() => handleClick(1)} />
                        <RadioButton id={2} isAnable={isAnable === 2} handleClick={() => handleClick(2)} />
                        <RadioButton id={3} isAnable={isAnable === 3} handleClick={() => handleClick(3)} />
                        <RadioButton id={4} isAnable={isAnable === 4} handleClick={() => handleClick(4)} />
                    </div>
                    <div className='flex md:flex-row flex-col w-[70%] mx-auto mt-[10px]'>
                        {activeCard && <CardGrammer key={activeCard.id} card={activeCard} />}
                    </div>
                    {isButtonVisible && (
                        <div className='w-[70%]  linear-grammer text-white flex items-center justify-center p-2 rounded-md mt-4 cursor-pointer '>
                            <Link onClick={handleButtom}
                                className='w-full h-full '
                                href={{
                                    pathname: '/grammer/question/play',
                                    query: { Nsoal: JSON.stringify({ Nsoal }), Katagori: JSON.stringify({ Katagori }) }
                                }}>
                                <div className='w-full h-full flex items-center justify-center '>
                                    {Loadings ? <div className='w-full h-full flex items-center justify-center flex-row gap-5'><Image src={Load} className='animate-spin w-[5%] h-[5%] ' /><p>Loading</p> </div> : <p>Start</p>}
                                </div>
                            </Link>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default InputQuestion;
