'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

const examples = [
  {
    name: 'Education',
    href: '/examples/education',
    code: '',
    hidden: false,
  },
  {
    name: 'Projects',
    href: '/examples/projects',
    code: '',
    hidden: false,
  },
  {
    name: 'Music',
    href: '/examples/music',
    code: '',
    hidden: false,
  },
  {
    name: 'Gaming',
    href: '/examples/gaming',
    code: '',
    hidden: false,
  },
]

export function ExamplesNav({ className, ...props }) {
  const pathname = usePathname()

  return (
    <div className="relative ml-6">
      <ScrollArea className="max-w-[600px] lg:max-w-none">
        <div className={cn('flex items-center', className)} {...props}>
          <ExampleLink
            example={{ name: 'General', href: '/', code: '', hidden: false }}
            isActive={pathname === '/'}
          />
          {examples.map((example) => (
            <ExampleLink
              key={example.href}
              example={example}
              isActive={pathname?.startsWith(example.href) ?? false}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  )
}

function ExampleLink({ example, isActive }) {
  if (example.hidden) {
    return null
  }

  return (
    <Link
      href={example.href}
      key={example.href}
      className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary data-[active=true]:bg-muted data-[active=true]:text-primary"
      data-active={isActive}
    >
      {example.name}
    </Link>
  )
}
