import Link from 'next/link'

import { MainNav } from '@/components/main-nav'
import { Announcement } from '@/components/announcement'
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'
import { Button } from '@/components/ui/button'

export default function IndexPage() {
  return (
    <>
      <MainNav />
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
