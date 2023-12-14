// InputQuestion.js
"use client";

import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import CardGrammer from './CardGrammer';
import RadioButton from './RadioButton';
import { grammer } from '../constant/index';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const InputQuestion = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const router = useRouter();
    const [isAnable, setisAnable] = useState(null);
    const [jumlahSoal, setJumlahSoal] = useState();


    const handleClick = (id) => {
        setisAnable((prev) => (prev === id ? null : id));
    };

    const Nsoal = {
        banyaksoal: jumlahSoal,
    }


    const activeCard = grammer.find((card) => card.id === isAnable);
    const isButtonVisible = isAnable !== null && jumlahSoal !== '';

    return (
        <div className='Card'>
            <div className='w-full text-center min-h-screen '>
                <h1 className='text-[5rem] font-semibold'>Grammer</h1>
                <div className='flex flex-row w-[70%] mx-auto gap-2'>
                    <input
                        type="number"
                        min="0"
                        max="100"
                        className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg ring-0 focus:ring-0 block  p-2.5"
                        placeholder="Jumlah Soal"
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
                    {isButtonVisible && (
                        <Link
                            className="bg-blue-500 text-white p-2 rounded-md mt-4 cursor-pointer"
                            // onClick={startQuiz}
                            href={{
                                pathname: '/grammer/question/play',
                                query: { Nsoal: JSON.stringify({ Nsoal }) }
                            }}>
                            Mulai
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InputQuestion;
