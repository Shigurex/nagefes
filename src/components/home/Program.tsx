import Image from 'next/image'
import { ProgramCard } from '../program/ProgramCard'

export const Program = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      <ProgramCard />
      <ProgramCard />
      <ProgramCard />
    </div>
  )
}
