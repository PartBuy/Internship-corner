type ReferralRow = {
  tier: string;
  reward: string;
  isTop?: boolean;
};

const rows: ReferralRow[] = [
  { tier: "1–10 referrals", reward: "Base PBT + 5% XP boost" },
  { tier: "11–50 referrals", reward: "Bonus PBT + 10% XP boost" },
  {
    tier: "51+ referrals",
    reward: "Premium PBT + 20% XP boost",
    isTop: true,
  },
];

function ReferralRatesTable() {
  return (
    <section className="mx-auto mt-8 max-w-3xl px-4">
      <h2 className="mb-3 text-xl font-semibold text-white">
        Creator Referral Rates
      </h2>
      <div className="overflow-x-auto rounded-xl border border-slate-700 bg-slate-900/70">
        <table className="min-w-full text-left text-sm text-slate-200">
          <thead className="bg-slate-900/90 text-xs uppercase tracking-wide text-slate-400">
            <tr>
              <th className="px-4 py-3">Referral tier</th>
              <th className="px-4 py-3">Reward</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.tier}
                className={
                  row.isTop
                    ? "bg-emerald-900/40"
                    : "even:bg-slate-800/60"
                }
              >
                <td className="px-4 py-2">
                  <span className="font-medium">{row.tier}</span>
                  {row.isTop && (
                    <span className="ml-2 inline-flex items-center rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">
                      Elite
                    </span>
                  )}
                </td>
                <td className="px-4 py-2 text-slate-200">{row.reward}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ReferralRatesTable;
