import { Back } from '@/app/(animations)/Back'
import { ReactNode } from 'react'

const AnimationsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative w-full h-screen p-24 bg-gray-100">
      <div className="flex items-center justify-between">
        <Back />
        <h1 className="text-5xl font-bold">#30DaysOfGSAP</h1>
      </div>
      {children}
    </main>
  )
}

export default AnimationsLayout
