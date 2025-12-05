type TimelineStepProps = {
  title: string;
  description: string;
};

function TimelineStep({ title, description }: TimelineStepProps) {
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

export default TimelineStep;
