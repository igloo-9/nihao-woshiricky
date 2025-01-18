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
    <nav className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <section>
        <div className="py-4 mx-6 flex justify-between">
          <div className="flex">
            <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
              <Icons.logo theme={resolvedTheme} />
              <span className="hidden font-bold lg:inline-block">
                {siteConfig.name}
              </span>
            </Link>
            <nav className="flex items-center gap-4 text-sm xl:gap-6">
              <Link
                href="/dev"
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname === '/dev'
                    ? 'text-foreground'
                    : 'text-foreground/80',
                )}
              >
                Resume
              </Link>
              <Link
                href="/dev"
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname?.startsWith('/docs/components') &&
                    !pathname?.startsWith('/docs/component/chart')
                    ? 'text-foreground'
                    : 'text-foreground/80',
                )}
              >
                Worklog
              </Link>
              <Link
                href="/dev"
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname?.startsWith('/docs/components') &&
                    !pathname?.startsWith('/docs/component/chart')
                    ? 'text-foreground'
                    : 'text-foreground/80',
                )}
              >
                Codeframes
              </Link>
              <Link
                href="/dev"
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname?.startsWith('/blocks')
                    ? 'text-foreground'
                    : 'text-foreground/80',
                )}
              >
                Blog
              </Link>
              <Link
                href="/dev"
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname?.startsWith('/blocks')
                    ? 'text-foreground'
                    : 'text-foreground/80',
                )}
              >
                Yearlist
              </Link>
            </nav>
          </div>
          <ModeSwitcher />
        </div>
      </section>
    </nav>
  )
}
