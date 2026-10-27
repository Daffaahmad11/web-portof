'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems, profile } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [pathname])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className="h-0.5 origin-left bg-primary transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <div className="mx-auto mt-3 max-w-5xl px-4">
        <nav
          aria-label="Navigasi utama"
          className="flex items-center justify-between gap-4 rounded-full border border-border bg-surface/85 px-3 py-2 backdrop-blur-md"
        >
          <Link href="/" className="flex items-center gap-2 rounded-full pr-2">
            <span className="flex size-8 items-center justify-center rounded-full bg-primary font-mono text-xs font-semibold text-primary-foreground">
              {profile.initials}
            </span>
            <span className="font-mono text-sm font-medium">
              {profile.shortName}
              <span className="text-primary">.data</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? 'page' : undefined}
                  className={cn(
                    'rounded-full px-4 py-1.5 text-sm transition-colors',
                    pathname === item.href
                      ? 'bg-accent text-primary'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/kontak"
              className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
            >
              Hubungi Saya
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="flex size-9 items-center justify-center rounded-full border border-border md:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
              <span className="sr-only">{open ? 'Tutup menu' : 'Buka menu'}</span>
            </button>
          </div>
        </nav>

        {open ? (
          <ul
            id="mobile-menu"
            className="mt-2 flex flex-col gap-1 rounded-2xl border border-border bg-surface/95 p-2 backdrop-blur-md md:hidden"
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={cn(
                    'block rounded-xl px-4 py-2.5 text-sm',
                    pathname === item.href ? 'bg-accent text-primary' : 'text-muted-foreground',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </header>
  )
}
