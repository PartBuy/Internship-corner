function FounderStoryCard() {
  return (
    <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-slate-700 bg-slate-900/70 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex items-center gap-3">
        <div className="h-12 w-12 rounded-full bg-slate-600" />
        <div>
          <p className="text-sm font-semibold text-slate-100">Amin</p>
          <p className="text-xs text-slate-400">Founder, TRAIL</p>
        </div>
      </div>
      <div className="prose prose-invert prose-sm max-w-none text-slate-100">
        <p>
          TRAIL started as a simple way to keep our own experiments from getting
          lost in docs and dashboards.
        </p>
        <p>
          We needed a single trail map that showed which missions were live,
          who owned them, and what success actually meant.
        </p>
        <p>
          This product is us open-sourcing that playbook so more teams can move
          faster with less chaos.
        </p>
        <p className="mt-4 text-sm font-medium text-slate-300">— Amin</p>
      </div>
    </div>
  );
}

export default FounderStoryCard;
