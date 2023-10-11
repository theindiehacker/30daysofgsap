'use client'

import { gsap } from 'gsap'
import { useLayoutEffect } from 'react'
import { cn } from 'ui/lib/utils/cn'

export default function Home() {
  useLayoutEffect(() => {
    gsap.registerEffect({
      name: 'fade',
      effect: (
        targets: gsap.TweenTarget,
        config: { opacity: number; duration: number },
      ) => {
        return gsap.to(targets, {
          ...config,
          opacity: config.opacity,
          duration: config.duration,
        })
      },
      defaults: { opacity: 1, duration: 1 },
      extendTimeline: true,
    })

    let tl = gsap.timeline()
    tl.fade('.box', {
      yoyo: true,
      repeat: -1,
      stagger: {
        amount: 1,
        duration: 3,
      },
    })
  }, [])

  return (
    <main className="flex min-h-screen items-center justify-center p-24 gap-8 bg-gray-100">
      {[
        'bg-blue-100',
        'bg-blue-200',
        'bg-blue-300',
        'bg-blue-400',
        'bg-blue-500',
        'bg-blue-600',
      ].map((color, index) => (
        <div
          key={color}
          className={cn(
            'opacity-0 box w-24 h-24 rounded-xl p-8 flex items-center justify-center border-4 shadow-xl text-2xl text-white border-white',
            color,
          )}
        >
          {index + 1}
        </div>
      ))}
    </main>
  )
}
