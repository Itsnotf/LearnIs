import { Hero, Button } from '@/components'
import Image from 'next/image'
import Bintang from '../public/Bintang.svg'

export default function Home() {
  return (
    <main className='overflow-hidden w-full md:min-h-screen lg:h-[500px] h-[700px]'>
      <div className='hidden lg:block fixed  md:top-[10%] pt-4 top-[2%] md:left-[40%] left-[30%] text-center text-white '>
        <div className='w-full h-full '>
          <Image src={Bintang} alt="" style={{
            position: 'absolute',
            width: '5rem',
            top: '0%',
            right: '50%'
          }} />
        </div>
        <p className='md:text-[25px] text-[15px] mt-1 font-light '>Welcome To</p>
        <h1 className='md:text-[5rem] text-[3rem] font-semibold'>Learn Ls</h1>
      </div>
      <Hero />
    </main>
  )
}
