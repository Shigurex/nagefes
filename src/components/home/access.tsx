import { Footprints, MapPin } from 'lucide-react'
import { MenuTitle } from '../common/menuTitle'

export const Access = () => {
  return (
    <div className='flex flex-col px-3 py-10 gap-5' id='access'>
      <MenuTitle>Access</MenuTitle>
      <div className='flex flex-col xl:flex-row gap-5'>
        {/* <div className='h-[400px] w-full bg-slate-200 rounded-lg' /> */}
        <div className='w-full flex flex-col gap-3'>
          <div className='w-full font-bold text-lg bg-orange-600 px-4 py-1 text-left text-white'>
            公共交通機関
          </div>
          <div className='flex items-center'>
            <div className='w-28 bg-white border-2 border-black rounded-lg p-3 font-semibold text-black flex items-center space-x-2 shadow-md'>
              <span className=''>電車 + 徒歩</span>
            </div>
            <div className='flex flex-col gap-4 flex-1 ml-4 text-gray-800'>
              <div>武蔵小杉駅より徒歩20分</div>
              <div>武蔵中原駅より徒歩15分</div>
              <div>新丸子駅より徒歩15分</div>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='w-28 bg-white border-2 border-black rounded-lg p-3 font-semibold text-black flex items-center space-x-2 shadow-md'>
              <span className=''>電車 + バス</span>
            </div>
            <div className='flex-1 ml-4 text-gray-800'>
              下記リンクより詳細をご覧ください
            </div>
          </div>
          <div className='w-full font-bold text-lg bg-orange-600 px-4 py-1 text-left text-white'>
            車
          </div>
        </div>
        <iframe
          title='map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.611244329999!2d139.64649997577965!3d35.58798603509068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f5a0c8205ac7%3A0xfab20db917711473!2z562J44CF5Yqb6KOc5Yqp56u25oqA5aC0!5e0!3m2!1sja!2sjp!4v1727253634459!5m2!1sja!2sjp'
          width='600'
          height='400'
          style={{ border: 0 }}
          allowFullScreen={true}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          className='border-0 flex-auto md:flex-none'
        />
      </div>
    </div>
  )
}
