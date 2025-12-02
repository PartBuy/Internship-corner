type Outcome = {
  title: string;
  description: string;
};

type OutcomeCardProps = {
  outcome: Outcome;
};

function OutcomeCard({ outcome }: OutcomeCardProps) {
  return (
    <div className="rounded-lg border border-slate-700 bg-slate-900/60 p-4 text-white shadow-sm">
      <div className="mb-2 h-8 w-8 rounded-full bg-slate-700" />
      <h3 className="mb-1 text-lg font-semibold">{outcome.title}</h3>
      <p className="text-sm text-slate-300">{outcome.description}</p>
    </div>
  );
}

export default OutcomeCard;
export type { Outcome };
