# Trial log — One Line, One Chill (six-prog-2 #1)

- Competition: `u-azazex-one-line-one-chill-6d4d5488` — "One Line, One Chill", $5, deadline 27 Nov 01:15 WITA.
- Gate: entry.txt 1–200 chars UTF-8. Judge: pairwise, frightening first, then vivid, original, crafted.
- Field at research (25 Nov 01:49 WITA): 425 submissions, 290 unique titles, 123 placeholder "One Line, One Chill", 52 sentence-length real lines (all read).

## Angle research
Saturated families (all 52 sentences read): baby monitor / nursery voice, voicemail from own number / own voice, photo of self asleep at foot of bed (4 variants), ultrasound two heartbeats, dog staring at empty chair + warm seat, dead relative calls/returns, child drawing extra person, reflection waves back, teeth, smart lock entries/no exits, MRI handprint inside skull, elevator man wearing my coat/shoes/ring, tide returns shoe with note "your turn", black-box pilot "he has my face", night-nurse log in my handwriting.

Candidates (dup-check max difflib ≤ 0.47, Jaccard ≤ 0.18 — all pass):
- STAIRS (chosen): "Every night I count thirteen steps to my bedroom; tonight I counted fourteen, and the fourteenth was breathing." (111 chars). Stairs 0 hits as a mechanism; counting echo exists (dinner-table count, ultrasound finger count) but object + turn are fresh — an inanimate step breathing. Last word "breathing" lands the blow.
- Snow (backup): "The snow stopped hours ago, but the footprints outside my window keep getting closer." (85 chars, 0 hits snow/footprint; classic trope, weaker originality).
- Laundry (backup): "I folded the laundry and found a shirt I don't own, warm from the dryer, smelling of my cologne — the third one this week." (122 chars, 0 hits laundry/shirt/dryer; intruder-in-house family crowded).
- DISCARDED: smartwatch heart-stopped — near-identical title already exists ("My smartwatch counted 4,000 steps around my bed"); eye-test second pupil — eye-exam domain already claimed ("Slit-lamp eye-exam single-line chill"); dashcam back seat — back-seat killer is a famous urban legend.

## Trials
| v | change | check |
|---|--------|-------|
| v1 | main.ts + README (3 live badges, 0 static badges) + LICENSE + owner.json; first commit | bundle v1 + check — see below |
