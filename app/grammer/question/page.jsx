"use client"

import React from 'react'
import InputQuestion from '../../../components/InputQuestion';
import { useRouter } from 'next/navigation'


export default function Question() {

    const router = useRouter();
    return (
        <div className=' overflow-hidden w-full min-h-screen linear-grammer backdrop-blur-md'>
            <InputQuestion router={router} />
        </div>
    )
}
