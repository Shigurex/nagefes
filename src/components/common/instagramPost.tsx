'use client'
import { InstagramEmbed } from 'react-social-media-embed'

type Props = {
  url: string
}

export const InstagramPost = ({ url }: Props) => {
  return <InstagramEmbed url={url} />
}
