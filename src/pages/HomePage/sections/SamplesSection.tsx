import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { MOCK_SAMPLES } from '@/data/samples'
import { Image } from '@/components/ui/image';

export default function SamplesSection() {
  return (
    <section id="samples" className="relative w-full py-20 md:py-28 bg-[#0d0304] overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-red-600/5 rounded-full blur-3xl" />
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
              SAMPLE SHOWCASE
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500/50" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-amber-300 mb-6 tracking-wider">
            样片展示
          </h2>
          <p className="text-amber-100/60 text-base max-w-2xl mx-auto">
            覆盖多元品类，以专业制作能力呈现不同风格的精品内容
          </p>
        </motion.div>

        {/* 样片卡片网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {MOCK_SAMPLES.map((sample, i) => (
            <motion.div
              key={sample.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative rounded-xl overflow-hidden border border-amber-500/15 bg-gradient-to-b from-[#1a0608] to-[#0d0304] hover:border-amber-500/40 transition-all duration-500"
            >
              {/* 缩略图 */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={sample.thumbnailUrl}
                  alt={sample.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* 播放按钮 */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="size-14 rounded-full bg-amber-500/90 flex items-center justify-center shadow-lg shadow-amber-500/50">
                    <Play className="size-6 text-[#1a0505] ml-1" fill="currentColor" />
                  </div>
                </div>
                {/* 底部渐变 */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#1a0608] to-transparent" />
              </div>

              {/* 内容区 */}
              <div className="p-5">
                <h3 className="text-lg font-medium text-amber-300 mb-2 group-hover:text-amber-400 transition-colors">
                  {sample.name}
                </h3>
                <p className="text-amber-100/50 text-sm leading-relaxed line-clamp-2">
                  {sample.description}
                </p>
              </div>

              {/* 顶部金色装饰条 */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
