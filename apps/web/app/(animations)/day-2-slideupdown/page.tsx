'use client'

import { gsap } from 'gsap'
import { useLayoutEffect } from 'react'
import { cn } from 'ui/lib/utils/cn'

export default function Day2SlideUpDownPage() {
  useLayoutEffect(() => {
    gsap.registerEffect({
      name: 'slide',
      effect: (
        targets: gsap.TweenTarget,
        config: { opacity: number; y: number; duration: number },
      ) => {
        return gsap.to(targets, {
          ...config,
          opacity: config.opacity,
          y: config.y,
          duration: config.duration,
        })
      },
      defaults: { opacity: 1, y: -100, duration: 1 },
      extendTimeline: true,
    })

    let tl = gsap.timeline()
    tl.slide('.box', {
      stagger: {
        amount: 2,
      },
    })
  }, [])

  return (
    <div className="flex flex-col items-center w-full h-full gap-8 mt-40">
      <h2 className="text-4xl font-bold">Slide Up &amp; Down</h2>

      <div className="flex items-center justify-center gap-8 mt-[100px]">
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
