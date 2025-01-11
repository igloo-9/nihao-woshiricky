'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
      <main className="pt-14">
        <section className="min-h-screen bg-stone/80 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold mb-4">
            Scroll Down to See the Blur Effect
          </h1>
          <p className="max-w-xl text-center">
            By applying <code>bg-white/80</code> and{' '}
            <code>backdrop-blur-md</code>, the navigation menu will appear
            partially transparent with a Gaussian blur behind it.
          </p>
        </section>
        <section className="min-h-screen bg-gray-100 flex items-center justify-center">
          <p className="text-xl">Keep scrolling...</p>
        </section>
      </main>
    </>
  )
}
