import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { UniversalLink } from '@lark-apaas/client-toolkit-lite';

const HERO_BG = '/官网背景.jpg'

export default function HeroSection() {
  const scrollToNext = () => {
    document.getElementById('script')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 背景图 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />

      {/* 红色渐变蒙版 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0306]/80 via-[#3d0a0f]/70 to-[#0d0304]" />

      {/* 顶部祥云装饰 - 左侧 */}
      <div className="absolute top-0 left-0 w-1/3 h-64 opacity-30 pointer-events-none">
        <svg viewBox="0 0 400 200" className="w-full h-full" fill="none">
          <path
            d="M0,120 Q60,80 120,100 T240,90 T360,110 T400,100"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-amber-400"
            fill="none"
          />
          <path
            d="M0,140 Q80,100 160,120 T320,110 T400,130"
            stroke="currentColor"
            strokeWidth="1"
            className="text-amber-400/60"
            fill="none"
          />
          <circle cx="100" cy="100" r="8" stroke="currentColor" strokeWidth="1" className="text-amber-400/50" fill="none" />
          <circle cx="250" cy="95" r="6" stroke="currentColor" strokeWidth="1" className="text-amber-400/40" fill="none" />
        </svg>
      </div>

      {/* 顶部祥云装饰 - 右侧 */}
      <div className="absolute top-0 right-0 w-1/3 h-64 opacity-30 pointer-events-none transform scale-x-[-1]">
        <svg viewBox="0 0 400 200" className="w-full h-full" fill="none">
          <path
            d="M0,120 Q60,80 120,100 T240,90 T360,110 T400,100"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-amber-400"
            fill="none"
          />
          <path
            d="M0,140 Q80,100 160,120 T320,110 T400,130"
            stroke="currentColor"
            strokeWidth="1"
            className="text-amber-400/60"
            fill="none"
          />
        </svg>
      </div>

      {/* 龙纹装饰 - 左上 */}
      <div className="absolute top-24 left-8 md:left-16 w-24 md:w-32 opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 120" className="w-full h-full" fill="none">
          <path
            d="M10,100 Q20,60 40,50 Q60,40 70,20 Q75,10 85,15"
            stroke="currentColor"
            strokeWidth="2"
            className="text-amber-400"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M15,95 Q25,70 40,60 Q55,50 65,35"
            stroke="currentColor"
            strokeWidth="1"
            className="text-amber-400/70"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* 主内容 */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 md:space-y-8"
        >
          {/* 装饰分隔 - 上 */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-amber-500/60" />
            <span className="text-amber-400/80 text-xs md:text-sm tracking-[0.3em] uppercase">
              笔写风云 · 影绘万象
            </span>
            <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-amber-500/60" />
          </div>

          {/* 主标题 */}
          <h1 className="font-serif font-bold text-5xl md:text-7xl lg:text-8xl tracking-wider">
            <span className="bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(212_175_55_0.3)]">
              迎胜汇
            </span>
          </h1>

          {/* 副标题 */}
          <p className="text-amber-200/90 text-lg md:text-xl lg:text-2xl tracking-[0.3em] font-light">
            YINGSHENGHUI MEDIA
          </p>

          {/* Slogan */}
          <div className="pt-4 md:pt-6">
            <p className="text-amber-100/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              以匠心铸就精品剧作&nbsp;&nbsp;以光影锻造视觉盛宴
            </p>
            <p className="text-amber-200/60 text-sm md:text-base mt-2 tracking-widest">
              剧本开发 · 影视制作 · 教育培训
            </p>
          </div>

          {/* CTA 按钮组 */}
          <div className="pt-8 md:pt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <UniversalLink
              to="#works"
              className="group relative px-8 py-3 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-[#1a0505] font-medium rounded-md shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="relative z-10">探索作品</span>
            </UniversalLink>
            <UniversalLink
              to="#contact"
              className="px-8 py-3 border border-amber-400/50 text-amber-300 font-medium rounded-md hover:bg-amber-500/10 hover:border-amber-400 transition-all duration-300 backdrop-blur-sm"
            >
              商务合作
            </UniversalLink>
          </div>
        </motion.div>
      </div>

      {/* 向下滚动提示 */}
      <button
        type="button"
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-amber-300/60 hover:text-amber-400 transition-colors group"
        aria-label="向下滚动"
      >
        <span className="text-xs tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="size-5" />
        </motion.div>
      </button>

      {/* 底部渐变过渡 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0d0304] to-transparent" />
    </section>
  )
}
