import type { Program } from '@/constant/program'
import clsx from 'clsx'
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
          <div className='absolute bottom-3 right-3 bg-[#FF534F] rounded-full h-16 w-16 text-white flex items-center justify-center text-lg'>
            有料
          </div>
        ) : (
          <div className='absolute bottom-3 right-3 bg-[#44D84F] rounded-full h-16 w-16 text-white flex items-center justify-center text-lg'>
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
        <div className='w-full'>
          {program.status === 'during' ? (
            <Link href={program.path} target='_blank'>
              <Button className='w-full'>
                <span>お申し込みはこちら</span>
              </Button>
            </Link>
          ) : (
            <div className='w-full cursor-not-allowed'>
              <Button className='w-full' disabled>
                {program.status === 'before' && (
                  <span>10/3申し込み開始予定</span>
                )}
                {program.status === 'after' && <span>満員御礼</span>}
              </Button>
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
