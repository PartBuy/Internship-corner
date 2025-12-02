import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "01 — What does TRAIL simulate at the system level?",
    answer:
      "TRAIL simulates coordination, competition, and information asymmetry — the same forces that govern markets, drops, auctions, asset launches, communities, and real-world power structures.\n\nYou’re not just “playing.”\nYou’re learning how systems behave when timing, scarcity, and incentives collide.",
  },
  {
    question: "02 — What is the primary skill TRAIL is designed to develop?",
    answer:
      "Situational awareness.\nNot hype.\nNot guessing.\nNot scrolling.\n\nTRAIL trains you to read signals, position early, time your moves, and out-coordinate the crowd.",
  },
  {
    question: "03 — Why auctions? Why puzzles? Why clubs?",
    answer:
      "Each mechanic represents a different discipline:\n• Auctions → Timing, pressure, bidding psychology\n• Puzzles → Logic, decoding, attention to detail\n• Clubs → Coordination, leadership, internal competition\n\nTogether, they form a unified progression system that mirrors how advantage works in real life.",
  },
  {
    question: "04 — Is TRAIL a Web3 product or not?",
    answer:
      "TRAIL is Web3-literate without requiring users to touch blockchain.\n\nIt teaches:\n• value signals\n• market structure\n• tokenized logic\n• supply & demand pressure\n• governance dynamics\n\nBut without:\n• wallets\n• tokens\n• risk\n• financial speculation\n\nIt is the education layer without the exposure layer.",
  },
  {
    question: "05 — What is the real reason XP exists?",
    answer:
      "XP is a proof-of-effort system.\nIt separates noise from signal by rewarding:\n• consistency\n• execution\n• participation\n• problem-solving\n• adaptability\n\nIt’s not just progression.\nIt’s classification.",
  },
  {
    question: "06 — Why is PBT separate from XP?",
    answer:
      "Because power is multi-dimensional.\nPBT measures resource allocation.\nXP measures mastery and effort.\n\nYou cannot brute-force your way to the top with only one.",
  },
  {
    question: "07 — Why are there tiers?",
    answer:
      "Tiers make status visible and earned, not self-proclaimed.\n\nIn TRAIL, tier =\n• access\n• priority\n• trust\n• capability\n• influence\n• perceived competence\n\nJust like in real systems — the world is tiered, even when people pretend it isn’t.",
  },
  {
    question: "08 — How does TRAIL decide what users see first?",
    answer:
      "TRAIL uses a sequence-based reveal system:\n1. You see what your tier permits.\n2. You see what your consistency unlocks.\n3. You see what your actions justify.\n\nNothing is random.\nEverything is earned.",
  },
  {
    question: "09 — Why do drops have tactical notes?",
    answer:
      "Because most people don’t know why they miss opportunities.\nTRAIL makes you confront your timing errors, reading errors, and coordination gaps.\n\nThe notes don’t tell you what to do — they tell you why timing matters.",
  },
  {
    question: "10 — Why does TRAIL intentionally avoid hype?",
    answer:
      "Because hype makes people careless.\nTRAIL rewards precision, not excitement.\n\nThe absence of noise is part of the training.",
  },
  {
    question: "11 — Does TRAIL use AI?",
    answer:
      "Yes — but not in the way users expect.\n\nAI appears as:\n• guidance\n• observation\n• commentary\n• environmental reaction\n\nNever as a shortcut.\nAmin accelerates thinking, not outcomes.",
  },
  {
    question: "12 — Why do clubs matter so much?",
    answer:
      "Because coordination is the final boss.\n\nTRAIL shows you:\n• who leads\n• who follows\n• who plans\n• who panics\n• who contributes\n• who disappears under pressure\n\nClubs reveal user behavior at scale.",
  },
  {
    question: "13 — Why is there always a “map” in TRAIL?",
    answer:
      "Because unstructured systems don’t teach anything.\nThe map gives structure to chaos — a way to read progression, momentum, and hidden logic.\n\nThe map shows where you are, not just where you want to go.",
  },
  {
    question: "14 — Is there an endgame in TRAIL?",
    answer:
      "No.\nThere are only:\n• new levels\n• new puzzles\n• new tiers\n• new clubs\n• new events\n• new competitions\n• new challenges\n\nTRAIL is built as an infinite simulation.\nThe more you learn, the more the system evolves.",
  },
  {
    question: "15 — What is the ultimate skill TRAIL builds?",
    answer:
      "Not timing.\nNot puzzle-solving.\nNot bidding strategy.\n\nThe ability to read a system faster than everyone else.\nThis is the one advantage that transfers everywhere — business, markets, social dynamics, leadership, strategy.\n\nThis is the core of TRAIL.",
  },
];

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="mx-auto mt-12 max-w-3xl space-y-2">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="rounded-lg border border-slate-700 bg-slate-900/70"
          >
            <button
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-slate-100"
              onClick={() => toggle(index)}
            >
              <span>{item.question}</span>
              <span>{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <div className="px-4 pb-3 text-sm text-slate-300">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FaqSection;
