'use client'

import { gsap } from 'gsap'
import { useLayoutEffect } from 'react'
import { cn } from 'ui/lib/utils/cn'

export default function Day1FadeInOutPage() {
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
    <div className="flex flex-col items-center w-full h-full gap-8 mt-40">
      <h2 className="text-4xl font-bold">Fade In &amp; Out</h2>

      <div className="flex items-center justify-center gap-8">
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
      </div>
    </div>
  )
}
