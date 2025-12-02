import { useState } from "react";
import { Link } from "react-router-dom";

export type RoutePath =
  | "/"
  | "/how-it-works"
  | "/waitlist"
  | "/players"
  | "/creators"
  | "/enterprise"
  | "/blog"
  | "/resources";

interface NavItem {
  to: RoutePath;
  label: string;
}

const navLinks: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/how-it-works", label: "How" },
  { to: "/waitlist", label: "Waitlist" },
  { to: "/players", label: "Players" },
  { to: "/creators", label: "Creators" },
  { to: "/enterprise", label: "Enterprise" },
  { to: "/blog", label: "Blog" },
  { to: "/resources", label: "Resources" },
];

function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-slate-950 text-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="font-bold">TRAIL</div>
        {/* Desktop links */}
        <div className="hidden gap-4 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm hover:text-cyan-400"
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Mobile hamburger */}
        <button
          className="md:hidden rounded border border-slate-400 px-2 py-1 text-sm"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col gap-2 border-t border-slate-800 bg-slate-950 px-4 py-3 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm hover:text-cyan-400"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navigation;
