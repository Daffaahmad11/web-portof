'use client'

import { Briefcase, ChevronDown, FileText, GraduationCap, MapPin, Users } from 'lucide-react'
import { useState } from 'react'
import { timeline, timelineTabs } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

const tabIcons = { kerja: Briefcase, organisasi: Users, pendidikan: GraduationCap }

type TabKey = (typeof timelineTabs)[number]['key']

export function ExperienceSection() {
  const [tab, setTab] = useState<TabKey>('kerja')
  const [openId, setOpenId] = useState<string | null>(timeline.kerja[0].id)
  const items = timeline[tab]

  const selectTab = (key: TabKey) => {
    setTab(key)
    setOpenId(timeline[key][0]?.id ?? null)
  }

  return (
    <section id="riwayat" aria-labelledby="riwayat-title" className="border-b border-border bg-surface/40 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <SectionHeading id="riwayat-title" eyebrow="Pengalaman & Riwayat" title="Perjalanan saya sejauh ini" />

        <div className="grid items-start gap-8 lg:grid-cols-[260px_1fr]">
          <div role="tablist" aria-label="Kategori riwayat" className="flex gap-2 overflow-x-auto lg:flex-col">
            {timelineTabs.map(({ key, label }) => {
              const Icon = tabIcons[key]
              const isActive = tab === key
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => selectTab(key)}
                  className={cn(
                    'flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors',
                    isActive
                      ? 'border-primary/60 bg-accent text-foreground'
                      : 'border-border text-muted-foreground hover:text-foreground',
                  )}
                >
                  <Icon className={cn('size-4', isActive && 'text-primary')} />
                  <span className="flex-1">{label}</span>
                  <span className="font-mono text-xs text-muted-foreground">{timeline[key].length}</span>
                </button>
              )
            })}
          </div>

          <ol className="relative flex flex-col gap-4 border-l border-border pl-6">
            {items.map((item) => {
              const isOpen = openId === item.id
              return (
                <li key={item.id} className="relative">
                  <span
                    className={cn(
                      'absolute top-6 -left-[31px] size-3 rounded-full border-2 border-primary',
                      isOpen ? 'bg-primary' : 'bg-background',
                    )}
                    aria-hidden="true"
                  />
                  <div
                    className={cn(
                      'rounded-2xl border p-5 transition-colors',
                      isOpen ? 'border-primary/40 bg-card' : 'border-transparent hover:bg-card/50',
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`detail-${item.id}`}
                      className="flex w-full items-start justify-between gap-4 text-left"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="font-mono text-xs uppercase tracking-widest text-primary">
                          {item.period}
                        </span>
                        <span className="text-lg font-semibold">{item.title}</span>
                        <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                          {item.org}
                          {item.location ? (
                            <span className="inline-flex items-center gap-1">
                              <MapPin className="size-3.5" aria-hidden="true" />
                              {item.location}
                            </span>
                          ) : null}
                        </span>
                      </div>
                      <ChevronDown
                        className={cn(
                          'mt-1 size-4 shrink-0 text-muted-foreground transition-transform',
                          isOpen && 'rotate-180',
                        )}
                        aria-hidden="true"
                      />
                    </button>

                    <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{item.summary}</p>

                    {isOpen ? (
                      <div id={`detail-${item.id}`} className="mt-4 flex flex-col gap-4">
                        {item.points.length > 0 ? (
                          <ul className="flex flex-col gap-2">
                            {item.points.map((point) => (
                              <li key={point} className="flex gap-3 text-sm leading-relaxed">
                                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                        {item.tools ? (
                          <ul className="flex flex-wrap gap-2" aria-label="Tools">
                            {item.tools.map((tool) => (
                              <li
                                key={tool}
                                className="rounded-md bg-secondary px-2 py-1 font-mono text-xs text-muted-foreground"
                              >
                                {tool}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                        {item.certificates ? (
                          <div className="flex flex-wrap gap-2">
                            {item.certificates.map((cert) => (
                              <a
                                key={cert.href}
                                href={cert.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs transition-colors hover:border-primary hover:text-primary"
                              >
                                <FileText className="size-3.5" aria-hidden="true" />
                                {cert.label}
                              </a>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
