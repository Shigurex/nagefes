import { ProgramCard } from '@/components/program/programCard'
import { MenuTitle } from '../common/menuTitle'

export const Program = () => {
  return (
    <>
      <MenuTitle />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <ProgramCard />
        <ProgramCard />
        <ProgramCard />
      </div>
    </>
  )
}
