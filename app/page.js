import Image from 'next/image'
import Link from 'next/link'

import { Announcement } from '@/components/announcement'
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'
import { Button } from '@/components/ui/button'

const navItemsStyle = 'text-stone-600 text-sm'

export default function Home() {
  return (
    <>
      {/* navigation menu */}
      <nav className="fixed top-0 left-0 w-full h-14 bg-stone/80 backdrop-blur-md flex items-center gap-8 px-4 z-50 border-b border-stone-100">
        <div className="flex items-center ml-2 gap-2">
          <Image
            src="/letter-r.png"
            width={25}
            height={25}
            alt="alphabet denotion"
          />
          <h4 className="scroll-m-20 text-md font-semibold tracking-tight">
            ricky/portfolio
          </h4>
        </div>
        <ul className="flex gap-8">
          <li>
            <Link href="/" className={navItemsStyle}>
              Resume
            </Link>
          </li>
          <li>
            <Link href="/" className={navItemsStyle}>
              Worklog
            </Link>
          </li>
          <li>
            <Link href="/" className={navItemsStyle}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/" className={navItemsStyle}>
              ShadCN
            </Link>
          </li>
        </ul>
      </nav>

      {/* main */}
      <div className="pt-14 ml-6">
        <PageHeader>
          <Announcement />
          <PageHeaderHeading>Hello there, I'm Ricky</PageHeaderHeading>
          <PageHeaderDescription>
            A full-stack developer and a tech enthusiast. I love building things
            that make a difference. Feel free to explore my work and get in
            touch :)
          </PageHeaderDescription>
          <PageActions>
            <Button asChild size="sm">
              <Link href="/">Leave a Message</Link>
            </Button>
            <Button asChild size="sm" variant="ghost">
              <Link href="/">Change View</Link>
            </Button>
          </PageActions>
        </PageHeader>
      </div>
    </>
  )
}
