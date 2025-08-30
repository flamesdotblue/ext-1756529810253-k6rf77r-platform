import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <div className="text-sm font-semibold tracking-tight text-white">Glimmer</div>
            <p className="mt-1 text-xs text-white/60">Light up your product. © {new Date().getFullYear()}</p>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs transition hover:bg-white/10"
            >
              <Twitter className="h-4 w-4" />
              Twitter
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs transition hover:bg-white/10"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="mailto:hello@glimmer.app"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs transition hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
