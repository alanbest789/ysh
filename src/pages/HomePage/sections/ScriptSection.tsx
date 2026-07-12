import { motion } from 'framer-motion'
import { PenTool, Star, Library, Users, Handshake, Building2 } from 'lucide-react'
import {
  MOCK_SCRIPT_SECTION,
  MOCK_SCRIPT_HIGHLIGHTS,
  MOCK_SCRIPT_TALENT_MATRIX,
} from '@/data/script'
import { UniversalLink } from '@lark-apaas/client-toolkit-lite';

const iconMap: Record<string, typeof PenTool> = {
  script: PenTool,
  star: Star,
  library: Library,
}

const dimensionIconMap: Record<string, typeof Users> = {
  fulltime: Building2,
  signed: Users,
  cooperation: Handshake,
}

export default function ScriptSection() {
  return (
    <section id="script" className="relative w-full py-20 md:py-28 bg-[#0d0304] overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-red-500/5 rounded-full blur-3xl" />
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
              SCRIPT DEVELOPMENT
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500/50" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-amber-300 mb-6 tracking-wider">
            {MOCK_SCRIPT_SECTION.title}
          </h2>
          <p className="text-amber-100/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            {MOCK_SCRIPT_SECTION.description}
          </p>
        </motion.div>

        {/* 三大亮点 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-24">
          {MOCK_SCRIPT_HIGHLIGHTS.map((item, i) => {
            const Icon = iconMap[item.icon] ?? PenTool
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative p-8 rounded-xl bg-gradient-to-b from-amber-500/5 to-transparent border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300"
              >
                {/* 顶部金色装饰角 */}
                <div className="absolute top-0 left-0 w-6 h-6 border-l border-t border-amber-500/40 rounded-tl-xl" />
                <div className="absolute top-0 right-0 w-6 h-6 border-r border-t border-amber-500/40 rounded-tr-xl" />

                <div className="size-14 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center mb-6 group-hover:from-amber-500/30 transition-all duration-300">
                  <Icon className="size-7 text-amber-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium text-amber-300 mb-3">{item.title}</h3>
                <p className="text-amber-100/60 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* 人才矩阵 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl md:text-3xl text-amber-400 mb-3">人才矩阵</h3>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MOCK_SCRIPT_TALENT_MATRIX.map((item, i) => {
              const Icon = dimensionIconMap[item.dimension] ?? Users
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="relative p-8 rounded-xl border border-amber-500/15 bg-gradient-to-br from-[#1a0608] to-[#0d0304] text-center"
                >
                  <div className="size-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-amber-500/20 to-red-500/10 flex items-center justify-center border border-amber-500/30">
                    <Icon className="size-7 text-amber-400" strokeWidth={1.5} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-amber-300 to-amber-600 bg-clip-text text-transparent mb-2 font-serif">
                    {item.count}
                  </div>
                  <h4 className="text-lg text-amber-300 mb-2 font-medium">{item.title}</h4>
                  <p className="text-amber-100/50 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* CTA 按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <UniversalLink
            to={MOCK_SCRIPT_SECTION.buttonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-[#1a0505] font-medium rounded-md shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            {MOCK_SCRIPT_SECTION.buttonText}
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </UniversalLink>
        </motion.div>
      </div>
    </section>
  )
}
