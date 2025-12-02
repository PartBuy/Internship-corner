import "./index.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Button from "./Button";
import OutcomeCard from "./OutcomeCard";
import type { Outcome } from "./OutcomeCard";
import FounderStoryCard from "./FounderStoryCard";
import FaqSection from "./FaqSection";
import Footer from "./Footer";

const outcomes: Outcome[] = [
  {
    title: "Signal Clarity",
    description: "Players see exactly which missions matter right now and why.",
  },
  {
    title: "Faster Experiments",
    description: "Teams can launch, track, and learn from new ideas in days.",
  },
  {
    title: "Shared Playbook",
    description: "Everyone works from the same trail map, not scattered docs.",
  },
];

function Page({ title }: { title: string }) {
  const isHome = title === "Home";

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center bg-slate-900 text-white px-4">
      <h1 className="text-3xl font-bold mb-8">{title}</h1>

      <div className="flex gap-4 mb-10">
        <Button variant="primary">Initiate Waitlist</Button>
        <Button variant="secondary">Talk to Amin</Button>
        <Button variant="tertiary">Book a Pilot</Button>
      </div>

      {isHome && (
        <>
          <div className="grid w-full max-w-5xl gap-6 grid-cols-1 md:grid-cols-3">
            {outcomes.map((outcome) => (
              <OutcomeCard key={outcome.title} outcome={outcome} />
            ))}
          </div>
          <FounderStoryCard />
          <FaqSection />
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Page title="Home" />} />
        <Route path="/how-it-works" element={<Page title="How" />} />
        <Route path="/waitlist" element={<Page title="Waitlist" />} />
        <Route path="/players" element={<Page title="Players" />} />
        <Route path="/creators" element={<Page title="Creators" />} />
        <Route path="/enterprise" element={<Page title="Enterprise" />} />
        <Route path="/blog" element={<Page title="Blog" />} />
        <Route path="/resources" element={<Page title="Resources" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
