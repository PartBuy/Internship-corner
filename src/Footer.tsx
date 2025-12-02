function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Top link columns */}
        <div className="grid gap-8 md:grid-cols-4 text-sm">
          <div>
            <h3 className="mb-3 font-semibold text-white">Company</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">About TRAIL</a></li>
              <li><a href="#" className="hover:underline">Dubai Gaming License</a></li>
              <li><a href="#" className="hover:underline">Press Kit</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-white">Platform</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">How It Works</a></li>
              <li><a href="#" className="hover:underline">6 Auction Types</a></li>
              <li><a href="#" className="hover:underline">Club System</a></li>
              <li><a href="#" className="hover:underline">Puzzle Progression</a></li>
              <li><a href="#" className="hover:underline">XP &amp; PBT Economy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-white">Resources</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Amin.chat (AI Guide)</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-white">Community</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Telegram</a></li>
              <li><a href="#" className="hover:underline">X / Twitter</a></li>
              <li><a href="#" className="hover:underline">YouTube</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">TikTok</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-4 text-xs text-slate-400 md:flex-row">
          <div className="flex flex-wrap items-center gap-2">
            <span>TRAIL</span>
            <span>© 2025 PartBuy. All rights reserved.</span>
            <span className="rounded-full border border-slate-600 px-2 py-0.5 text-[10px] uppercase tracking-wide">
              Built in Dubai
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3 text-sm">
              <a href="#" aria-label="Telegram">TG</a>
              <a href="#" aria-label="Twitter">X</a>
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="YouTube">YT</a>
              <a href="#" aria-label="TikTok">TT</a>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
