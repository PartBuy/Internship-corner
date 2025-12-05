import "./index.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Button from "./Button";
import OutcomeCard from "./OutcomeCard";
import type { Outcome } from "./OutcomeCard";
import FounderStoryCard from "./FounderStoryCard";
import FaqSection from "./FaqSection";
import Footer from "./Footer";
import TimelineStep from "./TimelineStep";
import Glossary from "./Glossary";
import PlayerMissionFlow from "./PlayerMissionFlow";
import LeaderboardPreview from "./LeaderboardPreview";
import CreatorsProgramOverview from "./CreatorsProgramOverview";
import ReferralRatesTable from "./ReferralRatesTable";
import EnterprisePilotPack from "./EnterprisePilotPack";
import EnterpriseSecurityFaq from "./EnterpriseSecurityFaq";

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

const steps = [
  {
    title: "Alert",
    description:
      "You receive a clear signal that a new mission or drop is live.",
  },
  {
    title: "Action",
    description:
      "You decide how to respond — join, bid, solve, or coordinate with your club.",
  },
  {
    title: "Outcome",
    description:
      "You see the result of your timing and decisions in XP, PBT, and status.",
  },
];

function Page({ title }: { title: string }) {
  const isHome = title === "Home";
  const isPlayers = title === "Players";
  const isCreators = title === "Creators";
  const isEnterprise = title === "Enterprise";

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center bg-slate-900 text-white px-4">
      <h1 className="mb-8 text-3xl font-bold">{title}</h1>

      <div className="mb-10 flex gap-4">
        <Button variant="primary">Initiate Waitlist</Button>
        <Button variant="secondary">Talk to Amin</Button>
        <Button variant="tertiary">Book a Pilot</Button>
      </div>

      {isHome && (
        <>
          <div className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {outcomes.map((outcome) => (
              <OutcomeCard key={outcome.title} outcome={outcome} />
            ))}
          </div>

          <div className="mt-12 w-full max-w-5xl">
            <h2 className="mb-4 text-center text-xl font-semibold">
              How TRAIL Works: Alert → Action → Outcome
            </h2>
            <div className="flex flex-col items-stretch gap-4 md:flex-row">
              {steps.map((step) => (
                <TimelineStep
                  key={step.title}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
          </div>

          <FounderStoryCard />
          <FaqSection />
          <Glossary />
        </>
      )}

      {isPlayers && (
        <div className="w-full">
          <PlayerMissionFlow />
          <LeaderboardPreview />
        </div>
      )}

      {isCreators && (
        <div className="w-full">
          <CreatorsProgramOverview />
          <ReferralRatesTable />
        </div>
      )}

      {isEnterprise && (
        <div className="w-full">
          <EnterprisePilotPack />
          <EnterpriseSecurityFaq />
        </div>
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
