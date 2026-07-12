import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { MOCK_ABOUT_INTRO, MOCK_ABOUT_OFFICES } from '@/data/about'
import { Image } from '@/components/ui/image';

const LOCATIONS = ['重庆', '香港', '马来西亚', '美国']

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-20 md:py-28 bg-gradient-to-b from-[#0d0304] via-[#140507] to-[#0d0304] overflow-hidden"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-3xl" />
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
              ABOUT US
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500/50" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-amber-300 mb-6 tracking-wider">
            关于我们
          </h2>
          <p className="text-amber-100/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            {MOCK_ABOUT_INTRO}
          </p>
        </motion.div>

        {/* 全球化布局节点 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-12 md:mb-16"
        >
          {LOCATIONS.map((loc, i) => (
            <motion.div
              key={loc}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-500/30 bg-amber-500/5"
            >
              <MapPin className="size-4 text-amber-400" strokeWidth={1.5} />
              <span className="text-amber-200 text-sm font-medium">{loc}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* 办公环境图组 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {MOCK_ABOUT_OFFICES.map((office, i) => (
            <motion.div
              key={office.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="group relative rounded-xl overflow-hidden border border-amber-500/15"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={office.imageUrl}
                  alt={office.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* 蒙层 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                {/* 名称 */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-amber-200 font-medium text-sm md:text-base">
                    {office.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
