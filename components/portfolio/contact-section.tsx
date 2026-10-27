'use client'

import { ArrowUpRight, Check, Copy, Download, FileText, Mail } from 'lucide-react'
import { useState } from 'react'
import { profile } from '@/lib/portfolio-data'
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './brand-icons'

export function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const links = [
    { label: 'LinkedIn', value: profile.linkedin.label, href: profile.linkedin.href, icon: Linkedin },
    { label: 'GitHub', value: profile.github.label, href: profile.github.href, icon: Github },
  ]

  return (
    <section id="kontak" aria-labelledby="kontak-title" className="relative overflow-hidden py-24">
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Kontak</p>
          <h2 id="kontak-title" className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Mari berdiskusi tentang data.
          </h2>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            Saya terbuka untuk posisi Data Analyst, Data Scientist, Data Engineer, maupun kolaborasi proyek data.
          </p>
        </div>

        <ul className="flex flex-col divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card/80">
          <li className="flex items-center gap-4 p-5">
            <IconBox icon={Mail} />
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="text-xs text-muted-foreground">Email</span>
              <a href={`mailto:${profile.email}`} className="truncate font-medium hover:text-primary">
                {profile.email}
              </a>
            </div>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs transition-colors hover:border-primary hover:text-primary"
            >
              {copied ? <Check className="size-3.5" aria-hidden="true" /> : <Copy className="size-3.5" aria-hidden="true" />}
              <span aria-live="polite">{copied ? 'Tersalin' : 'Salin'}</span>
            </button>
          </li>
          {links.map(({ label, value, href, icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 transition-colors hover:bg-accent"
              >
                <IconBox icon={icon} />
                <div className="flex flex-1 flex-col">
                  <span className="text-xs text-muted-foreground">{label}</span>
                  <span className="font-medium">{value}</span>
                </div>
                <ArrowUpRight
                  className="size-4 text-muted-foreground transition-colors group-hover:text-primary"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.cv}
              download
              className="group flex items-center gap-4 p-5 transition-colors hover:bg-accent"
            >
              <IconBox icon={FileText} />
              <div className="flex flex-1 flex-col">
                <span className="text-xs text-muted-foreground">Curriculum Vitae</span>
                <span className="font-medium">Unduh CV (PDF)</span>
              </div>
              <Download
                className="size-4 text-muted-foreground transition-colors group-hover:text-primary"
                aria-hidden="true"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

function IconBox({ icon: Icon }: { icon: React.ComponentType<{ className?: string }> }) {
  return (
    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
      <Icon className="size-4" />
    </span>
  )
}
