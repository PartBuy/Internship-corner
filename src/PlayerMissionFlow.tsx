type PlayerMissionStepProps = {
  title: string;
  description: string;
};

function PlayerMissionStep({ title, description }: PlayerMissionStepProps) {
  return (
    <div className="flex flex-col items-start gap-3 rounded-xl border border-slate-700 bg-slate-900/70 p-4">
      {/* Icon placeholder */}
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800">
        <span className="text-sm font-semibold text-slate-200">
          {title[0]}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-slate-300">{description}</p>
    </div>
  );
}

const playerSteps: PlayerMissionStepProps[] = [
  {
    title: "Before",
    description:
      "Placeholder: You scan the map, read the brief, and decide which missions match your goals.",
  },
  {
    title: "During",
    description:
      "Placeholder: You coordinate with your club, place bids, solve puzzles, and adjust as signals change.",
  },
  {
    title: "After",
    description:
      "Placeholder: You review what worked, what you missed, and how your XP and PBT changed.",
  },
];

function PlayerMissionFlow() {
  return (
    <section className="mx-auto mt-12 max-w-5xl px-4">
      <h2 className="mb-4 text-center text-xl font-semibold text-white">
        Player Mission Playbook: Before → During → After
      </h2>
      <div className="flex flex-col items-stretch gap-4 md:flex-row">
        {playerSteps.map((step) => (
          <PlayerMissionStep
            key={step.title}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
}

export default PlayerMissionFlow;
