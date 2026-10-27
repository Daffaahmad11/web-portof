'use client'

import { useEffect, useState } from 'react'

export function TypingRole({ roles }: { roles: string[] }) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [length, setLength] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    const done = !deleting && length === current.length
    const empty = deleting && length === 0

    const delay = done ? 1600 : deleting ? 40 : 80
    const timer = setTimeout(() => {
      if (done) setDeleting(true)
      else if (empty) {
        setDeleting(false)
        setRoleIndex((i) => (i + 1) % roles.length)
      } else setLength((l) => l + (deleting ? -1 : 1))
    }, delay)
    return () => clearTimeout(timer)
  }, [length, deleting, roleIndex, roles])

  return (
    <p className="font-mono text-lg text-primary" aria-label={roles.join(', ')}>
      <span aria-hidden="true">
        {'> '}
        {roles[roleIndex].slice(0, length)}
        <span className="ml-0.5 inline-block h-5 w-2.5 translate-y-0.5 bg-primary animate-caret" />
      </span>
    </p>
  )
}
