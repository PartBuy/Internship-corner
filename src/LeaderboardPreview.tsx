type LeaderRow = {
  rank: number;
  name: string;
  xp: number;
};

const rows: LeaderRow[] = [
  { rank: 1, name: "Player-01", xp: 12890 },
  { rank: 2, name: "Player-02", xp: 11750 },
  { rank: 3, name: "Player-03", xp: 10980 },
  { rank: 4, name: "Player-04", xp: 9870 },
  { rank: 5, name: "Player-05", xp: 9420 },
  { rank: 6, name: "Player-06", xp: 8910 },
  { rank: 7, name: "Player-07", xp: 8560 },
  { rank: 8, name: "Player-08", xp: 8320 },
  { rank: 9, name: "Player-09", xp: 7990 },
  { rank: 10, name: "Player-10", xp: 7650 },
];

function LeaderboardPreview() {
  return (
    <section className="mx-auto mt-12 max-w-3xl px-4">
      <h2 className="mb-4 text-center text-xl font-semibold text-white">
        Leaderboard Preview
      </h2>

      <div className="overflow-x-auto rounded-xl border border-slate-700 bg-slate-900/70">
        <table className="min-w-full text-left text-sm text-slate-200">
          <thead className="bg-slate-900/90 text-xs uppercase tracking-wide text-slate-400">
            <tr>
              <th className="px-4 py-3">Rank</th>
              <th className="px-4 py-3">Player</th>
              <th className="px-4 py-3 text-right">XP</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const isTopThree = row.rank <= 3;
              return (
                <tr
                  key={row.rank}
                  className="even:bg-slate-800/60"
                >
                  <td className="px-4 py-2">
                    <span className="mr-2 font-semibold">#{row.rank}</span>
                    {isTopThree && (
                      <span className="inline-flex items-center rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-300">
                        🏆
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-2 font-medium">{row.name}</td>
                  <td className="px-4 py-2 text-right tabular-nums">
                    {row.xp.toLocaleString()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default LeaderboardPreview;
