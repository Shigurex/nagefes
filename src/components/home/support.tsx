import Link from 'next/link'
import { MenuTitle } from '../common/menuTitle'

export const Support = () => {
  return (
    <div
      className='container mx-auto flex flex-col px-3 py-10 gap-5'
      id='support'
    >
      <MenuTitle>SUPPORT</MenuTitle>
      {/* <div className='flex justify-center'>
        <div className='justify-center w-96 bg-white border-2 border-black rounded-lg p-3 font-semibold text-black flex items-center space-x-2 shadow-md'>
          <span className='text-sm md:text-base'>
            なげるフェスティバル協賛協力のお願い
          </span>
        </div>
      </div> */}
      <div className='w-full'>
        <p className='text-xs md:text-md lg:text-xl font-bold whitespace-pre-wrap text-center'>
          {
            'なげるフェスティバル実行委員会では、協賛・広告掲載にご協力いただける団体・企業様を募集をしております。\n下記に協賛・広告掲載についての概要を記載いたしますので\n協賛・広告掲載いただける団体様は下記のお問い合わせフォームよりお申し込みください。'
          }
        </p>
      </div>
      <Link href='https://forms.gle/AvRAavxm5TS1Zhop9' target='_blank'>
        <div className='flex justify-center'>
          <div className='justify-center w-96 bg-white border-2 border-black rounded-lg p-3 font-semibold text-black flex items-center space-x-2 shadow-md'>
            <span className='text-sm md:text-base'>
              協賛お問い合わせフォーム
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}
