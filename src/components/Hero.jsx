import { Sparkles, ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -top-10 right-0 h-[400px] w-[400px] rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_-20%,rgba(255,255,255,0.08),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Sparkles className="h-3.5 w-3.5 text-fuchsia-300" />
            <span>Introducing Glimmer v1.0</span>
          </div>
          <h1 className="text-balance bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl bg-gradient-to-b from-white to-white/70">
            Light up your product with Glimmer
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
            Glimmer is the elegant way to craft, launch, and scale delightful user experiences—fast. Build with clarity, ship with confidence, and let your product shine.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110"
            >
              Start for free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              <Play className="h-4 w-4" />
              Watch demo
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-3 shadow-2xl">
          <div className="rounded-lg bg-neutral-950/60 p-6 ring-1 ring-inset ring-white/10">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm font-medium text-white/80">Realtime Preview</div>
                <div className="text-xs text-white/50">A glimpse of how Glimmer feels in action</div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <Stat label="Time to first value" value="< 5 min" />
              <Stat label="Uptime" value="99.99%" />
              <Stat label="Customer love" value="NPS 72" />
            </div>
            <div className="mt-6 rounded-lg border border-white/10 bg-neutral-900/50 p-4">
              <div className="text-xs text-white/60">Snippet</div>
              <pre className="mt-2 overflow-x-auto rounded-md bg-black/60 p-4 text-[12px] leading-relaxed text-white/90">
{`import { Glimmer } from 'glimmer';

const app = new Glimmer();
app.launch({
  theme: 'luminous',
  features: ['realtime', 'ai', 'analytics']
});`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
      <div className="text-xs text-white/60">{label}</div>
      <div className="mt-1 text-lg font-semibold text-white">{value}</div>
    </div>
  );
}
