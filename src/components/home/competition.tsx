import { FileText } from 'lucide-react'
import Link from 'next/link'
import { MenuTitle } from '../common/menuTitle'

export const Competition = () => {
  return (
    <div className='flex flex-col px-3 py-10 gap-5' id='contact'>
      <MenuTitle>COMPETITION</MenuTitle>
      <div className='flex flex-col gap-4'>
        <div className='justify-center w-64 md:w-80 bg-white border-2 border-black rounded-lg p-3 font-semibold text-black flex items-center space-x-2 shadow-md'>
          <span className='text-sm md:text-base'>競技会注意事項</span>
        </div>
        <div className='flex flex-col gap-3'>
          <Link
            href='https://drive.google.com/file/d/1RpPoRrMod-butm3G2MkaL3yrI0cSdBHP/view?usp=sharing'
            target='_blank'
          >
            <div className='flex items-center gap-2 text-sm md:text-base'>
              <FileText />
              <span>大会注意事項</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}