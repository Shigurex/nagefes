import { ClipboardType, Phone } from 'lucide-react'
import Link from 'next/link'
import { MenuTitle } from '../common/menuTitle'

export const Contact = () => {
  return (
    <div className='flex flex-col px-3 py-10 gap-5' id='contact'>
      <MenuTitle>Contact</MenuTitle>
      <div className='flex flex-col gap-4'>
        <div className='justify-center w-80 bg-white border-2 border-black rounded-lg p-3 font-semibold text-black flex items-center space-x-2 shadow-md'>
          <span className='text-sm md:text-base'>協賛・取材のお問い合わせ</span>
        </div>
        <div className='flex flex-col gap-3'>
          <Link href='https://nagerufes.com/' target='_blank'>
            <div className='flex items-center gap-2 text-sm md:text-base'>
              <ClipboardType />
              <span>協賛・取材用お問い合わせフォーム</span>
            </div>
          </Link>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center gap-2 text-sm md:text-base'>
            <Phone />
            <span>
              000-0000-0000（担当者 なげるフェスティバル実行委員長 中島）
            </span>
          </div>
        </div>
        <div className='justify-center w-80 bg-white border-2 border-black rounded-lg p-3 font-semibold text-black flex items-center space-x-2 shadow-md'>
          <span className='text-sm md:text-base'>その他のお問い合わせ</span>
        </div>
        <div className='flex flex-col gap-3'>
          <Link href='https://nagerufes.com/' target='_blank'>
            <div className='flex items-center gap-2 text-sm md:text-base'>
              <ClipboardType />
              <span>お問い合わせフォーム</span>
            </div>
          </Link>
        </div>
        <div className='justify-center w-80 bg-white border-2 border-black rounded-lg p-3 font-semibold text-black flex items-center space-x-2 shadow-md'>
          <span className='text-sm md:text-base'>大会運営責任者</span>
        </div>
      </div>
    </div>
  )
}
