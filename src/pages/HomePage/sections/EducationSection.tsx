import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Users2, BookOpen, TrendingUp } from 'lucide-react'
import { MOCK_EDUCATION } from '@/data/education'

const highlightIcons = [GraduationCap, BookOpen, TrendingUp]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            const duration = 1500
            const start = performance.now()
            const animate = (now: number) => {
              const progress = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setDisplay(Math.floor(eased * value))
              if (progress < 1) requestAnimationFrame(animate)
              else setDisplay(value)
            }
            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  )
}

export default function EducationSection() {
  const edu = MOCK_EDUCATION[0]

  return (
    <section id="education" className="relative w-full py-20 md:py-28 bg-[#0d0304] overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-red-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        {/* 标题区 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-500/50" />
            <span className="text-amber-500/80 text-xs tracking-[0.3em] uppercase">
              EDUCATION & TRAINING
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500/50" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-amber-300 mb-6 tracking-wider">
            {edu.title}
          </h2>
          <p className="text-amber-100/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            {edu.description}
          </p>
        </motion.div>

        {/* 三大亮点 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {edu.highlights.map((item, i) => {
            const Icon = highlightIcons[i] ?? GraduationCap
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative p-8 rounded-xl border border-amber-500/15 bg-gradient-to-br from-[#1a0608]/80 to-transparent hover:border-amber-500/35 transition-all duration-300"
              >
                <div className="size-12 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center mb-5 group-hover:from-amber-500/30 transition-all">
                  <Icon className="size-6 text-amber-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-medium text-amber-300 mb-2">{item.title}</h3>
                <p className="text-amber-100/60 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* 数据卡片 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl md:text-3xl text-amber-400 mb-3">培训成果</h3>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {edu.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-6 md:p-8 rounded-xl text-center bg-gradient-to-b from-amber-500/10 to-transparent border border-amber-500/20"
              >
                <div className="size-10 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-500/20 to-red-500/10 flex items-center justify-center">
                  <Users2 className="size-5 text-amber-400" strokeWidth={1.5} />
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-amber-300 to-amber-600 bg-clip-text text-transparent font-serif mb-2">
                  <AnimatedNumber value={stat.value} suffix={stat.unit} />
                </div>
                <div className="text-amber-100/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
