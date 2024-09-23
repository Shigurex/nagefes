import Image from 'next/image'
import { ProgramCard } from '../program/ProgramCard'
import { Button } from '../ui/button'

export default function TopPage() {
  return (
    <div className='relative'>
      <Image alt='image' src='/background.png' width={5000} height={250} />
      <div className='absolute top-[22%] w-full flex justify-center'>
        <Button className='text-md p-4'>イベント申し込みはこちら！</Button>
      </div>
      {/* <div className='absolute top-[24%] bottom-0 w-full'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
        </div>
      </div> */}
    </div>
  )
}
