import Link from 'next/link'

import { MainNav } from '@/components/main-nav'
import { Announcement } from '@/components/announcement'
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'
import { ExamplesNav } from '@/components/examples-nav'
import { CardsDemo } from '@/components/cards'

import { Button } from '@/components/ui/button'

export default function IndexPage() {
  return (
    <>
      <MainNav />
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Hello there, I'm Ricky</PageHeaderHeading>
        <PageHeaderDescription>
          A full-stack developer and a tech enthusiast. I love building things
          that make a difference. Feel free to explore my work and get in touch
          :)
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
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <div className="container py-4">
            <ExamplesNav className="[&>a:first-child]:text-primary" />
          </div>
        </div>
      </div>
      <div className="container-wrapper pl-6">
        <div className="container py-6">
          <section className="hidden md:block [&>div]:p-0">
            <CardsDemo />
          </section>
        </div>
      </div>
    </>
  )
}
