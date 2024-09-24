import { News } from '@/components/home/news'
import { Program } from '@/components/home/programs'
import TopPage from '@/components/home/toppage'

export default function Home() {
  return (
    <>
      <TopPage />
      <News />
      <Program />
    </>
  )
}
