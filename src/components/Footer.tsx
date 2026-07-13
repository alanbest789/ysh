import { NavLink } from '@lark-apaas/client-toolkit-lite'
import { Mail, MapPin } from 'lucide-react'

const QUICK_LINKS = [
  { label: '剧本开发', href: '#script' },
  { label: '影视制作', href: '#production' },
  { label: '教育培训', href: '#education' },
  { label: '代表作品', href: '#works' },
  { label: '样片展示', href: '#samples' },
]

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0d0304] border-t border-amber-500/20 text-amber-100/70">
      {/* 顶部装饰金线 */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* 品牌栏 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative size-10 rounded-full bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 overflow-hidden">
                <img
                  src="/迎胜汇logo.png"
                  alt="迎胜汇"
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div>
                <div className="text-amber-400 font-serif font-bold text-lg tracking-wider">
                  迎胜汇
                </div>
                <div className="text-[10px] tracking-[0.2em] text-amber-300/50 uppercase">
                  YINGSHENGHUI
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-amber-100/50 max-w-xs">
              以匠心铸就精品，以故事传递价值。迎胜汇致力于打造具有行业领先与全球视野的影视内容。
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-amber-400 font-medium text-base mb-5 tracking-wide">
              快速链接
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <NavLink
                    to={link.href}
                    className="text-sm text-amber-100/60 hover:text-amber-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-amber-500/40 group-hover:bg-amber-400 transition-colors" />
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系我们 */}
          <div>
            <h3 className="text-amber-400 font-medium text-base mb-5 tracking-wide">
              联系我们
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="size-4 text-amber-500/70 mt-0.5 shrink-0" />
                <div className="text-sm">
                  <div className="text-amber-100/70">商务合作邮箱</div>
                  <div className="text-amber-300/80">yingshenghuivip@gmail.com</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="mt-12 pt-8 border-t border-amber-500/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-amber-100/40">
            © 2026 迎胜汇 YINGSHENGHUI. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
