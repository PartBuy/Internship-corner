import { useState } from "react";

type GlossaryItem = {
  term: string;
  definition: string;
};

const items: GlossaryItem[] = [
  {
    term: "XP",
    definition:
      "Placeholder: XP is the progression metric that tracks your effort and activity inside TRAIL.",
  },
  {
    term: "PBT",
    definition:
      "Placeholder: PBT represents the resource layer that controls what you can allocate or deploy.",
  },
  {
    term: "Club Tier",
    definition:
      "Placeholder: Club Tier shows how far your club has advanced and what access level it has unlocked.",
  },
  {
    term: "Verified Claim",
    definition:
      "Placeholder: A Verified Claim is a statement or result that TRAIL has checked against its internal rules.",
  },
  {
    term: "Auction",
    definition:
      "Placeholder: Auctions are timed events where players compete for limited rewards or access.",
  },
  {
    term: "Puzzle",
    definition:
      "Placeholder: Puzzles are logic or pattern challenges that reward accuracy and attention to detail.",
  },
];

function Glossary() {
  const [open, setOpen] = useState<boolean[]>(() =>
    items.map(() => false)
  );

  const toggle = (index: number) => {
    setOpen((prev) =>
      prev.map((value, i) => (i === index ? !value : value))
    );
  };

  return (
    <section className="mx-auto mt-12 max-w-3xl px-4">
      <h2 className="mb-4 text-center text-xl font-semibold text-white">
        Glossary
      </h2>
      <div className="space-y-2">
        {items.map((item, index) => {
          const isOpen = open[index];
          return (
            <div
              key={item.term}
              className="rounded-lg border border-slate-700 bg-slate-900/70"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-slate-100"
              >
                <span>{item.term}</span>
                <span>{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div className="px-4 pb-3 text-sm text-slate-300">
                  {item.definition}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Glossary;
