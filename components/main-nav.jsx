'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { siteConfig } from '@/config/site'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

import { ModeSwitcher } from '@/components/mode-switcher'
import { Icons } from '@/components/icons'

export function MainNav() {
  const pathname = usePathname()

  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="pt-4 ml-6 mr-4 flex justify-between">
      <div className="flex">
        <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
          <Icons.logo theme={resolvedTheme} />
          <span className="hidden font-bold lg:inline-block">
            {siteConfig.name}
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm xl:gap-6">
          <Link
            href="/docs"
            className={cn(
              'transition-colors hover:text-foreground/80',
              pathname === '/docs' ? 'text-foreground' : 'text-foreground/80',
            )}
          >
            Docs
          </Link>
          <Link
            href="/docs/components"
            className={cn(
              'transition-colors hover:text-foreground/80',
              pathname?.startsWith('/docs/components') &&
                !pathname?.startsWith('/docs/component/chart')
                ? 'text-foreground'
                : 'text-foreground/80',
            )}
          >
            Components
          </Link>
          <Link
            href="/blocks"
            className={cn(
              'transition-colors hover:text-foreground/80',
              pathname?.startsWith('/blocks')
                ? 'text-foreground'
                : 'text-foreground/80',
            )}
          >
            Blocks
          </Link>
          <Link
            href="/charts"
            className={cn(
              'transition-colors hover:text-foreground/80',
              pathname?.startsWith('/docs/component/chart') ||
                pathname?.startsWith('/charts')
                ? 'text-foreground'
                : 'text-foreground/80',
            )}
          >
            Charts
          </Link>
          <Link
            href="/themes"
            className={cn(
              'transition-colors hover:text-foreground/80',
              pathname?.startsWith('/themes')
                ? 'text-foreground'
                : 'text-foreground/80',
            )}
          >
            Themes
          </Link>
          <Link
            href="/colors"
            className={cn(
              'transition-colors hover:text-foreground/80',
              pathname?.startsWith('/colors')
                ? 'text-foreground'
                : 'text-foreground/80',
            )}
          >
            Colors
          </Link>
        </nav>
      </div>
      <ModeSwitcher />
    </div>
  )
}
