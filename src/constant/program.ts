export interface Program {
  name: string
  icon: string
  detail: string
  target: string
  isFree: boolean
  path: string
}

export const programItems: Program[] = [
  {
    name: 'やり投',
    icon: '🎉',
    detail: 'なげるフェスティバルは、日本最大級の投げる祭りです。',
    target: '全国の投げる好きな人',
    isFree: true,
    path: '/#nageru',
  },
]
