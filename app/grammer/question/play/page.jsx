import React from 'react';
import { PlayQuestion } from '@/components';
import { playsoal } from '@/constant/index';


export default function Play() {

    const foundSoal = playsoal.find(soal => soal.id === 1);

    return (
        <div className='overflow-hidden w-full min-h-screen'>
            {foundSoal && <PlayQuestion key={foundSoal.id} soal={foundSoal} />}
        </div>
    );
}