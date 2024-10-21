import Image from 'next/image'
import Link from 'next/link'
import { MenuTitle } from '../common/menuTitle'
import { Button } from '../ui/button'

export default function TopPage() {
  return (
    <div
      className="relative bg-[url('/background.png')] bg-cover h-auto aspect-[2/3] sm:aspect-[8/7]"
      id='top'
    >
      <div className='absolute bottom-0 w-full flex flex-col gap-2 md:gap-4 justify-center p-4 md:p-6'>
        <Link href='/#program' className='flex justify-center'>
          <div className='justify-center w-72 md:w-96 bg-white border-2 rounded-lg p-3 font-semibold text-black flex items-center shadow-md'>
            <span className='text-sm md:text-base'>
              イベント申し込みはこちらから
            </span>
          </div>
        </Link>
        <div className='flex justify-center'>
          <div className='justify-center items-start p-3 font-semibold text-black flex gap-3 md:gap-5'>
            <div className='flex flex-col gap-2'>
              <span className='text-white text-sm md:text-2xl text-center'>
                「投げる」の楽しさと魅力を体感できるイベント「なげるフェスティバル」を開催します！
              </span>
              <span className='text-white whitespace-pre-wrap text-xs md:text-base lg:text-lg text-center'>
                {
                  '日本で愛され続けている野球、最古のオリンピック種目で日本人選手が世界で活躍中の陸上競技やり投などを筆頭に、投てき業界が現在盛り上がっています。\nなげるフェスティバルは\n子どもにとっては「投げる」ことの楽しさや新しく挑戦できる競技を「知る」キッカケを\n大人にとっては「投げる」ことの楽しさを思い出し、また「関わる」キッカケを\n生み出せるような場をつくります。'
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
