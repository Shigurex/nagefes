import { ProgramCard } from '@/components/program/card'
import { MenuTitle } from '../common/menuTitle'

export const Program = () => {
  return (
    <div className='container mx-auto flex flex-col p-3 gap-5'>
      <MenuTitle />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <ProgramCard />
        <ProgramCard />
        <ProgramCard />
      </div>
    </div>
  )
}
