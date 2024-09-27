import { newsItems } from '@/constant/news'
import { MenuTitle } from '../common/menuTitle'

export const News = () => {
  return (
    <div className='container mx-auto flex flex-col px-3 py-10 gap-5' id='news'>
      <MenuTitle>News</MenuTitle>
      {/* <div className='h-[400px] w-full bg-slate-200 rounded-lg' /> */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
        {newsItems.map(news => (
          <div key={news.context} className='p-2'>
            <p className='text-slate-800 font-bold'>
              {news.date.toLocaleDateString()}
            </p>
            <p className='text-slate-800'>{news.context}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
