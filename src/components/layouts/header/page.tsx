'use client'

import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import { Briefcase, FolderOpen, Home, Mail, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen])

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  }

  const menuItems = [
    { name: 'ホーム', path: '/', icon: <Home className='h-5 w-5' /> },
    { name: 'サービス', path: '/', icon: <Briefcase className='h-5 w-5' /> },
    {
      name: 'プロジェクト',
      path: '/',
      icon: <FolderOpen className='h-5 w-5' />,
    },
    { name: 'お問い合わせ', path: '/', icon: <Mail className='h-5 w-5' /> },
  ]

  return (
    <nav className='relative'>
      <Button
        onClick={toggleMenu}
        variant='outline'
        size='icon'
        className='fixed top-4 right-4 z-50 bg-primary text-primary-foreground'
        aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
      >
        {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            ref={menuRef}
            initial='closed'
            animate='open'
            exit='closed'
            variants={menuVariants}
            className='fixed top-0 right-0 h-full w-72 bg-primary text-primary-foreground p-6 shadow-lg'
          >
            <div className='space-y-3 mt-16'>
              {menuItems.map((item, _) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={toggleMenu}
                  className='flex items-center space-x-4 text-lg hover:text-secondary transition-colors duration-200 group hover:bg-gray-500 p-3 rounded-md'
                >
                  <span className='bg-primary-foreground text-primary p-2 rounded-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-200'>
                    {item.icon}
                  </span>
                  <span className='font-medium'>{item.name}</span>
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </nav>
  )
}
