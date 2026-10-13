import { LOGLINE, SETTING } from '../data/play';

export default function About() {
  return (
    <section id="about" className="py-14 border-t border-white/10 scroll-mt-16">
      <div className="max-w-3xl mx-auto px-5">
        <h2 className="font-display text-2xl sm:text-3xl uppercase text-zinc-100 mb-6">About</h2>

        <p className="text-lg text-zinc-200 leading-relaxed mb-6">{LOGLINE}</p>

        <p className="text-zinc-400 leading-relaxed mb-4">
          Over one chaotic evening, Charley juggles a Grindr hookup that keeps slipping away, a
          &ldquo;friend&rdquo; who treats him like an on-demand driver, and a dead car battery that
          strands him between all of it. Into the apartment wanders Mason — Charley Too&rsquo;s
          strange, unbothered companion — who keeps asking questions nobody wants to answer: What do
          you actually need? When did you last eat? Why is the phone always in your hand?
        </p>

        <p className="text-zinc-400 leading-relaxed mb-4">
          Built on a simple theatrical device — two text-only characters who speak their messages
          aloud from the edges of the stage while notification sounds punctuate every exchange — the
          play turns one night of notification hell into a comedy about attention, desire, and the
          difference between being connected and being present.
        </p>

        <p className="text-zinc-500 leading-relaxed text-sm border-l-2 border-white/15 pl-4">
          {SETTING}
        </p>
      </div>
    </section>
  );
}
