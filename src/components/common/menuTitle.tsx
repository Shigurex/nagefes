type Props = {
  children: React.ReactNode
}

export const MenuTitle = ({ children }: Props) => {
  return (
    <div className='w-full'>
      <div className='text-white flex items-center border-b-4 border-black'>
        <span className='font-bold text-xl bg-black py-2 w-[200px] text-center'>
          {children}
        </span>
      </div>
    </div>
  )
}
