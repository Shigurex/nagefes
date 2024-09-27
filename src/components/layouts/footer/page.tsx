import { InstagramPost } from '@/components/common/instagramPost'
import { instagramPostItems } from '@/constant/instagramPosts'
import { SideMenu } from '../menu/page'

export const Footer = () => {
  return (
    <div className='container mx-auto flex flex-col gap-5 px-3 py-10'>
      <div className='grid grid-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {instagramPostItems.map(post => (
          <InstagramPost key={post.path} url={post.path} />
        ))}
      </div>
      <div className='flex'>
        <SideMenu />
      </div>
    </div>
  )
}
