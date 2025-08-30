import { Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400">
            <Sparkles className="h-5 w-5 text-white" />
          </span>
          <span className="text-lg font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-fuchsia-200 to-cyan-200">Glimmer</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#pricing" className="transition hover:text-white">Pricing</a>
          <a href="#about" className="transition hover:text-white">About</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#get-started"
            className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/90 shadow-sm transition hover:bg-white/10"
          >
            Sign in
          </a>
          <a
            href="#get-started"
            className="rounded-md bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-3 py-2 text-sm font-semibold text-black shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110"
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}
