"use client"

import { useState, useEffect, useCallback, type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export interface CardData {
  id: string
  title: string
  description: string
  icon?: ReactNode
  gradient?: string
}

export interface CardStackProps {
  cards?: CardData[]
  className?: string
  autoPlayInterval?: number
}

const techyGradients = [
  "from-violet-600 via-purple-600 to-indigo-600",
  "from-cyan-500 via-blue-600 to-violet-600",
  "from-indigo-600 via-violet-600 to-fuchsia-600",
  "from-emerald-500 via-teal-600 to-cyan-600",
  "from-purple-600 via-pink-600 to-rose-500",
  "from-blue-600 via-indigo-600 to-purple-600",
  "from-fuchsia-600 via-violet-600 to-indigo-600",
  "from-teal-500 via-emerald-600 to-green-600",
]

export function CardStack({
  cards = [],
  className,
  autoPlayInterval = 2500,
}: CardStackProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const cycleCards = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % cards.length)
  }, [cards.length])

  useEffect(() => {
    if (!cards.length || isPaused) return
    const interval = setInterval(cycleCards, autoPlayInterval)
    return () => clearInterval(interval)
  }, [cards.length, isPaused, autoPlayInterval, cycleCards])

  if (!cards || cards.length === 0) return null

  const getVisibleCards = () => {
    const visible = []
    for (let i = 0; i < Math.min(5, cards.length); i++) {
      const index = (activeIndex + i) % cards.length
      visible.push({
        ...cards[index],
        stackPosition: i,
        gradient: cards[index].gradient || techyGradients[index % techyGradients.length],
      })
    }
    return visible
  }

  const visibleCards = getVisibleCards()

  return (
    <div
      className={cn("relative flex items-center justify-center w-full", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-[320px] sm:h-[400px] md:h-[480px] lg:h-150 w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[400px] mt-10 sm:mt-16 lg:mt-20">
        <AnimatePresence mode="popLayout">
          {visibleCards.map((card) => {
            const isTop = card.stackPosition === 0
            const stackY = card.stackPosition * 8
            const stackX = card.stackPosition * 3
            const rotation = card.stackPosition * 1.5
            const scale = 1 - card.stackPosition * 0.04
            const opacity = 1 - card.stackPosition * 0.15

            return (
              <motion.div
                key={card.id}
                layout
                initial={{
                  y: stackY,
                  x: stackX,
                  scale: scale,
                  rotateZ: rotation,
                  opacity: opacity,
                  zIndex: 10 - card.stackPosition,
                }}
                animate={{
                  y: stackY,
                  x: stackX,
                  scale: scale,
                  rotateZ: rotation,
                  opacity: opacity,
                  zIndex: 10 - card.stackPosition,
                }}
                exit={{
                  y: [0, -30, 20, 250],
                  x: [0, -80, -50, 30],
                  rotateZ: [0, -20, -12, 15],
                  scale: [1, 1.05, 0.95, 0.7],
                  opacity: [1, 1, 0.7, 0],
                  transition: {
                    duration: 0.9,
                    times: [0, 0.25, 0.55, 1],
                    ease: [0.22, 0.1, 0.36, 1],
                  },
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 35,
                  mass: 0.8,
                }}
                className={cn(
                  "absolute left-1/2 -translate-x-1/2",
                  "w-[260px] h-[280px] sm:w-[320px] sm:h-[360px] md:w-[380px] md:h-[420px] lg:w-[400px] lg:h-[480px]",
                  "rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer",
                  isTop && "shadow-[0_20px_60px_-15px_rgba(139,92,246,0.5)] sm:shadow-[0_30px_100px_-25px_rgba(139,92,246,0.6)]"
                )}
                style={{
                  transformOrigin: "center center",
                  filter: isTop ? "none" : `blur(${card.stackPosition * 0.5}px)`,
                }}
                whileHover={isTop ? {
                  y: -8,
                  scale: 1.02,
                  rotateZ: -1,
                  transition: { duration: 0.3 }
                } : {}}
              >
                <div
                  className={cn(
                    "absolute inset-0 bg-linear-to-br",
                    card.gradient
                  )}
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.15)_0%,transparent_50%)]" />

                <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/10 to-white/0" />

                {isTop && isPaused && (
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 0.5
                    }}
                  />
                )}

                <div className="relative h-full flex flex-col">
                  {card.icon && (
                    <div className="flex justify-center pt-4 sm:pt-6 lg:pt-8">
                      <div className="flex h-16 w-16 sm:h-24 sm:w-24 lg:h-32 lg:w-32 items-center justify-center rounded-2xl sm:rounded-3xl bg-white/20 backdrop-blur-md text-white shadow-2xl border border-white/30 [&>svg]:w-8 [&>svg]:h-8 sm:[&>svg]:w-12 sm:[&>svg]:h-12 lg:[&>svg]:w-16 lg:[&>svg]:h-16">
                        {card.icon}
                      </div>
                    </div>
                  )}

                  <div className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 -mt-2">
                    <h3 className="font-bold text-white text-lg sm:text-xl lg:text-2xl tracking-tight mb-1 sm:mb-2">
                      {card.title}
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-4">
                      {card.description}
                    </p>
                  </div>

                  <div className="px-4 sm:px-6 pb-3 sm:pb-4 flex items-center gap-2 sm:gap-3">
                    <div className="h-1 flex-1 rounded-full bg-white/20 overflow-hidden">
                      <motion.div
                        className="h-full bg-white/70 rounded-full"
                        initial={{ width: "0%" }}
                        animate={isTop && !isPaused ? { width: "100%" } : { width: isPaused ? "100%" : "0%" }}
                        transition={{
                          duration: isTop && !isPaused ? autoPlayInterval / 1000 : 0.3,
                          ease: "linear"
                        }}
                      />
                    </div>
                    <span className="text-white/50 text-[10px] sm:text-xs font-medium">
                      {card.stackPosition + 1}/{cards.length}
                    </span>
                  </div>
                </div>

                <div
                  className={cn(
                    "absolute inset-0 rounded-3xl border transition-all duration-300",
                    isTop && isPaused
                      ? "border-white/40"
                      : "border-white/10"
                  )}
                />
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "rounded-full transition-all duration-300",
              index === activeIndex
                ? "w-8 h-2.5 bg-linear-to-r from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/30"
                : "w-2.5 h-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-violet-400 dark:hover:bg-violet-500"
            )}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
