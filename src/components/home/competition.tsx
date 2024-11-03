import { FileText } from 'lucide-react'
import Link from 'next/link'
import { MenuTitle } from '../common/menuTitle'

export const Competition = () => {
  return (
    <div className='flex flex-col px-3 py-10 gap-5' id='competition'>
      <MenuTitle>COMPETITION</MenuTitle>
      <div className='flex flex-col gap-4'>
        <div className='justify-center w-64 md:w-80 bg-white border-2 border-black rounded-lg p-3 font-semibold text-black flex items-center space-x-2 shadow-md'>
          <span className='text-sm md:text-base'>注意事項</span>
        </div>
        <div className='flex flex-col gap-3'>
          <Link
            href='https://drive.google.com/file/d/1mYF7s1zYeoo2r-Y5bbZrswic4yR5mpQH/view?usp=sharing'
            target='_blank'
          >
            <div className='flex items-center gap-2 text-sm md:text-base text-black'>
              <FileText />
              <span>大会注意事項</span>
            </div>
          </Link>
        </div>
        <div className='justify-center w-64 md:w-80 bg-white border-2 border-black rounded-lg p-3 font-semibold text-black flex items-center space-x-2 shadow-md'>
          <span className='text-sm md:text-base'>実施要項</span>
        </div>
        <div className='flex flex-col gap-3'>
          <Link
            href='https://drive.google.com/file/d/1b5_XPFjyjQtQ_3S0qBGp3YM7ueCj6-ng/view?usp=sharing'
            target='_blank'
          >
            <div className='flex items-center gap-2 text-sm md:text-base text-black'>
              <FileText />
              <span>実施要項［なげるゲームス］</span>
            </div>
          </Link>
        </div>
        <div className='justify-center w-64 md:w-80 bg-white border-2 border-black rounded-lg p-3 font-semibold text-black flex items-center space-x-2 shadow-md'>
          <span className='text-sm md:text-base'>番組編成</span>
        </div>
        <div className='flex flex-col gap-3'>
          <Link
            href='https://drive.google.com/file/d/1rWpDvx94UuXQti3IbFFysTG8qbwiul_m/view?usp=sharing'
            target='_blank'
          >
            <div className='flex items-center gap-2 text-sm md:text-base text-black'>
              <FileText />
              <span>番組編成［なげるゲームス］</span>
            </div>
          </Link>
        </div>
        <div className='flex flex-col gap-3'>
          <Link
            href='https://drive.google.com/file/d/1z393mAE-BGgzpfGeCwk9mEv5IUNkCL3U/view?usp=sharing'
            target='_blank'
          >
            <div className='flex items-center gap-2 text-sm md:text-base text-black'>
              <FileText />
              <span>番組編成［投能力タレント発掘プログラム］</span>
            </div>
          </Link>
        </div>
        <div className='justify-center w-64 md:w-80 bg-white border-2 border-black rounded-lg p-3 font-semibold text-black flex items-center space-x-2 shadow-md'>
          <span className='text-sm md:text-base'>結果</span>
        </div>
        <div className='flex flex-col gap-3'>
          <Link
            href='https://drive.google.com/file/d/13kygnfU0a53L2qJOkn3vK9lfj6BHebH_/view?usp=sharing'
            target='_blank'
          >
            <div className='flex items-center gap-2 text-sm md:text-base text-black'>
              <FileText />
              <span>結果［なげるゲームス］（やり投）</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
