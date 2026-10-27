'use client'

import { FileText, Image as ImageIcon, X } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { type GalleryItem, galleryItems } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

type GalleryFilter = 'semua' | GalleryItem['type']

const filters: { id: GalleryFilter; label: string }[] = [
  { id: 'semua', label: 'Semua' },
  { id: 'dokumentasi', label: 'Dokumentasi' },
  { id: 'sertifikat', label: 'Sertifikat' },
]

export function GallerySection() {
  const [filter, setFilter] = useState<GalleryFilter>('semua')
  const [selected, setSelected] = useState<GalleryItem | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const visibleItems =
    filter === 'semua' ? galleryItems : galleryItems.filter((item) => item.type === filter)

  const openItem = (item: GalleryItem) => {
    setSelected(item)
    dialogRef.current?.showModal()
  }

  return (
    <section id="galeri" aria-labelledby="galeri-title" className="border-b border-border bg-surface/40 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <SectionHeading
          id="galeri-title"
          eyebrow="Galeri"
          title="Dokumentasi dan sertifikat"
          description="Kumpulan momen dari pengalaman dan kegiatan saya, beserta sertifikat yang telah diperoleh."
        />

        <div className="flex flex-wrap gap-2" aria-label="Filter galeri">
          {filters.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              aria-pressed={filter === id}
              onClick={() => setFilter(id)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm transition-colors',
                filter === id
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card/60 text-muted-foreground hover:text-foreground',
              )}
            >
              {label}
              <span className="ml-2 font-mono text-xs opacity-70">
                {id === 'semua' ? galleryItems.length : galleryItems.filter((item) => item.type === id).length}
              </span>
            </button>
          ))}
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => openItem(item)}
                aria-label={`Lihat ${item.title}`}
                className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-left transition-colors hover:border-primary/60"
              >
                <span className="relative block aspect-[4/3] w-full overflow-hidden bg-surface">
                  {item.format === 'image' ? (
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                      className={cn(
                        'transition-transform duration-300 group-hover:scale-[1.03]',
                        item.type === 'sertifikat' ? 'object-contain p-3' : 'object-cover',
                      )}
                    />
                  ) : (
                    <span className="flex h-full flex-col items-center justify-center gap-3 text-primary">
                      <FileText className="size-12" aria-hidden="true" />
                      <span className="font-mono text-xs uppercase tracking-widest">Dokumen PDF</span>
                    </span>
                  )}
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-card/90 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-foreground backdrop-blur">
                    {item.type === 'sertifikat' ? (
                      <FileText className="size-3" aria-hidden="true" />
                    ) : (
                      <ImageIcon className="size-3" aria-hidden="true" />
                    )}
                    {item.type}
                  </span>
                </span>
                <span className="flex flex-1 flex-col gap-2 p-5">
                  <span className="font-semibold leading-snug group-hover:text-primary">{item.title}</span>
                  <span className="text-sm leading-relaxed text-muted-foreground">{item.description}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="gallery-dialog-title"
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close()
        }}
        className="m-auto w-[min(94vw,56rem)] max-w-none rounded-2xl border border-border bg-card p-0 text-foreground backdrop:bg-primary/55 backdrop:backdrop-blur-sm"
      >
        {selected ? (
          <div className="flex max-h-[90vh] flex-col">
            <div className="flex items-start justify-between gap-4 border-b border-border p-5">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs uppercase tracking-widest text-primary">
                  {selected.type}
                </span>
                <h3 id="gallery-dialog-title" className="text-lg font-semibold">
                  {selected.title}
                </h3>
                <p className="text-sm text-muted-foreground">{selected.description}</p>
              </div>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                aria-label="Tutup galeri"
                className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border hover:bg-accent"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>
            {selected.format === 'image' ? (
              <div className="relative h-[70vh] w-full bg-surface">
                <Image
                  src={selected.src}
                  alt={selected.title}
                  fill
                  sizes="(min-width: 896px) 896px, 94vw"
                  className="object-contain"
                />
              </div>
            ) : (
              <iframe
                title={selected.title}
                src={selected.src}
                className="h-[70vh] w-full border-0"
              />
            )}
          </div>
        ) : null}
      </dialog>
    </section>
  )
}
