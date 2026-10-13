// DING! The UnMusical — full script data extracted from the author's Notion draft
export type ScriptEntry =
  | { t: 'cue'; who: string; stage: string }
  | { t: 'line'; who: string; txt: string }
  | { t: 'dir'; txt: string }
  | { t: 'sound'; txt: string };

export interface SceneData { n: number; title: string; synopsis: string; entries: ScriptEntry[] }

export const SCENES: SceneData[] = [
  {
    "n": 1,
    "title": "The Proposition",
    "synopsis": "Charley matches with Andy on Grindr — then spirals over profile pics, usernames, and whether to ask for gas money.",
    "entries": [
      {
        "t": "dir",
        "txt": "(DING. Lights up on CHARLEY, phone in hand, just chilling.)"
      },
      {
        "t": "cue",
        "who": "ANDY",
        "stage": "(from offstage, his text appearing as a voice)"
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "Yo."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(typing)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Hey. Wassup?"
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "cue",
        "who": "ANDY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "Good. You?"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Just chillin'."
      },
      {
        "t": "dir",
        "txt": "(Pause. CHARLEY stares at his phone.)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "He's looking, right?"
      },
      {
        "t": "dir",
        "txt": "(Another pause. CHARLEY starts scrolling through photos frantically.)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Cute…"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "A little too much?"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Definitely not safe for work… nah, not that one."
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "The one where I don't look fat is good."
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "And this dumb vacation pic is funny too."
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Are four pics okay?"
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "cue",
        "who": "ANDY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "You hosting?"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(panicking)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Delete delete delete."
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "The over-the-shoulder one with my cute face and…"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "okay. Send!"
      },
      {
        "t": "dir",
        "txt": "(typing)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Yup, u mobile?"
      },
      {
        "t": "dir",
        "txt": "(rapid-fire)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "I'll send my location and my address and my phone number—"
      },
      {
        "t": "dir",
        "txt": "(Stops. Rapidly presses.)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Delete delete delete. He'll ask if he wants all that."
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Wait. How do I — should I —"
      },
      {
        "t": "dir",
        "txt": "(exasperated sound)"
      },
      {
        "t": "dir",
        "txt": "(typing)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Pics?"
      },
      {
        "t": "dir",
        "txt": "(CHARLEY rushes to the bathroom. Water running. He pokes his head out, humming loudly. Brushing teeth sounds.)"
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "dir",
        "txt": "(CHARLEY runs to his phone.)"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(appearing at stage edge)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "Yo, my dude, what are you doing?"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(annoyed)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "You gotta be kidding me — not now!"
      },
      {
        "t": "dir",
        "txt": "(Sets phone down. Immediately:)"
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "dir",
        "txt": "(Picks phone up.)"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "Where you at? I need to get to a bitch's place."
      },
      {
        "t": "dir",
        "txt": "(CHARLEY pokes his head out of the bathroom, humming and singing. Toilet flushes. He comes out.)"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Better. Now, where's—"
      },
      {
        "t": "dir",
        "txt": "(Picks up phone, sets it down. Goes to pick an outfit.)"
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "cue",
        "who": "ANDY",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "Not mobile. Scoop?"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(stops looking for clothes, phone in hand)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Scoop? Fourteen miles? The fuck he at?"
      },
      {
        "t": "dir",
        "txt": "(typing)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Where are you?"
      },
      {
        "t": "dir",
        "txt": "(Begins dressing fast.)"
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "cue",
        "who": "ANDY",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "At my place."
      },
      {
        "t": "dir",
        "txt": "(Map sent.)"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(to himself while dressing)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "That's a 30-minute drive! For — what — five minutes of —"
      },
      {
        "t": "dir",
        "txt": "(acts out a lewd motion)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "At least I hope he lasts… Shut up, Charley."
      },
      {
        "t": "dir",
        "txt": "(typing)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Cool. Got a few bucks for gas? I can still do it, but it'd help me out. Gas is crazy expensive, you know? LOL"
      },
      {
        "t": "dir",
        "txt": "(empowered)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Send."
      },
      {
        "t": "dir",
        "txt": "(Beat, doubting.)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Fuck! Why did I send that?"
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "cue",
        "who": "ANDY",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "Nah, dude. If you can't, it's cool."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(freaking out)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "No. No. No. Get it together, Miss Thirsty Girl."
      },
      {
        "t": "dir",
        "txt": "(beat)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "No — Bro. A chill bro. I am completely chill."
      },
      {
        "t": "dir",
        "txt": "(shoulders back, confident)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Nbd, bro. RTG. U?"
      },
      {
        "t": "dir",
        "txt": "(falls apart, panicking)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Is it too late to ask his name? Dude's username is SissyNoRecip?"
      },
      {
        "t": "dir",
        "txt": "(pic comes on screen)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Oh, that is not him."
      },
      {
        "t": "dir",
        "txt": "(weak)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "I hope."
      },
      {
        "t": "dir",
        "txt": "(investigating, pondering)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Does he like sissies? Should I sissify myself?"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Is SissyNoRecip his boyfriend? They're the same distance away. Does he have a boyfriend? Could maybe — Charley!"
      },
      {
        "t": "dir",
        "txt": "(breathes)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "I am a child bro."
      },
      {
        "t": "dir",
        "txt": "(together)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Oh. PoundUrHoleRN."
      },
      {
        "t": "dir",
        "txt": "(pic on screen, wistfully)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Oh, I hope that's you, Mr. PoundUrHoleRN."
      },
      {
        "t": "dir",
        "txt": "(deadpan, to audience)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "That'll look funny on the wedding invitations."
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "cue",
        "who": "ANDY",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "Yo. You coming?"
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "cue",
        "who": "ANDY",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "Andy."
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "cue",
        "who": "ANDY",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "Pic sent. Me rn. Discrete no face."
      },
      {
        "t": "dir",
        "txt": "(Pic on screen — nearly identical to previous.)"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(squeals)"
      },
      {
        "t": "dir",
        "txt": "(typing — intermittently eager and restrained)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "NBD. 30m. House or apartment?"
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "cue",
        "who": "ANDY",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "Gas station — I don't give my address."
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "cue",
        "who": "ANDY",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "Too many ppl on here crazy."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(to audience)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "But he'll be in my car with me for 30 minutes, then five minutes vibing, then five minutes fucking, then five minutes redressing if we even got naked at all, and 30 minutes coming back. Over an hour together — including exchanging body fluids — and his address is his concern? I could be a serial killer."
      },
      {
        "t": "dir",
        "txt": "(thinks)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Maybe that's his kink. Should I—"
      },
      {
        "t": "dir",
        "txt": "(typing)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Bet. I'm omw."
      },
      {
        "t": "dir",
        "txt": "(to himself)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Is that how people use \"bet\" correctly?"
      },
      {
        "t": "dir",
        "txt": "(Begins walking to car.)"
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "cue",
        "who": "MOM",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "MOM",
        "txt": "Are you still planning to come over today? I know you're busy!"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(Puts phone in pocket without answering.)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Yes, Mom."
      },
      {
        "t": "dir",
        "txt": "(to audience)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Don't be so judgey. She confirmed yesterday — three times. I'll text her back—"
      },
      {
        "t": "dir",
        "txt": "(Beat.)"
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "After Mister Super Hot."
      },
      {
        "t": "dir",
        "txt": "(decided)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "I will have time and I will text her back."
      }
    ]
  },
  {
    "n": 2,
    "title": "The Car",
    "synopsis": "A dead battery stalls the hookup. Nick demands a ride, Andy gets impatient, and Charley Too is summoned for a jump.",
    "entries": [
      {
        "t": "dir",
        "txt": "(DONG. — different notification sound)"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(appearing more prominently)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "Bro wya."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(typing while walking)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "ttt Baby I here you—"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Damn. Edit."
      },
      {
        "t": "dir",
        "txt": "(Stops walking, focuses on phone.)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "T Baby. Im heer y…"
      },
      {
        "t": "dir",
        "txt": "(Hits send.)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Close enough."
      },
      {
        "t": "dir",
        "txt": "(Proceeds to car, sits in chair representing driver's seat.)"
      },
      {
        "t": "sound",
        "txt": "DONG"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "U here, bro? I'll be out in a moment."
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "cue",
        "who": "ANDY",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "U otw?"
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "CHARLEY (frantically typing)(to ANDY) T No."
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "(to NICK) T Yes."
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "Damn."
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "cue",
        "who": "ANDY",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "What?"
      },
      {
        "t": "sound",
        "txt": "DONG"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "I'll be outside."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(to ANDY, typing)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "I'm omw. No to someone else. Mb."
      },
      {
        "t": "dir",
        "txt": "(to NICK, typing)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Busy. Can't."
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "cue",
        "who": "ANDY",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "Coo."
      },
      {
        "t": "dir",
        "txt": "(CHARLEY goes to start car. Sound effects: REV REV REV CLICK CLICK.)"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "FUCK."
      },
      {
        "t": "sound",
        "txt": "DONG"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "FUCK. Man, come on. Why'd you answer then?"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(to himself)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Ignoring the petulant manchild. Focus."
      },
      {
        "t": "dir",
        "txt": "(Tries again: REV REV CLICK.)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Come on, girl."
      },
      {
        "t": "sound",
        "txt": "DONG"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "Come on, man. Fuck. I'm paying. I NEED a ride r n."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(to phone)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Shut up, Nick. I need my car to start."
      },
      {
        "t": "dir",
        "txt": "(CAR: REV CLICK.)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Come on, let's go, girl, you got this."
      },
      {
        "t": "sound",
        "txt": "DONG"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "Come on, bro, all these other motherfuckers treat you like shit. I been real good to you. I pay my way."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(typing to ANDY)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "TtS baby little problem with the car."
      },
      {
        "t": "dir",
        "txt": "(CAR: REV REV REV REV — HOPEFUL REV — REV REV. STOP.)"
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "cue",
        "who": "ANDY",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "T No gas money."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "What? I got — oh I guess I could use gas."
      },
      {
        "t": "dir",
        "txt": "(sighs)"
      },
      {
        "t": "dir",
        "txt": "(typing)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "TtS baby no I need a jump."
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "TtS let me call someone."
      },
      {
        "t": "dir",
        "txt": "(Gets out of car.)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Someone. Someone. Someone."
      },
      {
        "t": "sound",
        "txt": "DONG"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "You coming or no? I got dope and money and hoes to bang. I'm outside waiting. W y a."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(dialing, phone to ear)(to voicemail)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Charley — calling. Need jump ASAP. It's 9:11 and dick o'clock!"
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "cue",
        "who": "ANDY",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "T k. Lmk."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(worried)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "I'm gonna lose him."
      },
      {
        "t": "sound",
        "txt": "DONG"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "Man you suck. I'm gonna call an Uber or something."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(typing to NICK)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "T Baby, can you get me a jump? I'll take you wherever you want."
      },
      {
        "t": "dir",
        "txt": "(Phone rings. Rings. Rings.)"
      },
      {
        "t": "cue",
        "who": "C2",
        "stage": "(voicemail, offstage voice)"
      },
      {
        "t": "line",
        "who": "C2",
        "txt": "I don't check my messages. Text me. Seriously. I will not get your message."
      },
      {
        "t": "dir",
        "txt": "(BEEP.)"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(singsong, into phone)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Charley, too? Oh Charley too-oo. Where are you?"
      },
      {
        "t": "dir",
        "txt": "(serious)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Seriously, girl, I need you. Please come ASAP."
      },
      {
        "t": "dir",
        "txt": "(Hangs up, turns to audience.)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "His voicemails get transcribed and texted to him."
      },
      {
        "t": "dir",
        "txt": "(pointedly)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Avoidant personality disorder, he blames it on. I just call it being an asshole."
      },
      {
        "t": "dir",
        "txt": "(checks phone)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Oh NOW Nick has nothing to say."
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "cue",
        "who": "ANDY",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "u into 3somes? Roommate has a car."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(eyes widening)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Do you have to ask? Thank God for a dead battery. Baby, bring everyone you know if they look like you."
      },
      {
        "t": "dir",
        "txt": "(catches himself)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Calm. Relax. We're chill, bro. Girl, be chill, bro."
      },
      {
        "t": "dir",
        "txt": "(typing to ANDY)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "T IG. Is he down? Pics?"
      },
      {
        "t": "dir",
        "txt": "(typing to NICK)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "U there? Ur Uber — can you get me a jump? I'll tip. I'll blow the driver if he's male."
      },
      {
        "t": "dir",
        "txt": "(to himself)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "I should have more self-esteem."
      },
      {
        "t": "dir",
        "txt": "(typing to NICK)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "*If he's cute."
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "dir",
        "txt": "(ANDY sends pic.)"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(losing it)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "OH. MY. GOD. YES YES YES DEAR GOD BRING ON THE MEN! PLEASE!"
      },
      {
        "t": "dir",
        "txt": "(Coughs, composes himself.)"
      },
      {
        "t": "dir",
        "txt": "(typing to ANDY)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Yea, that's cool."
      },
      {
        "t": "dir",
        "txt": "(Sends map.)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Lmk eta."
      },
      {
        "t": "dir",
        "txt": "(thinks, types)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "T thx for being chill."
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "cue",
        "who": "ANDY",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "L y k shortly."
      },
      {
        "t": "sound",
        "txt": "DONG"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "U need a what? Man I ain't trying to be all in your business like that."
      },
      {
        "t": "sound",
        "txt": "DONG"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "Thx to you I'm walking. It's hot."
      },
      {
        "t": "sound",
        "txt": "DONG"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "TEN MINUTES."
      },
      {
        "t": "sound",
        "txt": "DONG"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "U know how swampy my nuts r gonna be after I walk that long?"
      },
      {
        "t": "sound",
        "txt": "DONG"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "My next ride is free. Thx 4 nuthin bro."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(incredulous)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "A ten minute walk? That's what he's… Lazy."
      },
      {
        "t": "dir",
        "txt": "(BING. — different notification)"
      },
      {
        "t": "cue",
        "who": "C2",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "C2",
        "txt": "Omw. I got company."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(relieved)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Oh thank God!"
      },
      {
        "t": "dir",
        "txt": "(typing)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Eta."
      },
      {
        "t": "cue",
        "who": "C2",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "C2",
        "txt": "Incoming."
      }
    ]
  },
  {
    "n": 3,
    "title": "Charley, Too",
    "synopsis": "Charley Too arrives with the mysterious Mason in tow — then leaves to fetch parts, forgetting Mason entirely.",
    "entries": [
      {
        "t": "dir",
        "txt": "(C2 enters with MASON. Throughout this scene and most scenes following, ANDY and NICK occasionally walk across the background, speaking their texts aloud and interacting with the space.)"
      },
      {
        "t": "cue",
        "who": "C2",
        "stage": "(gesturing to CHARLEY)"
      },
      {
        "t": "line",
        "who": "C2",
        "txt": "This is Charley."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(to MASON)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "You're Charley too?"
      },
      {
        "t": "cue",
        "who": "C2",
        "stage": ""
      },
      {
        "t": "line",
        "who": "C2",
        "txt": "No, he's Charley too. I'm Charley."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Says him. I'M Charley and he's Charley, too."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": "(unamused)"
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "You two must be a hit at parties."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "We like to make an entrance."
      },
      {
        "t": "cue",
        "who": "C2",
        "stage": ""
      },
      {
        "t": "line",
        "who": "C2",
        "txt": "People always knew we were there."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "You do you… and you, too?"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Thanks. Make yourself at home. Fridge is mostly empty but only mostly."
      },
      {
        "t": "dir",
        "txt": "(C2 and CHARLEY move to the car. MASON wanders into the living room area, pulls out an obvious bong, and begins smoking.)"
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(checking phone)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Andy says roommate can't make it — too far."
      },
      {
        "t": "dir",
        "txt": "(typing)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Still cool?"
      },
      {
        "t": "dir",
        "txt": "(to C2)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Please tell me you brought cables."
      },
      {
        "t": "cue",
        "who": "C2",
        "stage": "(already under the hood)"
      },
      {
        "t": "line",
        "who": "C2",
        "txt": "Baby, do I tell you how to do your — do you have a job?"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(backs off into doorway, halfway in and out, pacing, answering texts)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Yes! I… work. I think. Was I supposed to work today?"
      },
      {
        "t": "dir",
        "txt": "(shrugs)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Car troubles."
      },
      {
        "t": "dir",
        "txt": "(Phone is going off regularly. CHARLEY is absorbed. For a moment there is only dinging. C2's phone rings and he picks up, chatting quietly.)"
      },
      {
        "t": "sound",
        "txt": "DONG"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(from background)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "Arrived at my destination, bro. Expect a ride later."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": "(gesturing with bong)"
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "It's like a bell choir for the attention-deficit."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(waves absently)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Welcome to the zeitgeist, enjoy it. Everyone's so connected all the time. You good there… uh…"
      },
      {
        "t": "dir",
        "txt": "(Realizes he doesn't know MASON's name. Moves toward living room.)"
      },
      {
        "t": "dir",
        "txt": "(to audience)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Matthew?"
      },
      {
        "t": "dir",
        "txt": "(texts C2)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "What's his name?"
      },
      {
        "t": "dir",
        "txt": "(C2 is not paying attention, still on phone.)"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": "(laughs loudly, goes to light the bong)"
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Mason. My name is Mason. And I'm good. Thank you for the hospitality."
      },
      {
        "t": "cue",
        "who": "C2",
        "stage": "(coming inside)"
      },
      {
        "t": "line",
        "who": "C2",
        "txt": "Well. Your terminals are corroded."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "What?"
      },
      {
        "t": "cue",
        "who": "C2",
        "stage": ""
      },
      {
        "t": "line",
        "who": "C2",
        "txt": "Your battery terminals are corroded. You got a wire brush?"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "A what?"
      },
      {
        "t": "cue",
        "who": "C2",
        "stage": ""
      },
      {
        "t": "line",
        "who": "C2",
        "txt": "Wire brush. To clean them. No?"
      },
      {
        "t": "dir",
        "txt": "(sighs)"
      },
      {
        "t": "line",
        "who": "C2",
        "txt": "You need new terminals. Fifteen bucks? And I need to get cables from home too."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(pulling out wallet)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "It's my last twenty. Come quick."
      },
      {
        "t": "cue",
        "who": "C2",
        "stage": "(taking money, already moving to exit)"
      },
      {
        "t": "line",
        "who": "C2",
        "txt": "Be back soon."
      },
      {
        "t": "dir",
        "txt": "(C2 exits, completely forgetting MASON inside.)"
      }
    ]
  },
  {
    "n": 4,
    "title": "Mason",
    "synopsis": "Mason holds court from the couch: wants versus needs, attack helicopters, and a gentle reminder to lock the door.",
    "entries": [
      {
        "t": "dir",
        "txt": "(CHARLEY re-enters living room, on phone, texting idly. Doesn't notice MASON. MASON clears throat. CHARLEY jumps.)"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Jesus!"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": "(calmly, still with bong)"
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Just me."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(hand on chest)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Oh, right… aren't you gonna go with him?"
      },
      {
        "t": "dir",
        "txt": "(Sound of car engine.)"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Seems I wasn't invited."
      },
      {
        "t": "cue",
        "who": "MOM",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "MOM",
        "txt": "Tea time! Just put the kettle on! Are you on your way?"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Ugh."
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "Sup."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "UGH."
      },
      {
        "t": "dir",
        "txt": "(CHARLEY sits, continues checking phone. DING. DONG. DING. During this next section, ANDY and NICK freeze their background movement, and the stage focuses on MASON and CHARLEY.)"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Have you ever just… not?"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(distracted)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Hm? Not what?"
      },
      {
        "t": "cue",
        "who": "ANDY",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "Sup."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "UGH!"
      },
      {
        "t": "dir",
        "txt": "(texting)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Soon."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Ever just disconnect… for a minute?"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(defensive)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "It's how people are now."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "People are where they need to be."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(looks up)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "What?"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "If you needed something, it would be here already."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(skeptical)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "I like having people around. I want to be around my friends."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Wanting is different than needing."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(processing)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Right, but I still—"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "—won't get dick tonight."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(thrown)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Excuse me?"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "You want to get some, but you don't need it. It won't move you forward. It just satisfies an urge — a want."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(embarrassed)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Then so is fucking Charley Too. Hm?"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": "(laughs)"
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "His want, not mine. I don't want to fuck him — he thinks he needs to fuck me."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Are you gay?"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "More of an attack helicopter."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "That wasn't an option."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Then I'm all of the above — pansexual if you need a label, but my dick is an attack helicopter. It finds a target and fires at will from above."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(despite himself, laughing)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "So… C2 was your target?"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": "(laughs again)"
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Nope."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(hopeful)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Me then?"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": "(laughing harder)"
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Definitely not."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(deflated)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Then who?"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "My girl. She's just down the street."
      },
      {
        "t": "dir",
        "txt": "(stands)"
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "I don't know why, but I had to get in that car."
      },
      {
        "t": "dir",
        "txt": "(MASON walks toward exit, then pauses, gestures around the room.)"
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "You should probably put that away."
      },
      {
        "t": "dir",
        "txt": "(points at bong)"
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "And your wallet — keys — I could've boosted your stash easy."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(looks around, surprised)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Oh shit, I didn't even—"
      },
      {
        "t": "dir",
        "txt": "(looks at stash)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "I thought that was in the—"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": "(shrugs)"
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Maybe you just needed a reminder. Lock up better."
      },
      {
        "t": "dir",
        "txt": "(MASON exits. The moment he's gone, the sounds return: DING. DONG. BING. ANDY and NICK resume their background movements.)"
      }
    ]
  },
  {
    "n": 5,
    "title": "The Phone",
    "synopsis": "Nick shows up in person. Andy calls it a night. Charley Too bails for the Manhole. The phone never stops.",
    "entries": [
      {
        "t": "sound",
        "txt": "DONG"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(from background)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "Yo."
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "YO"
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "cue",
        "who": "ANDY",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "Still good? Lmk."
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "YO! i need a ride back."
      },
      {
        "t": "dir",
        "txt": "(CHARLEY texting frantically between both.)"
      },
      {
        "t": "sound",
        "txt": "DONG"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "BRO. The fuck?"
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "cue",
        "who": "ANDY",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "Everything cool?"
      },
      {
        "t": "dir",
        "txt": "(Phone RINGS. CHARLEY answers.)"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Hello?"
      },
      {
        "t": "cue",
        "who": "C2",
        "stage": "(voice, excited)"
      },
      {
        "t": "line",
        "who": "C2",
        "txt": "Yo! Ten minutes."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Cool. Mason just—"
      },
      {
        "t": "cue",
        "who": "C2",
        "stage": ""
      },
      {
        "t": "line",
        "who": "C2",
        "txt": "Who?"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "The straight guy you brought over?"
      },
      {
        "t": "cue",
        "who": "C2",
        "stage": "(confused)"
      },
      {
        "t": "line",
        "who": "C2",
        "txt": "Oh. Yeah."
      },
      {
        "t": "dir",
        "txt": "(vaguely)"
      },
      {
        "t": "line",
        "who": "C2",
        "txt": "Where'd he go?"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "He left, headed to his girlfriend's."
      },
      {
        "t": "cue",
        "who": "C2",
        "stage": "(relieved)"
      },
      {
        "t": "line",
        "who": "C2",
        "txt": "Good. I met this really hot guy at the auto parts store."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Oh. My. God."
      },
      {
        "t": "cue",
        "who": "C2",
        "stage": ""
      },
      {
        "t": "line",
        "who": "C2",
        "txt": "Yea. When one trick leaves, God provides another. Be there soon."
      },
      {
        "t": "dir",
        "txt": "(Indistinguishable conversation from C2. Hangs up. CHARLEY lowers phone, looks at audience.)"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "That slut."
      },
      {
        "t": "dir",
        "txt": "(CHARLEY flops on couch, starts scrolling through phone absently. DING. DONG. DING. He responds mechanically.)"
      },
      {
        "t": "dir",
        "txt": "(Time passes — suggested by lighting shift or CHARLEY changing position. ANDY and NICK continue their background choreography, occasionally speaking texts.)"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(background)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "You ignoring me now?"
      },
      {
        "t": "cue",
        "who": "ANDY",
        "stage": "(background)"
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "Just checking in."
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(background)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "This is bullshit."
      },
      {
        "t": "dir",
        "txt": "(CHARLEY gets up, wanders to bathroom, returns. Checks phone. More time. He's getting drowsy, frustrated.)"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(to himself)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Where the hell is Charley Too?"
      },
      {
        "t": "dir",
        "txt": "(Suddenly, the front door bursts open. NICK enters — actual, physical NICK, not just background presence. He's agitated, sweaty.)"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": ""
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "YO!"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(jumping up)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "The fuck?"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": ""
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "Yea! The fuck you been doing, homey?"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "I gotta get new locks."
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(waving him off, looking around)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "You got cables, bro? Some dude under your hood wants them."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "What dude?"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": ""
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "I dunno, some dude. Sorry. You didn't say your car was fucked."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Yes I did."
      },
      {
        "t": "dir",
        "txt": "(to audience)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Did I?"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(points at bong)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "I'm gonna smoke."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(moving toward door)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Go ahead. Did he give you a name or anything?"
      },
      {
        "t": "dir",
        "txt": "(CHARLEY moves to door/window area. MASON is visible in the car area, fiddling with something. CHARLEY turns back. NICK goes through CHARLEY's empty wallet, loads the bong with CHARLEY's stash, then takes some for himself.)"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Mason?"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Charley!"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(frustrated)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Nick!"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": ""
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "Bro."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Do you have jumper cables? And a wire brush?"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": ""
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "The fuck would I have that shit for?"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(exploding)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "BECAUSE I ASKED YOU FOR A JUMP! I asked you about asking your Uber driver."
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": ""
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "I didn't get an Uber. One of my bitches brought me."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Did your bitch have—"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": ""
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "Oh, she definitely did. She's always got car shit. Extra tire, tools, the works."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(to MASON)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Nick's friend has — had — cables."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "And a wire brush?"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": ""
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "Probably. Hey man, I'm Nick."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Mason."
      },
      {
        "t": "dir",
        "txt": "(to CHARLEY)"
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Charley?"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Can you get her back here?"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": ""
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "Nah man. Not my style."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Nick!"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(dismissive)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "Man, I just need a ride. You said you needed something too. I thought we were trading."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "My car doesn't work! How am I supposed to—"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(lighting up)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "That's on you, bro. I got here, didn't I? You can't follow through, that's your problem."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "It's your problem now too. Call your bitch."
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": ""
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "What? For a ride? Man, don't do me like that."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Call her for her cables—"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "And a wire brush."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "And a wire brush."
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(aggressive)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "Man, fuck you. You asked ME for help. I been good to you. I'm gonna call her all right, but to get TF out of here. Stupid cracker. Fuck this."
      },
      {
        "t": "dir",
        "txt": "(to MASON, giving a convivial hand slap and a hug)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "Hey, we tight, my boy. You need anything, I got the hook up."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Right right. Good to meet you."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Nick! NICK! YO!"
      },
      {
        "t": "dir",
        "txt": "(NICK exits, slamming door. CHARLEY stands there, breathing hard. His phone immediately starts buzzing.)"
      },
      {
        "t": "dir",
        "txt": "(DONG. DONG. DONG.)"
      },
      {
        "t": "dir",
        "txt": "(CHARLEY looks at phone. NICK's texts appearing rapid-fire.)"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(from offstage, speaking his texts)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "Fuck you. You ain't shit."
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "Fake ass bitch."
      },
      {
        "t": "dir",
        "txt": "(CHARLEY turns phone face-down on table, hands shaking.)"
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "dir",
        "txt": "(He picks it back up.)"
      },
      {
        "t": "cue",
        "who": "ANDY",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "Hey man, I'm gonna call it. Too late. Maybe another time."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(defeated)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "No. No no no no."
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "See if I ask for anything again."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Oh thank god!"
      },
      {
        "t": "dir",
        "txt": "(switches)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Not you, Andy, hold up—"
      },
      {
        "t": "dir",
        "txt": "(typing frantically)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "No I'm good! C2's almost here! Ten minutes!"
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "cue",
        "who": "ANDY",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "It's been like a few hours, bro. It's cool. Hit me up sometime."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "No, please, I—"
      },
      {
        "t": "dir",
        "txt": "(typing)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Please. I really want to meet you. It's just been—"
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "cue",
        "who": "ANDY",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "No worries. Take care."
      },
      {
        "t": "dir",
        "txt": "(ANDY exits the background space entirely — gone.)"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(staring at phone)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Fuck."
      },
      {
        "t": "sound",
        "txt": "DONG"
      },
      {
        "t": "cue",
        "who": "NICK",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "NICK",
        "txt": "I'm good people to have, bro."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(to phone)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "STOP!"
      },
      {
        "t": "dir",
        "txt": "(He turns phone completely off. Silence. Blessed, terrible silence.)"
      },
      {
        "t": "dir",
        "txt": "(CHARLEY sits on couch, head in hands. After a moment, MASON re-enters from outside.)"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Your friend isn't coming back."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(looking up)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "What?"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Charley Too. He's not coming back. Not tonight."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(standing)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "What are you talking about? He called. He said ten minutes. That was—"
      },
      {
        "t": "dir",
        "txt": "(checks phone, realizes it's off)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Shit."
      },
      {
        "t": "dir",
        "txt": "(turns phone back on)"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "It's been a while."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Longer than ten minutes."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Yea, he dropped me off this morning."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(frustrated)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "What time is it?"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Not this morning."
      },
      {
        "t": "dir",
        "txt": "(Phone turns on. Immediately: BING. BING. BING. DONG. DONG. DING.)"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(frantic, scrolling)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Why didn't he call me?"
      },
      {
        "t": "dir",
        "txt": "(finds message from C2)"
      },
      {
        "t": "cue",
        "who": "C2",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "C2",
        "txt": "Bro sorry emergency came up. Tomorrow?"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(reading aloud)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "\"Emergency.\""
      },
      {
        "t": "dir",
        "txt": "(holds the phone up)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Twenty minutes ago. At the Manhole."
      },
      {
        "t": "dir",
        "txt": "(He looks at MASON.)"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "What's the — man — is this a gay thing?"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "It's the gay bar with the — you know —"
      },
      {
        "t": "dir",
        "txt": "(makes obscene gesture with his hips)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "In the back."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "So that's where he needed to be."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "I needed that too."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Then you would have been there. Now turn off your phone."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "What?"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Turn it off. Be present. You did it a moment ago. You set it down."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(looking at phone in his hand)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Right — it's not — always in my hand."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "And how did you feel?"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(confused)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Light."
      },
      {
        "t": "dir",
        "txt": "(Beat.)"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "I should go. My girl's waiting."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Yeah. Okay."
      },
      {
        "t": "dir",
        "txt": "(MASON moves toward door, then stops.)"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "The terminals are cleaned. I used an old Brillo I found under the sink."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "It's fixed?"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "It needs a jump. Maybe. Depends on what you want to do."
      },
      {
        "t": "dir",
        "txt": "(MASON exits.)"
      },
      {
        "t": "sound",
        "txt": "DING"
      },
      {
        "t": "cue",
        "who": "MOM",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "MOM",
        "txt": "Sorry I missed you 🙂 We're making eggplant parmesan tomorrow. Dad asks if you'll be coming."
      }
    ]
  },
  {
    "n": 6,
    "title": "Meditation",
    "synopsis": "Mason teaches Charley to sit, breathe, and eat — while Andy and the roommate pull up outside.",
    "entries": [
      {
        "t": "dir",
        "txt": "(MASON re-enters quietly.)"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "You're still holding it."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(startled)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "I thought you left."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "My girl's still not ready."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "She doesn't seem to need you around."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": "(sits on floor, cross-legged)"
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "She acts like she wants it, though."
      },
      {
        "t": "dir",
        "txt": "(thoughtful)"
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Maybe you're right, though. But come. Sit."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "What?"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Sit."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(laughing)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "What — are we going to open my chakras and say Om?"
      },
      {
        "t": "dir",
        "txt": "(Beat.)"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Yes."
      },
      {
        "t": "dir",
        "txt": "(Beat. CHARLEY sits slowly.)"
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "We're going to meditate and concentrate, but you're a beginner — that's advanced stuff."
      },
      {
        "t": "dir",
        "txt": "(CHARLEY hesitates, then awkwardly sits across from MASON, cross-legged.)"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "How hard can this be, right?"
      },
      {
        "t": "dir",
        "txt": "(Sees MASON look at him.)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Like this?"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Close your eyes."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "This is ridiculous."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Close. Your. Eyes."
      },
      {
        "t": "dir",
        "txt": "(CHARLEY closes his eyes. Immediately opens one.)"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Now what?"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Breathe. Just breathe."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(eyes closed)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "I am breathing. I've been breathing my whole life. I'm pretty good at—"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Shh. Deep breath in. Hold it. Let it out."
      },
      {
        "t": "dir",
        "txt": "(CHARLEY takes an exaggerated breath in, holds it, then lets it out with a loud whooshing sound.)"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Less dramatic."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "This is how I breathe."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "It is how a cartoon version of you breathes."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(eyes still closed)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "I am not a cartoon — just a dramatic breather."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Then breathe like you're trying to sleep."
      },
      {
        "t": "dir",
        "txt": "(They sit in silence for a moment. CHARLEY starts fidgeting.)"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "How long do we—"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Shh."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "My leg is falling asleep."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Let it."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "That seems counterproductive. Like, shouldn't I be comfortable?"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "You're making this ridiculous."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(opening eyes)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "I said—"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "I know what you said. I am repeating it back to you. Now close your eyes."
      },
      {
        "t": "dir",
        "txt": "(CHARLEY closes his eyes again. Silence. Then:)"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Is your girlfriend really just down the street?"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Yes."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "And she's cool with you being here this long?"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "She's cool with me being where I need to be."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "That's healthy."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Now you're getting it. Breathe."
      },
      {
        "t": "dir",
        "txt": "(They sit. CHARLEY is visibly struggling to stay still. His nose itches. He scratches it. His leg twitches. He adjusts his position. MASON remains perfectly still.)"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(opening one eye)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Are you asleep?"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "No."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "You look dead."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "That's the goal."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "How is that a goal? Isn't that inevitable?"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "And accepting that inevitability is part of it."
      },
      {
        "t": "dir",
        "txt": "(On the table, CHARLEY's phone lights up: DING. CHARLEY's eyes snap to it.)"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": "(without opening eyes)"
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Don't."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "I wasn't going to."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Turn off the vibration, too, and turn it upside down."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "But—"
      },
      {
        "t": "dir",
        "txt": "(Holds down the side button.)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Off."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Good."
      },
      {
        "t": "dir",
        "txt": "(We see a text notification from ANDY: \"Roommate changed his mind, on our way.\" CHARLEY doesn't read it — just switches it to silent and places it face-down.)"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "There."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Now breathe."
      },
      {
        "t": "dir",
        "txt": "(They sit. Silence. Real silence now — no DINGS, no DONGS. Just breathing. CHARLEY actually starts to settle. His shoulders drop. His face relaxes. For a moment, genuine peace.)"
      },
      {
        "t": "dir",
        "txt": "(Then his stomach GROWLS. Loudly.)"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(opening eyes)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Okay, I can't. I'm starving."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": "(opening eyes)"
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "When did you eat last?"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "I… (thinks) …I don't know. Breakfast? Maybe?"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "You know the sun set an hour or two ago."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Did it?"
      },
      {
        "t": "dir",
        "txt": "(looks toward phone, stops himself)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "I was busy."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Doing what?"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(looks around)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "I don't know. Nothing, it feels like."
      },
      {
        "t": "dir",
        "txt": "(heads toward kitchen)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "I need food."
      },
      {
        "t": "dir",
        "txt": "(CHARLEY stands, stretches, heads to kitchen area.)"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Aren't you the hedonist."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(rummaging through cabinets)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "I'm hungry. I haven't eaten. Hedonism is — more than that."
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "And wouldn't I be deriving some pleasure out of this?"
      },
      {
        "t": "dir",
        "txt": "(CHARLEY starts pulling out food: chips, cookies, bread, peanut butter, leftovers. He brings armfuls back to the couch and starts eating.)"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": "(watching)"
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Maybe. Or you might just be eating for the dopamine."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(mouth full)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Have you eaten?"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Yes, several times."
      },
      {
        "t": "dir",
        "txt": "(He continues eating. MASON watches quietly as CHARLEY methodically works through the pile of food. Chips. Cookies. A spoonful of peanut butter straight from the jar. Cold pizza.)"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Can I have a cookie, maybe?"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(maniacal laughter)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Join me in my hedonistic orgy of gastronomical delights!"
      },
      {
        "t": "dir",
        "txt": "(very proper)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "But of course. What kind would you like?"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Never mind. It doesn't seem gastronomically delightful with that tone."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(dramatically)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Are you fat-shaming me?"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Who said fat?"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(standing up with food)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Just — well, whenever I eat I feel like people are watching."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Do you see a professional?"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "For what?"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "For everything."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "I saw a meditation guru today."
      },
      {
        "t": "dir",
        "txt": "(quieter, still eating)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "…I deserve a snack."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "You do. You're right. I was being judgey."
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Thank you. I was being ridiculous earlier."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": "(unexpected smile)"
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Thank you."
      },
      {
        "t": "dir",
        "txt": "(CHARLEY continues eating, less aggressively now. He's methodical about it. Cookie. Chips. More peanut butter. After a moment:)"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "I need to pee."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "I'll be here."
      },
      {
        "t": "dir",
        "txt": "(CHARLEY gets up, heads to bathroom. MASON remains on the couch, scrolling through his own phone. A knock at the door. MASON looks up. Knock again.)"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": "(calling toward bathroom)"
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "You expecting someone?"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(from bathroom, muffled)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "What?"
      },
      {
        "t": "dir",
        "txt": "(Knock again. MASON gets up, goes to the door, opens it. ANDY and ROOMMATE stand there. Both are attractive, eager.)"
      },
      {
        "t": "cue",
        "who": "ANDY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "Yo, bro! Ready? Roommate's in the car. Wanna do it here or go back?"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": "(confused, looking back toward the bathroom)"
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Uh… I guess not here."
      },
      {
        "t": "cue",
        "who": "ANDY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "Yea, man, I got a joint. We'll smoke it on the way back. I feel the need to get high."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": "(smiling)"
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Me too. I feel it, too."
      },
      {
        "t": "cue",
        "who": "ANDY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "You're way hotter than your pics, man."
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": ""
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Oh. Uh… Thanks."
      },
      {
        "t": "cue",
        "who": "ANDY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "ANDY",
        "txt": "Let's roll."
      },
      {
        "t": "dir",
        "txt": "(MASON hesitates for just a second, looks back one more time toward the apartment, then steps out with them.)"
      },
      {
        "t": "cue",
        "who": "MASON",
        "stage": "(as he exits)"
      },
      {
        "t": "line",
        "who": "MASON",
        "txt": "Cool."
      },
      {
        "t": "dir",
        "txt": "(The door closes behind them. The apartment is empty. Silence. Toilet flushes. Water runs. CHARLEY emerges from the bathroom.)"
      }
    ]
  },
  {
    "n": 7,
    "title": "Alone",
    "synopsis": "Charley returns to an empty apartment, 23 unread messages, and one small deliberate act: he powers off.",
    "entries": [
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "dir",
        "txt": "(entering living room)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Okay, so I was thinking maybe we could try that meditation thing again, but with less—"
      },
      {
        "t": "dir",
        "txt": "(He stops. Looks around. Empty apartment.)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Mason?"
      },
      {
        "t": "dir",
        "txt": "(Silence.)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Mason?"
      },
      {
        "t": "dir",
        "txt": "(He walks to the door, opens it, looks out. Nothing. Closes door. Looks around the apartment. The bong is still on the table. The food wrappers. His phone, face-down and silent.)"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": "(to himself)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Huh."
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "(He walks to the couch, sits down. Picks up the bong. Lights it. Takes a long hit. Exhales slowly. Sets it down. Stares at the phone."
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "After a moment, he reaches for it. Picks it up. Turns it over. The screen lights up: 23 unread messages. He starts at the top.)"
      },
      {
        "t": "cue",
        "who": "MOM",
        "stage": "(text, displayed)"
      },
      {
        "t": "line",
        "who": "MOM",
        "txt": "Just wanted to say I love you before we go to bed. Call me tomorrow and come to dinner. We miss you! Good night!"
      },
      {
        "t": "dir",
        "txt": "(CHARLEY scrolls past them all. Doesn't open a single one. Reaches the last notification. Pauses. Then, deliberately, holds down the power button.)"
      },
      {
        "t": "cue",
        "who": "CHARLEY",
        "stage": ""
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Tomorrow, sure, Mom. Tomorrow."
      },
      {
        "t": "dir",
        "txt": "(Screen prompt: \"Power Off?\")"
      },
      {
        "t": "dir",
        "txt": "(He taps \"OK.\" The screen goes dark.)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "(CHARLEY sets the phone on the table. Looks at it. Leans back on the couch. Grabs a blanket from the back, pulls it over himself. Adjusts a pillow. Gets comfortable."
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "He closes his eyes. His breathing slows. The stage is quiet. Peaceful. No dings. No dongs. No voices. Just CHARLEY, asleep on his couch, phone dark beside him."
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "Lights slowly fade. In the silence, we hear only his breathing. Soft. Even. Present.)"
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "BLACKOUT."
      },
      {
        "t": "line",
        "who": "CHARLEY",
        "txt": "END OF PLAY"
      }
    ]
  }
];
