import Link from 'next/link'

const links = [
  { href: '/day-1-fadeinout', label: 'Day 1 | Fade In/Out' },
  { href: '/day-2-slideupdown', label: 'Day 2 | Slide Up/Down' },
]

export default function Home() {
  return (
    <main className="flex w-full min-h-screen gap-8 p-24 bg-gray-100">
      {links.map(({ href, label }) => (
        <Link
          href={href}
          className="px-8 py-4 duration-300 border shadow-2xl rounded-xl border-border h-fit hover:bg-gray-50"
        >
          {label}
        </Link>
      ))}
    </main>
  )
}
