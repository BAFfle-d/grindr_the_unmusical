export interface Character {
  id: string;
  name: string;
  abbr: string;
  color: string; // tailwind text color
  bubble: string; // tailwind bubble bg + border for text-only characters
  tagline: string;
  desc: string;
  textOnly: boolean;
}

export const CHARACTERS: Character[] = [
  {
    id: 'CHARLEY',
    name: 'Charley',
    abbr: 'C',
    color: '#FFC629',
    bubble: '',
    tagline: 'Our protagonist',
    desc: 'Navigating the chaos of modern connection — one notification at a time.',
    textOnly: false,
  },
  {
    id: 'ANDY',
    name: 'Andy',
    abbr: 'A',
    color: '#34D399',
    bubble: 'bg-emerald-500/15 border-emerald-400/30',
    tagline: 'A hookup prospect',
    desc: 'Text-only presence. "Discrete no face." Keeps his address to himself.',
    textOnly: true,
  },
  {
    id: 'NICK',
    name: 'Nick',
    abbr: 'N',
    color: '#FB7185',
    bubble: 'bg-rose-500/15 border-rose-400/30',
    tagline: 'A demanding "friend"',
    desc: 'Text-only presence — initially. Entitled, sweaty, and always outside waiting.',
    textOnly: true,
  },
  {
    id: 'C2',
    name: 'Charley Too',
    abbr: 'C2',
    color: '#38BDF8',
    bubble: '',
    tagline: "Charley's friend",
    desc: 'Arrives in person. Knows his way around a corroded battery terminal.',
    textOnly: false,
  },
  {
    id: 'MASON',
    name: 'Mason',
    abbr: 'M',
    color: '#A78BFA',
    bubble: '',
    tagline: "C2's mysterious companion",
    desc: 'A philosophical stoner who observes the chaos with detached amusement.',
    textOnly: false,
  },
  {
    id: 'MOM',
    name: 'Mom',
    abbr: '♥',
    color: '#60A5FA',
    bubble: 'bg-blue-500/15 border-blue-400/30',
    tagline: 'Charley\u2019s mom',
    desc: 'Text-only presence. Making eggplant parmesan. Misses her son.',
    textOnly: true,
  },
];

export const LOGLINE =
  'Charley just wants to hook up with Andy. His car battery, his best friend, a demanding "friend," and one very zen stranger have other plans.';

export const SYNOPSIS: string[] = [
  'Charley attempts to hook up with Andy via Grindr while juggling constant text interruptions from his demanding friend Nick.',
  'A dead car battery derails Charley\u2019s 30-minute drive to meet Andy, forcing him to call his friend Charley Too for help.',
  'The play explores modern digital fragmentation through constant notification sounds (DING/DONG) that punctuate every interaction.',
  'Charley oscillates between performative "chill bro" masculinity and anxious overthinking about profile pictures, usernames, and social protocols.',
  'Nick exhibits toxic, entitled behavior, guilt-tripping Charley for being unavailable while simultaneously treating him poorly.',
  'Charley Too arrives with Mason, a philosophical stoner who observes the chaos with detached amusement.',
  'The stage design fragments attention across multiple playing spaces while text-only characters (Andy and Nick) appear at the edges speaking their messages aloud.',
  'Themes include digital connection versus genuine intimacy, performative identity, attention fragmentation, and the absurdity of modern dating apps.',
];

export const THEMES = [
  { title: 'Digital connection vs. genuine intimacy', icon: '💔' },
  { title: 'Performative identity', icon: '🎭' },
  { title: 'Attention fragmentation', icon: '🔔' },
  { title: 'The absurdity of modern dating apps', icon: '📱' },
];

export const SETTING =
  'Charley\u2019s apartment and surrounding area. The stage is divided into multiple playing spaces: bedroom/bathroom area, living room, car (suggested by a chair), and street/exterior.';

export const STAGING_NOTE =
  'Throughout the play, Andy and Nick appear at the edges of the stage, speaking their texts aloud and occasionally interacting with the space — except during Mason\u2019s philosophical moments with Charley.';

export const PLAYING_SPACES = [
  { name: 'Bedroom / Bathroom', hint: 'outfit changes, frantic tooth-brushing' },
  { name: 'Living Room', hint: 'the couch, the bong, the unraveling' },
  { name: 'Car', hint: 'suggested by a single chair' },
  { name: 'Street / Exterior', hint: 'the edges where the texts come alive' },
];
