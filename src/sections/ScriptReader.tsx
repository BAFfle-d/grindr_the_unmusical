import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SCENES, type ScriptEntry } from '../data/script';
import { CHARACTERS } from '../data/play';

const charMap = Object.fromEntries(CHARACTERS.map((c) => [c.id, c]));

const SOUND_RE = /(\bDING\b|\bDONG\b|\bBING\b)/g;

function DirText({ text }: { text: string }) {
  const parts = text.split(SOUND_RE);
  return (
    <span className="dir-text text-sm sm:text-[15px] leading-relaxed normal-case tracking-normal">
      {parts.map((p, i) =>
        SOUND_RE.test(p) ? (
          <span key={i} className="text-[#FFC629] font-semibold not-italic font-mono2">
            {p}
          </span>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </span>
  );
}

/** Group entries into render blocks: cue + following lines, standalone dirs/sounds. */
type Block =
  | { kind: 'speech'; who: string; stage: string; lines: string[] }
  | { kind: 'dir'; txt: string }
  | { kind: 'sound'; txt: string };

function buildBlocks(entries: ScriptEntry[]): Block[] {
  const blocks: Block[] = [];
  let cur: Block | null = null;
  for (const e of entries) {
    if (e.t === 'cue') {
      cur = { kind: 'speech', who: e.who, stage: e.stage, lines: [] };
      blocks.push(cur);
    } else if (e.t === 'line') {
      if (cur && cur.kind === 'speech') cur.lines.push(e.txt);
      else {
        cur = { kind: 'speech', who: e.who, stage: '', lines: [e.txt] };
        blocks.push(cur);
      }
    } else if (e.t === 'dir') {
      cur = { kind: 'dir', txt: e.txt };
      blocks.push(cur);
    } else {
      cur = { kind: 'sound', txt: e.txt };
      blocks.push(cur);
    }
  }
  return blocks;
}

function SpeechBlock({ block }: { block: Extract<Block, { kind: 'speech' }> }) {
  const c = charMap[block.who];
  const color = c?.color ?? '#FFC629';
  const textOnly = c?.textOnly ?? false;

  const body = (
    <>
      {block.lines.map((l, i) => (
        <p key={i} className={i > 0 ? 'mt-2' : ''}>
          {l}
        </p>
      ))}
    </>
  );

  if (textOnly) {
    return (
      <div className="flex flex-col items-start gap-1 my-4">
        <span className="font-mono2 text-[11px] uppercase tracking-wider ml-3" style={{ color }}>
          {c.name} · text
        </span>
        <div
          className={`max-w-[85%] sm:max-w-[70%] rounded-2xl rounded-tl-md border px-4 py-3 text-[15px] sm:text-base leading-relaxed text-zinc-100 ${c.bubble}`}
        >
          {body}
        </div>
      </div>
    );
  }

  return (
    <div className="my-4">
      <p className="font-mono2 text-[11px] uppercase tracking-wider mb-1.5" style={{ color }}>
        {c?.name ?? block.who}
        {block.stage && <DirText text={` ${block.stage}`} />}
      </p>
      <div className="border-l-2 pl-4 text-[15px] sm:text-base leading-relaxed text-zinc-200" style={{ borderColor: `${color}66` }}>
        {body}
      </div>
    </div>
  );
}

export default function ScriptReader() {
  const [active, setActive] = useState(0);
  const scene = SCENES[active];

  const blocks = useMemo(() => buildBlocks(scene.entries), [scene]);

  const go = (n: number) => setActive(Math.min(Math.max(n, 0), SCENES.length - 1));

  return (
    <section id="script" className="py-14 border-t border-white/10 scroll-mt-16">
      <div className="max-w-3xl mx-auto px-5">
        <h2 className="font-display text-2xl sm:text-3xl uppercase text-zinc-100 mb-6">Script</h2>

        {/* scene tabs */}
        <div className="sticky top-14 z-30 -mx-5 px-5 py-2.5 bg-[#0B0B10]/95 backdrop-blur border-b border-white/10 mb-8">
          <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {SCENES.map((s, i) => (
              <button
                key={s.n}
                onClick={() => go(i)}
                className={`shrink-0 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold border transition-colors min-h-[44px] ${
                  i === active
                    ? 'bg-[#FFC629] text-black border-[#FFC629]'
                    : 'bg-white/[0.04] text-zinc-400 border-white/10 hover:text-zinc-100 hover:border-white/25'
                }`}
              >
                <span className={`font-mono2 text-xs ${i === active ? 'text-black/60' : 'text-zinc-600'}`}>
                  {s.n}
                </span>
                {s.title}
              </button>
            ))}
          </div>
        </div>

        {/* scene header */}
        <div key={`hdr-${scene.n}`} className="anim-ding-pop mb-8">
          <p className="font-mono2 text-xs uppercase tracking-[0.3em] text-zinc-500 mb-2">
            Scene {['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'][scene.n - 1]}
          </p>
          <h3 className="font-display text-3xl sm:text-5xl uppercase text-zinc-100 mb-3">{scene.title}</h3>
          <p className="text-zinc-400 leading-relaxed max-w-2xl">{scene.synopsis}</p>
        </div>

        {/* script body */}
        <div key={`body-${scene.n}`} className="anim-ding-pop">
          {blocks.map((b, i) => {
            if (b.kind === 'speech') return <SpeechBlock key={i} block={b} />;
            if (b.kind === 'dir')
              return (
                <p key={i} className="my-4 pl-4 sm:pl-8">
                  <DirText text={b.txt} />
                </p>
              );
            return (
              <div key={i} className="flex justify-center my-6">
                <span className="anim-ding-pulse font-mono2 text-xs font-semibold tracking-[0.25em] text-[#FFC629] border border-[#FFC629]/40 bg-[#FFC629]/10 rounded-full px-5 py-2">
                  {b.txt}.
                </span>
              </div>
            );
          })}
        </div>

        {/* prev / next */}
        <div className="flex items-center justify-between gap-4 mt-10 pt-6 border-t border-white/10">
          <button
            onClick={() => go(active - 1)}
            disabled={active === 0}
            className="inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2.5 rounded-full border border-white/15 text-sm font-semibold text-zinc-300 hover:bg-white/10 transition-colors disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronLeft size={16} /> Prev scene
          </button>
          <span className="font-mono2 text-xs text-zinc-600">
            {scene.n} / {SCENES.length}
          </span>
          <button
            onClick={() => go(active + 1)}
            disabled={active === SCENES.length - 1}
            className="inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2.5 rounded-full bg-[#FFC629] text-black text-sm font-bold hover:bg-amber-300 transition-colors disabled:opacity-30 disabled:pointer-events-none"
          >
            Next scene <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
