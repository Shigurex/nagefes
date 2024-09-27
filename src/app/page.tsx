import { Access } from '@/components/home/access'
import { Contact } from '@/components/home/contact'
import { Information } from '@/components/home/information'
import { News } from '@/components/home/news'
import { Program } from '@/components/home/programs'
import { Support } from '@/components/home/support'
import TopPage from '@/components/home/toppage'
import { SideMenu } from '@/components/layouts/menu/page'

export default function Home() {
  return (
    <>
      <TopPage />
      <News />
      <Program />
      <Support />
      <div className="relative bg-[url('/background.png')] bg-cover h-[300px]" />
      <div className='flex container mx-auto gap-4'>
        <div className='hidden md:block md:flex-init pt-5'>
          <SideMenu />
        </div>
        <div className='flex flex-col flex-auto'>
          <Access />
          <Information />
          <Contact />
        </div>
      </div>
    </>
  )
}
