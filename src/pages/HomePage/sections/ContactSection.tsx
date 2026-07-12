import { motion } from 'framer-motion'
import { MOCK_CONTACT_TITLE, MOCK_CONTACT_SUBTITLE, MOCK_CONTACT_ITEMS } from '@/data/contact'
import { Image } from '@/components/ui/image';

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full py-20 md:py-28 bg-[#0d0304] overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 md:px-6">
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
              {MOCK_CONTACT_SUBTITLE}
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500/50" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent mb-6 tracking-wider">
            {MOCK_CONTACT_TITLE}
          </h2>
          <p className="text-amber-100/60 text-base max-w-xl mx-auto">
            期待与您携手，共同打造具有东方美学与全球视野的影视精品
          </p>
        </motion.div>

        {/* 二维码卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto">
          {MOCK_CONTACT_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative p-8 md:p-10 rounded-2xl border border-amber-500/20 bg-gradient-to-b from-[#1a0608] to-[#0d0304] hover:border-amber-500/40 transition-all duration-500 text-center"
            >
              {/* 顶部装饰角 */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-amber-500/40 rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-amber-500/40 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-amber-500/40 rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-amber-500/40 rounded-br-2xl" />

              {/* 二维码 */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-xl overflow-hidden p-2 bg-gradient-to-br from-amber-400/20 to-amber-600/10">
                <div className="w-full h-full rounded-lg overflow-hidden bg-white">
                  <Image
                    src={item.qrCodeUrl}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* 金色光晕 */}
                <div className="absolute inset-0 rounded-xl shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow pointer-events-none" />
              </div>

              <h3 className="text-xl font-medium text-amber-300 mb-2 group-hover:text-amber-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-amber-100/50 text-sm">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
