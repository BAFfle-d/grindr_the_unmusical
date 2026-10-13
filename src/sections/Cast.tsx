import { CHARACTERS } from '../data/play';

export default function Cast() {
  return (
    <section id="cast" className="py-14 border-t border-white/10 scroll-mt-16">
      <div className="max-w-3xl mx-auto px-5">
        <h2 className="font-display text-2xl sm:text-3xl uppercase text-zinc-100 mb-6">Cast</h2>

        <ul className="divide-y divide-white/10">
          {CHARACTERS.map((c) => (
            <li key={c.id} className="py-4 flex items-baseline gap-3 flex-wrap">
              <span
                className="font-mono2 text-sm font-semibold uppercase w-24 shrink-0"
                style={{ color: c.color }}
              >
                {c.name}
              </span>
              <span className="text-zinc-400 text-sm sm:text-base">{c.desc}</span>
            </li>
          ))}
        </ul>

        <p className="mt-5 text-xs text-zinc-600 leading-relaxed">
          Andy, Nick, and Mom are text-only presences — their messages appear as texts on screen and
          are spoken aloud from the edges of the stage.
        </p>
      </div>
    </section>
  );
}
