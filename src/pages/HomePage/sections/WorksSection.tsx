import { useState } from 'react'
import { motion } from 'framer-motion'
import { MOCK_WORKS_TOP, MOCK_WORKS_BOTTOM, type IWork } from '@/data/works'
import { Badge } from '@/components/ui/badge'
import { Image } from '@/components/ui/image';

function PosterCard({ work }: { work: IWork }) {
  return (
    <div className="group relative shrink-0 w-[260px] md:w-[280px] mx-3 md:mx-4">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-amber-500/20 group-hover:border-amber-500/50 transition-all duration-500">
        <Image
          src={work.imageUrl}
          alt={work.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* 底部渐变蒙层 */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

        {/* 作品信息 */}
        <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
          <h3 className="text-amber-200 font-medium text-base md:text-lg mb-2 truncate">
            {work.title}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {work.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-[10px] px-2 py-0 h-5 border-amber-500/40 text-amber-300/90 bg-black/30 backdrop-blur-sm"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* hover 金色光效 */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </div>
  )
}

function InfiniteScrollRow({
  works,
  direction,
}: {
  works: IWork[]
  direction: 'left' | 'right'
}) {
  const [isPaused, setIsPaused] = useState(false)
  const duplicated = [...works, ...works]

  return (
    <div
      className="relative overflow-hidden py-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 两侧渐变遮罩 */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-[#0d0304] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-[#0d0304] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          duration: 40,
          ease: 'linear',
          repeat: Infinity,
          ...(isPaused ? { animationPlayState: 'paused' } : {}),
        }}
        style={{ width: 'max-content' }}
      >
        {duplicated.map((work, idx) => (
          <PosterCard key={`${work.id}-${idx}`} work={work} />
        ))}
      </motion.div>
    </div>
  )
}

export default function WorksSection() {
  return (
    <section
      id="works"
      className="relative w-full py-20 md:py-28 bg-gradient-to-b from-[#0d0304] via-[#140507] to-[#0d0304] overflow-hidden"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-full mx-auto px-0">
        {/* 标题区 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 md:mb-16 px-4"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-500/50" />
            <span className="text-amber-500/80 text-xs tracking-[0.3em] uppercase">
              REPRESENTATIVE WORKS
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500/50" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-amber-300 tracking-wider">
            代表作品
          </h2>
        </motion.div>

        {/* 上行 - 向左滚动 */}
        <InfiniteScrollRow works={MOCK_WORKS_TOP} direction="left" />

        {/* 下行 - 向右滚动 */}
        <div className="mt-4 md:mt-6">
          <InfiniteScrollRow works={MOCK_WORKS_BOTTOM} direction="right" />
        </div>
      </div>
    </section>
  )
}
