export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow: string
  title: string
  description?: string
  id: string
}) {
  return (
    <div className="flex max-w-2xl flex-col gap-4">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      <h2 id={id} className="text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
        {title}
      </h2>
      {description ? <p className="text-pretty leading-relaxed text-muted-foreground">{description}</p> : null}
    </div>
  )
}
