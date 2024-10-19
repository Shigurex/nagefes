import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function TopPage() {
  return (
    <div
      className="relative bg-[url('/background.png')] bg-cover h-auto aspect-[1/1] sm:aspect-[4/3]"
      id='top'
    >
      <div className='absolute bottom-0 w-full flex flex-col gap-2 md:gap-4 justify-center p-4 md:p-6'>
        <Link href='/#program' className='flex justify-center'>
          <div className='justify-center w-72 md:w-96 bg-white border-2 rounded-lg p-3 font-semibold text-black flex items-center shadow-md'>
            <span className='text-sm md:text-base'>
              {/* イベント申し込みは10/3に開始します */}
              イベント申し込みはこちらから
            </span>
          </div>
        </Link>
        {/* <div className='flex justify-center'>
          <div className='justify-center p-3 font-semibold text-black flex items-center gap-3 md:gap-5'>
            <span className='text-sm md:text-lg text-center md:pt-1'>協賛</span>
            <Image
              src='/logo/nishi.png'
              alt='Nishi'
              width='500'
              height='500'
              className='h-5 md:h-8 w-auto'
            />
          </div>
        </div> */}
      </div>
    </div>
  )
}
