import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#cast', label: 'Cast' },
  { href: '#script', label: 'Script' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#0B0B10]/95 backdrop-blur border-b border-white/10' : 'bg-transparent'
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <nav className="max-w-3xl mx-auto flex items-center justify-between px-5 h-14">
        <a href="#top" className="font-display text-base tracking-wide uppercase" onClick={() => setOpen(false)}>
          Ding! <span className="text-[#FFC629]">The UnMusical</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-zinc-400 hover:text-[#FFC629] transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden grid place-items-center w-11 h-11 -mr-2 text-zinc-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0B0B10]/95 backdrop-blur">
          <div className="px-5 py-3 flex flex-col">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-zinc-200 hover:text-[#FFC629] py-3 px-2 min-h-[44px] flex items-center"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
