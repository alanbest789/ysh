import { useState, useEffect } from 'react'
import { NavLink } from '@lark-apaas/client-toolkit-lite'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useIsMobile } from '@/hooks/use-mobile'
import { UniversalLink } from '@lark-apaas/client-toolkit-lite';

const NAV_ITEMS = [
  { label: '首页', href: '#hero' },
  { label: '剧本开发', href: '#script' },
  { label: '影视制作', href: '#production' },
  { label: '教育培训', href: '#education' },
  { label: '代表作品', href: '#works' },
  { label: '关于我们', href: '#about' },
  { label: '联系我们', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[rgb(20_5_8_/_0.92)] backdrop-blur-xl border-b border-amber-500/20 shadow-lg shadow-black/30'
          : 'bg-transparent'
      )}
    >
      {/* 顶部金色装饰线 */}
      <div
        className={cn(
          'absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent transition-opacity duration-500',
          scrolled ? 'opacity-100' : 'opacity-0'
        )}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div
          className={cn(
            'flex items-center justify-between transition-all duration-500',
            scrolled ? 'h-16 md:h-18' : 'h-20 md:h-24'
          )}
        >
          {/* Logo */}
          <NavLink
            to="#hero"
            className="flex items-center gap-3 group shrink-0"
          >
            <div className="relative size-10 md:size-12 rounded-full bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:shadow-amber-500/50 transition-shadow overflow-hidden">
              <img
                src="/迎胜汇logo.png"
                alt="迎胜汇"
                className="h-8 w-8 md:h-9 md:w-9 object-contain"
              />
              {/* 龙纹装饰 */}
              <div className="absolute -inset-1 rounded-full border border-amber-400/30 animate-pulse" />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={cn(
                  'font-serif font-bold tracking-wider transition-colors duration-300',
                  scrolled
                    ? 'text-amber-400 text-lg md:text-xl'
                    : 'text-amber-300 text-xl md:text-2xl drop-shadow-[0_2px_8px_rgba(0_0_0_0.8)]'
                )}
              >
                迎胜汇
              </span>
              <span
                className={cn(
                  'text-[10px] md:text-xs tracking-[0.25em] uppercase transition-colors duration-300',
                  scrolled ? 'text-amber-200/60' : 'text-amber-200/70'
                )}
              >
                YINGSHENGHUI
              </span>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          {!isMobile && (
            <nav className="flex items-center gap-1 lg:gap-2">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      'relative px-3 lg:px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md',
                      isActive
                        ? 'text-amber-400'
                        : scrolled
                        ? 'text-amber-100/80 hover:text-amber-400'
                        : 'text-amber-100 hover:text-amber-300'
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-400" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
          )}

          {/* CTA Button - Desktop */}
          {!isMobile && (
            <UniversalLink
              to="#contact"
              className={cn(
                'px-5 py-2 text-sm font-medium rounded-md border transition-all duration-300',
                scrolled
                  ? 'border-amber-500/50 text-amber-400 hover:bg-amber-500/10 hover:border-amber-400'
                  : 'border-amber-300/60 text-amber-200 hover:bg-amber-500/10 hover:border-amber-300 backdrop-blur-sm'
              )}
            >
              商务合作
            </UniversalLink>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-amber-300 hover:text-amber-400 transition-colors"
              aria-label="菜单"
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div className="bg-[rgb(20_5_8_/_0.98)] backdrop-blur-xl border-t border-amber-500/20">
          <nav className="flex flex-col py-4">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'px-6 py-3 text-sm transition-colors border-l-2',
                    isActive
                      ? 'text-amber-400 border-amber-400 bg-amber-500/5'
                      : 'text-amber-100/80 border-transparent hover:text-amber-400 hover:bg-amber-500/5'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
