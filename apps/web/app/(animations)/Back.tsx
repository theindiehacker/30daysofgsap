import Link from 'next/link'

export const Back = () => {
  return (
    <Link
      href={'/'}
      className="px-8 py-4 text-2xl font-medium duration-300 border-2 border-black shadow-2xl rounded-xl h-fit hover:bg-gray-50"
    >
      Back
    </Link>
  )
}
