import type { Program } from '@/constant/program'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'

type Props = {
  program: Program
}

export const ProgramCard = ({ program }: Props) => {
  return (
    <Card className='w-full overflow-hidden flex flex-col'>
      <CardHeader className='p-0 overflow-hidden relative aspect-[16/9]'>
        <Image
          src={program.icon}
          alt='Background Image'
          width={1920}
          height={1080}
          className='w-full h-full object-cover'
        />
        {!program.isFree ? (
          <div className='absolute bottom-3 right-3 bg-orange-600 rounded-full h-16 w-16 text-white flex items-center justify-center text-lg'>
            有料
          </div>
        ) : (
          <div className='absolute bottom-3 right-3 bg-green-600 rounded-full h-16 w-16 text-white flex items-center justify-center text-lg'>
            無料
          </div>
        )}
      </CardHeader>
      <CardContent className='p-4 text-center flex-grow'>
        <CardTitle className='text-2xl font-bold mb-2 whitespace-pre-wrap'>
          {program.name}
        </CardTitle>
        <p className='text-sm text-muted-foreground whitespace-pre-wrap'>
          対象：{program.target}
        </p>
        <p className='text-sm text-muted-foreground whitespace-pre-wrap'>
          {program.detail}
        </p>
      </CardContent>
      <CardFooter>
        {/* TODO: 開始時に差し変え */}
        <div className='w-full cursor-not-allowed'>
          <Button className='w-full' disabled={true}>
            お申し込みはこちら（11/3開始予定）
          </Button>
        </div>
        {/* <Link className='w-full' href={program.path} target='_blank'>
          <Button className='w-full'>お申し込みはこちら</Button>
        </Link> */}
      </CardFooter>
    </Card>
  )
}
