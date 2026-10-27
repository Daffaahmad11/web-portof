'use client'

import { ArrowUpRight, BrainCircuit, Code2, Database, LineChart, Search, X } from 'lucide-react'
import { useMemo, useRef, useState } from 'react'
import { type Project, type ProjectCategory, projectCategories, projects } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { GithubIcon } from './brand-icons'
import { SectionHeading } from './section-heading'

const categoryIcons: Record<ProjectCategory, React.ComponentType<{ className?: string }>> = {
  'Data Analyst': LineChart,
  'Data Engineer': Database,
  'Machine Learning': BrainCircuit,
  Pemrograman: Code2,
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectCategory | 'Semua'>('Semua')
  const [query, setQuery] = useState('')
  const [active, setActive] = useState<Project | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects.filter((p) => {
      const matchesFilter = filter === 'Semua' || p.category === filter
      const matchesQuery =
        !q || [p.title, p.course, ...p.tools].some((field) => field.toLowerCase().includes(q))
      return matchesFilter && matchesQuery
    })
  }, [filter, query])

  const openProject = (project: Project) => {
    setActive(project)
    dialogRef.current?.showModal()
  }

  const filters: { label: ProjectCategory | 'Semua'; count: number }[] = [
    { label: 'Semua', count: projects.length },
    ...projectCategories.map((c) => ({ label: c, count: projects.filter((p) => p.category === c).length })),
  ]

  return (
    <section id="proyek" aria-labelledby="proyek-title" className="border-b border-border py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <SectionHeading
          id="proyek-title"
          eyebrow="Proyek"
          title="Karya analisis, rekayasa data & machine learning"
          description="Klik sebuah proyek untuk melihat detailnya. Gunakan filter atau pencarian untuk menelusuri."
        />

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border border-border bg-surface/60 p-1">
            {filters.map(({ label, count }) => (
              <button
                key={label}
                type="button"
                aria-pressed={filter === label}
                onClick={() => setFilter(label)}
                className={cn(
                  'flex shrink-0 items-center gap-1.5 rounded-full px-4 py-1.5 text-sm transition-colors',
                  filter === label
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {label}
                <span className="font-mono text-[10px] opacity-70">{count}</span>
              </button>
            ))}
          </div>
          <label className="relative block lg:w-72">
            <span className="sr-only">Cari proyek</span>
            <Search
              className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari: Spark, SVM, Tableau..."
              className="w-full rounded-full border border-input bg-surface/60 py-2 pr-4 pl-10 text-sm placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none"
            />
          </label>
        </div>

        {filtered.length > 0 ? (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => {
              const Icon = categoryIcons[project.category]
              return (
                <li key={project.id}>
                  <button
                    type="button"
                    onClick={() => openProject(project)}
                    className="group flex h-full w-full flex-col gap-4 rounded-2xl border border-border bg-card/70 p-5 text-left transition-colors hover:border-primary/60 hover:bg-card"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-primary">
                        <Icon className="size-4" />
                      </span>
                      <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                        <GithubIcon className="size-3.5" />
                        {project.year}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                      <span className="font-mono text-xs text-primary">{project.course}</span>
                      <span className="text-pretty font-semibold leading-snug group-hover:text-primary">
                        {project.title}
                      </span>
                    </div>
                    <ToolList tools={project.tools} />
                  </button>
                </li>
              )
            })}
          </ul>
        ) : (
          <p className="rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
            Tidak ada proyek yang cocok dengan pencarian.
          </p>
        )}
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="project-dialog-title"
        onClose={() => setActive(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialogRef.current?.close()
        }}
        className="m-auto w-[min(92vw,36rem)] rounded-2xl border border-border bg-card p-0 text-foreground backdrop:bg-primary/55 backdrop:backdrop-blur-sm"
      >
        {active ? (
          <div className="flex flex-col gap-5 p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs text-primary">
                  {active.course} {'\u00b7'} {active.year}
                </span>
                <h3 id="project-dialog-title" className="text-balance text-xl font-semibold">
                  {active.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border hover:bg-accent"
              >
                <X className="size-4" aria-hidden="true" />
                <span className="sr-only">Tutup</span>
              </button>
            </div>
            <span className="w-fit rounded-full bg-accent px-3 py-1 text-xs text-accent-foreground">
              {active.category}
            </span>
            <p className="leading-relaxed text-muted-foreground">{active.description}</p>
            <ToolList tools={active.tools} />
            <a
              href={active.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <GithubIcon className="size-4" />
              Lihat di GitHub
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        ) : null}
      </dialog>
    </section>
  )
}

function ToolList({ tools }: { tools: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Tools">
      {tools.map((tool) => (
        <li key={tool} className="rounded-md bg-secondary px-2 py-1 font-mono text-xs text-muted-foreground">
          {tool}
        </li>
      ))}
    </ul>
  )
}
