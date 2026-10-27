'use client'

import { Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { stats } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

const tabs = ['profil.sql', 'pengalaman.sql', 'tools.sql'] as const

const queries: Record<(typeof tabs)[number], { sql: React.ReactNode; headers: string[]; rows: string[][] }> = {
  'profil.sql': {
    sql: (
      <>
        <K>SELECT</K> nama, peran, domisili{'\n'}
        <K>FROM</K> <T>talenta_data</T>
        {'\n'}
        <K>WHERE</K> minat <K>IN</K> (<S>{"'analytics'"}</S>, <S>{"'engineering'"}</S>);
      </>
    ),
    headers: ['nama', 'peran', 'domisili'],
    rows: [['Daffa Ahmad', 'Data Analyst / Scientist / Engineer', 'Jakarta']],
  },
  'pengalaman.sql': {
    sql: (
      <>
        <K>SELECT</K> posisi, instansi{'\n'}
        <K>FROM</K> <T>pengalaman</T>
        {'\n'}
        <K>ORDER BY</K> mulai <K>DESC</K> <K>LIMIT</K> 2;
      </>
    ),
    headers: ['posisi', 'instansi'],
    rows: [
      ['Asisten Praktikum', 'ITERA'],
      ['Data Analyst Intern', 'PT MRT Jakarta'],
    ],
  },
  'tools.sql': {
    sql: (
      <>
        <K>SELECT</K> kategori, tool{'\n'}
        <K>FROM</K> <T>stack</T>
        {'\n'}
        <K>WHERE</K> favorit = <K>TRUE</K>;
      </>
    ),
    headers: ['kategori', 'tool'],
    rows: [
      ['bahasa', 'Python, SQL'],
      ['bi', 'Tableau'],
      ['engineering', 'Apache Spark'],
    ],
  },
}

function K({ children }: { children: React.ReactNode }) {
  return <span className="text-primary">{children}</span>
}
function T({ children }: { children: React.ReactNode }) {
  return <span className="text-sky-300">{children}</span>
}
function S({ children }: { children: React.ReactNode }) {
  return <span className="text-emerald-300">{children}</span>
}

export function SqlCard() {
  const [tab, setTab] = useState<(typeof tabs)[number]>('profil.sql')
  const query = queries[tab]

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface/90">
      <div className="flex items-center justify-between gap-2 border-b border-border px-3 py-2">
        <div className="flex items-center gap-3">
          <div className="hidden gap-1.5 sm:flex" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-primary/40" />
            <span className="size-2.5 rounded-full bg-primary/25" />
            <span className="size-2.5 rounded-full bg-primary/15" />
          </div>
          <div role="tablist" aria-label="Kueri contoh" className="flex gap-1">
            {tabs.map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={tab === t}
                onClick={() => setTab(t)}
                className={cn(
                  'rounded-md px-2 py-1 font-mono text-xs transition-colors',
                  tab === t ? 'bg-accent text-foreground' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 font-mono text-xs font-medium text-primary-foreground">
          <Play className="size-3" aria-hidden="true" />
          Run
        </span>
      </div>

      <pre className="overflow-x-auto px-4 py-4 font-mono text-[13px] leading-relaxed">
        <code>{query.sql}</code>
      </pre>

      <div className="border-t border-border px-4 py-3">
        <p className="mb-2 font-mono text-xs text-muted-foreground">
          {`// ${query.rows.length} row${query.rows.length > 1 ? 's' : ''} returned in 0.02s`}
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full font-mono text-xs">
            <thead className="bg-accent/60 text-muted-foreground">
              <tr>
                {query.headers.map((h) => (
                  <th key={h} scope="col" className="px-3 py-2 text-left font-normal">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {query.rows.map((row) => (
                <tr key={row.join('-')} className="border-t border-border">
                  {row.map((cell) => (
                    <td key={cell} className="px-3 py-2">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <dl className="grid grid-cols-3 border-t border-border">
        {stats.map((stat, i) => (
          <div key={stat.label} className={cn('flex flex-col gap-1 p-4', i > 0 && 'border-l border-border')}>
            <dt className="text-xs leading-snug text-muted-foreground">{stat.label}</dt>
            <dd className="text-2xl font-semibold text-primary">
              <CountUp value={stat.value} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - start) / 1200, 1)
          setDisplay(Math.round(value * (1 - Math.pow(1 - t, 3))))
          if (t < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  return <span ref={ref}>{display}</span>
}
