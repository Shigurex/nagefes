import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function TopPage() {
  return (
    <div
      className="relative bg-[url('/background.png')] bg-cover h-auto aspect-[4/3]"
      id='top'
    >
      <div className='absolute bottom-0 w-full flex flex-col gap-4 justify-center p-6'>
        <Link href='/#program' className='flex justify-center'>
          <div className='justify-center w-96 bg-white border-2 rounded-lg p-3 font-semibold text-black flex items-center space-x-2 shadow-md'>
            <span className='text-sm md:text-base'>
              イベント申し込みはこちらから
            </span>
          </div>
        </Link>
        <div className='flex justify-center'>
          <div className='justify-center p-3 font-semibold text-black flex items-center gap-5'>
            <span className='text-base md:text-lg'>Sponsored By</span>
            <Image
              src='/logo_nishi.svg'
              alt='猫は最高に可愛い'
              width='500'
              height='500'
              className='h-8 w-auto'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
