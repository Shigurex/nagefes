import Image from 'next/image'
import Link from 'next/link'
import { MenuTitle } from '../common/menuTitle'

export const Support = () => {
  return (
    <div
      className='container mx-auto flex flex-col px-3 py-10 gap-5'
      id='support'
    >
      <MenuTitle>SUPPORT</MenuTitle>
      <div className='w-full'>
        <p className='text-xs md:text-md lg:text-xl font-bold whitespace-pre-wrap text-black'>
          {
            'なげるフェスティバル実行委員会では、協賛・広告掲載にご協力いただける団体・企業様を募集をしております。下記に協賛・広告掲載についての概要を記載いたしますので、協賛・広告掲載いただける団体様は下記のお問い合わせフォームよりお申し込みください。'
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
      <div className='w-full justify-center items-center flex flex-col gap-4'>
        <div className='w-full justify-center items-center flex flex-col gap-2'>
          <span className='text-[#FF534F] text-md lg:text-2xl font-extrabold'>
            オフィシャルパートナー
          </span>
          <div className='grid grid-cols-1 lg:grid-cols-3 w-full bg-white rounded-xl p-3'>
            <div className='w-full flex justify-center items-center lg:col-start-2 h-12 lg:h-20'>
              <Image
                src='/logo/nishi.png'
                alt='Official Partner'
                width={300}
                height={300}
                className='object-contain'
              />
            </div>
          </div>
        </div>
        <div className='w-full justify-center items-center flex flex-col gap-2'>
          <span className='text-[#FF534F] text-md lg:text-2xl font-extrabold'>
            ゴールドパートナー
          </span>
          <div className='grid grid-cols-1 lg:grid-cols-3 w-full bg-white rounded-xl p-3'>
            <div className='w-full flex justify-center items-center lg:col-start-2 h-12 lg:h-20'>
              <Image
                src='/logo/ashikaga.PNG'
                alt='Official Partner'
                width={300}
                height={300}
                className='object-contain'
              />
            </div>
          </div>
        </div>
        <div className='w-full justify-center items-center flex flex-col gap-2'>
          <span className='text-[#FF534F] text-md lg:text-2xl font-extrabold'>
            ゴールドサポーター
          </span>
          <div className='grid grid-cols-1 lg:grid-cols-3 w-full bg-white rounded-xl p-3'>
            <div className='w-full flex justify-center items-center lg:col-start-2 h-12 lg:h-20 text-2xl mg:text-3xl font-extrabold'>
              飯島薫 様
            </div>
          </div>
        </div>
        <div className='w-full justify-center items-center flex flex-col gap-2'>
          <span className='text-[#FF534F] text-md lg:text-2xl font-extrabold'>
            シルバーサポーター
          </span>
          <div className='grid grid-cols-1 lg:grid-cols-3 w-full bg-white rounded-xl p-3'>
            <div className='w-full flex justify-center items-center lg:col-start-2 h-12 lg:h-20 text-2xl mg:text-3xl font-extrabold'>
              匿名希望 様
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
