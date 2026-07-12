import { motion } from 'framer-motion'
import {
  MOCK_PRODUCTION_STEPS,
  MOCK_PRODUCTION_INTRO,
} from '@/data/production'

const expandedIntro =
  '以匠心工艺将优质剧本视觉化呈现。我们拥有专业的分镜师、美术设计师与后期制作团队，' +
  '从剧本文本到漫剧成片，构建完整的制作流水线。精准把控每一个镜头语言、每一帧画面质感，' +
  '让纸上的故事真正拥有灵魂与温度，衔接剧本开发与终端播出，让好故事走向更广阔的银幕。'

export default function ProductionSection() {
  return (
    <section
      id="production"
      className="relative w-full py-20 md:py-28 bg-gradient-to-b from-[#0d0304] via-[#140507] to-[#0d0304] overflow-hidden"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl translate-x-1/3" />
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
              FILM PRODUCTION
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500/50" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-amber-300 mb-6 tracking-wider">
            影视制作
          </h2>
          <p className="text-amber-100/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            {expandedIntro || MOCK_PRODUCTION_INTRO}
          </p>
        </motion.div>

        {/* 横向时间轴 - 桌面端 */}
        <div className="hidden md:block relative">
          {/* 时间轴主线 */}
          <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

          <div className="grid grid-cols-6 gap-4">
            {MOCK_PRODUCTION_STEPS.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative group"
              >
                {/* 节点圆点 */}
                <div className="absolute top-14 left-1/2 -translate-x-1/2 z-10">
                  <div className="size-4 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg shadow-amber-500/50 group-hover:scale-125 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-full bg-amber-400/30 animate-ping" />
                </div>

                {/* 步骤卡片 */}
                <div className="pt-28 text-center">
                  <div className="text-5xl mb-4">{step.icon}</div>
                  <div className="text-amber-500/60 text-xs tracking-widest mb-2">
                    STEP {String(step.step).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-medium text-amber-300 mb-2">{step.title}</h3>
                  <p className="text-amber-100/50 text-sm leading-relaxed px-2">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 纵向时间轴 - 移动端 */}
        <div className="md:hidden space-y-6 pl-8 relative">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-amber-500/30 via-amber-500/50 to-amber-500/30" />
          {MOCK_PRODUCTION_STEPS.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[26px] top-4 size-3 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow shadow-amber-500/50" />
              <div className="p-5 rounded-lg bg-amber-500/5 border border-amber-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{step.icon}</span>
                  <div>
                    <div className="text-amber-500/60 text-[10px] tracking-widest">
                      STEP {String(step.step).padStart(2, '0')}
                    </div>
                    <h3 className="text-base font-medium text-amber-300">{step.title}</h3>
                  </div>
                </div>
                <p className="text-amber-100/50 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
