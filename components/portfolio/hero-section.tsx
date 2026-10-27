import { ArrowRight, Download, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { profile } from '@/lib/portfolio-data'
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './brand-icons'
import { SqlCard } from './sql-card'
import { TypingRole } from './typing-role'

export function HeroSection() {
  const socials = [
    { label: 'GitHub', href: profile.github.href, icon: Github },
    { label: 'LinkedIn', href: profile.linkedin.href, icon: Linkedin },
    { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
  ]

  return (
    <section
      id="beranda"
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-border bg-grid pt-32 pb-20 md:pt-36"
    >
      <div
        className="pointer-events-none absolute -top-40 right-0 size-[36rem] rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            Terbuka untuk peluang kerja
          </span>
          <h1 id="hero-title" className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            {profile.name}
          </h1>
          <TypingRole roles={profile.roles} />
          <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">{profile.summary}</p>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" aria-hidden="true" />
            {profile.location}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/proyek"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Lihat Proyek
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
            >
              <Download className="size-4" aria-hidden="true" />
              Unduh CV
            </a>
          </div>
          <ul className="flex gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4" aria-hidden="true" />
                  <span className="sr-only">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
            <Image
              src={profile.photo || '/placeholder.svg'}
              alt={`Foto ${profile.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"
              aria-hidden="true"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-primary">Data Portfolio</p>
                <p className="font-medium">{'Analyst \u00b7 Engineer \u00b7 Builder'}</p>
              </div>
              <span className="rounded-full border border-border bg-surface/80 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                2026
              </span>
            </figcaption>
          </figure>
          <SqlCard />
        </div>
      </div>
    </section>
  )
}
