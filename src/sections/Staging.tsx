import { Armchair, BedDouble, Car, MapPin, Trees } from 'lucide-react';
import Reveal from '../components/Reveal';
import { PLAYING_SPACES, SETTING, STAGING_NOTE } from '../data/play';

const ICONS = [BedDouble, Armchair, Car, Trees];

export default function Staging() {
  return (
    <section id="staging" className="relative py-24 sm:py-32 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="font-mono2 text-xs uppercase tracking-[0.3em] text-[#FFC629] mb-4">03 — Setting &amp; Staging</p>
          <h2 className="font-display text-4xl sm:text-6xl uppercase leading-[0.95] mb-12">
            One apartment,
            <br />
            <span className="text-zinc-500">four playing spaces.</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-6">
          <Reveal className="lg:col-span-3" delay={80}>
            <div className="h-full bg-[#121218] border border-white/10 rounded-3xl p-7 sm:p-9">
              <div className="flex items-center gap-2.5 text-[#FFC629] mb-5">
                <MapPin size={18} />
                <span className="font-mono2 text-xs uppercase tracking-[0.25em]">The world of the play</span>
              </div>
              <p className="text-lg text-zinc-200 leading-relaxed mb-6">{SETTING}</p>
              <div className="border-l-2 border-violet-400/50 pl-5 py-1">
                <p className="font-mono2 text-[11px] uppercase tracking-wider text-violet-300 mb-1.5">Director&rsquo;s note</p>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">{STAGING_NOTE}</p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {PLAYING_SPACES.map((s, i) => {
              const Icon = ICONS[i];
              return (
                <Reveal key={s.name} delay={140 + i * 70}>
                  <div className="h-full bg-white/[0.04] border border-white/10 rounded-2xl p-5 flex items-start gap-4 hover:border-[#FFC629]/40 transition-colors">
                    <div className="grid place-items-center w-11 h-11 rounded-xl bg-[#FFC629]/10 text-[#FFC629] shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-100">{s.name}</h3>
                      <p className="text-sm text-zinc-500 mt-1">{s.hint}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
