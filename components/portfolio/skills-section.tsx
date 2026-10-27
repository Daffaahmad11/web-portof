'use client'

import { Briefcase, FolderGit2, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { getSkillUsage, skillGroups, softSkills } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

export function SkillsSection() {
  const [selected, setSelected] = useState('Python')
  const usage = getSkillUsage(selected)

  return (
    <section id="keahlian" aria-labelledby="keahlian-title" className="border-b border-border py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <SectionHeading
          id="keahlian-title"
          eyebrow="Keahlian & Teknologi"
          title="Pilih skill, lihat di mana saya menggunakannya"
        />

        <div className="grid items-start gap-6 lg:grid-cols-[1.25fr_1fr]">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface/60">
            {skillGroups.map((group, i) => (
              <div
                key={group.name}
                className={cn(
                  'flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:gap-6',
                  i > 0 && 'border-t border-border',
                )}
              >
                <p className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground sm:w-44">
                  {group.name}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <button
                      key={skill}
                      type="button"
                      aria-pressed={selected === skill}
                      onClick={() => setSelected(skill)}
                      className={cn(
                        'rounded-full border px-3.5 py-1.5 text-sm transition-colors',
                        selected === skill
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border bg-card/60 hover:border-primary/60',
                      )}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6" aria-live="polite">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-2xl font-semibold">{selected}</h3>
              <span className="font-mono text-xs text-muted-foreground">{usage.total} penggunaan</span>
            </div>

            <UsageList icon={Briefcase} title="Pengalaman" items={usage.experiences} />
            <UsageList icon={FolderGit2} title="Proyek" items={usage.projects} />

            <div className="flex flex-col gap-3 border-t border-border pt-5">
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <Sparkles className="size-3.5" aria-hidden="true" />
                Soft skills
              </p>
              <ul className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <li key={skill} className="rounded-full bg-accent px-3 py-1 text-xs text-accent-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function UsageList({
  icon: Icon,
  title,
  items,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  items: string[]
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        <Icon className="size-3.5" />
        {title}
      </p>
      {items.length > 0 ? (
        <ul className="flex flex-col gap-2">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-muted-foreground">Belum ada catatan.</p>
      )}
    </div>
  )
}
