import { Sparkles, Zap, Shield, Globe } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Delight by design',
    desc: 'Beautiful defaults and refined micro-interactions so your product feels thoughtful from day one.'
  },
  {
    icon: Zap,
    title: 'Fast by default',
    desc: 'Lightweight components and smart caching deliver instant experiences at any scale.'
  },
  {
    icon: Shield,
    title: 'Secure foundation',
    desc: 'Built with privacy-first patterns and robust access controls you can trust.'
  },
  {
    icon: Globe,
    title: 'Global ready',
    desc: 'Internationalization, accessibility, and responsive layouts baked in—everywhere.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative border-t border-white/10">
      <div className="absolute inset-x-0 -top-24 mx-auto h-48 max-w-6xl bg-[radial-gradient(600px_80px_at_50%_10%,rgba(255,255,255,0.06),transparent)]" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Everything you need to shine</h2>
          <p className="mt-3 text-white/70">Glimmer gives you the essentials to craft experiences users remember and teams love.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <FeatureCard key={i} Icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ Icon, title, desc }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5 transition hover:from-white/[0.08]">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 ring-1 ring-inset ring-white/20">
        <Icon className="h-5 w-5 text-fuchsia-300" />
      </div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-white/70">{desc}</p>
      <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-fuchsia-500/10 blur-xl transition will-change-transform group-hover:scale-125" />
    </div>
  );
}
