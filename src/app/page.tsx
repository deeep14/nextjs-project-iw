"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Github, Sparkles, Rocket, BookText, Boxes } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  // Spotlight that follows the cursor
  const [spot, setSpot] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-dvh overflow-hidden bg-gradient-to-b from-white to-white dark:from-[#0a0a0a] dark:to-[#010101] text-foreground"
    >
      {/* Background textures */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl opacity-30 animate-blob bg-fuchsia-500/40 dark:bg-fuchsia-500/20" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000 bg-cyan-500/40 dark:bg-cyan-500/20" />
        <div className="absolute left-1/2 bottom-0 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl opacity-30 animate-blob animation-delay-4000 bg-amber-500/40 dark:bg-amber-500/20" />
      </div>

      {/* Spotlight that follows the cursor */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${spot.x}px ${spot.y}px, rgba(120,119,198,0.18), transparent 40%)`,
        }}
      />

      {/* NAVBAR */}
      <nav className="sticky top-0 z-20 flex items-center justify-between border-b border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/30 backdrop-blur-xl px-6 py-4">
        <div className="flex items-center gap-3">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={36}
            height={12}
            priority
          />
          <span className="text-sm md:text-base font-semibold tracking-tight">
            Deepak<span className="text-muted-foreground">.dev</span>
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            <BookText className="h-4 w-4" /> Docs
          </a>
          <a
            href="https://github.com/vercel/next.js"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative z-10 mx-auto max-w-6xl px-6 pt-16 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center md:items-start md:text-left"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-1 backdrop-blur">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs font-medium tracking-wide">Next.js • Tailwind • Spice</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[0.95]">
            <span className="bg-gradient-to-br from-black to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
              Hello from
            </span>{" "}
            <span className="bg-gradient-to-r from-fuchsia-600 via-rose-500 to-amber-400 bg-clip-text text-transparent">
              Deepak!
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base sm:text-lg text-muted-foreground">
            A super‑charged starter that feels ✨ deluxe ✨ right out of the box. Animated, glossy, and ridiculously fast.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <a
              className="group inline-flex items-center gap-2 rounded-full bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-semibold shadow-lg shadow-black/10 dark:shadow-white/10 transition hover:-translate-y-0.5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Rocket className="h-4 w-4" /> Deploy now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/15 px-5 py-3 text-sm font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition"
              href="#showcase"
            >
              Explore the goodies
            </a>
          </div>
        </motion.div>
      </header>

      {/* SHOWCASE */}
      <main id="showcase" className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-24">
        {/* Floating card row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <FeatureCard
            title="Ultra‑clean layout"
            icon={<Boxes className="h-5 w-5" />}
            desc="Glassmorphism, tasteful gradients, and buttery hover states."
          />
          <FeatureCard
            title="Motion baked in"
            icon={<Sparkles className="h-5 w-5" />}
            desc="Framer Motion transitions for that premium feel."
          />
          <FeatureCard
            title="Ready to ship"
            icon={<Rocket className="h-5 w-5" />}
            desc="Drop in your content and deploy to Vercel in minutes."
          />
        </motion.div>

        {/* 
          Original CTA + Links, upgraded styling
        */}
        <section className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6">
            <ol className="font-mono list-inside list-decimal text-sm leading-6 text-center md:text-left">
              <li className="mb-2 tracking-tight">
                Edit and save to see updates instantly.
              </li>
              <li className="tracking-tight">Made with ❤️ by Deepak.</li>
            </ol>

            <div className="mt-6 flex gap-3 items-center flex-col sm:flex-row">
              <a
                className="rounded-full border border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm h-10 px-4"
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="dark:invert"
                  src="/vercel.svg"
                  alt="Vercel logomark"
                  width={20}
                  height={20}
                />
                Deploy now
              </a>
              <a
                className="rounded-full border border-black/10 dark:border-white/20 transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm h-10 px-4 w-full sm:w-auto"
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the docs
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-3 py-1 text-xs font-medium">
              <Sparkles className="h-4 w-4" /> Easter egg
            </span>
            <CopyBlock />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-black/5 dark:border-white/10 px-6 py-10 text-sm">
        <div className="flex items-center gap-3 opacity-80">
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          <span>Built on Next.js • Made cooler by Deepak</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
            nextjs.org →
          </a>
        </div>
      </footer>

      {/* Tiny helpers */}
      <style jsx global>{`
        .text-muted-foreground { color: rgba(0,0,0,0.55); }
        :global(.dark) .text-muted-foreground { color: rgba(255,255,255,0.55); }
        .animate-blob { animation: blob 12s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(10px, -20px) scale(1.05); }
          66% { transform: translate(-10px, 20px) scale(0.95); }
        }
      `}</style>
    </div>
  );
}

function FeatureCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 backdrop-blur">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "radial-gradient(120px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.25), transparent 40%)" }} />
      <div
        className="pointer-events-none absolute inset-0"
        onMouseMove={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          const rect = el.getBoundingClientRect();
          el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
          el.style.setProperty("--my", `${e.clientY - rect.top}px`);
        }}
      />
      <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/10">
        {icon}
      </div>
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

function CopyBlock() {
  const [copied, setCopied] = useState(false);
  const cmd = "npx create-next-app@latest";
  return (
    <div className="rounded-xl border border-black/10 dark:border-white/10 bg-black/[.02] dark:bg-white/5 p-4">
      <div className="flex items-center justify-between gap-4">
        <code className="font-mono text-xs sm:text-sm">{cmd}</code>
        <button
          onClick={() => {
            navigator.clipboard.writeText(cmd);
            setCopied(true);
            setTimeout(() => setCopied(false), 1400);
          }}
          className="rounded-full border border-black/10 dark:border-white/15 px-3 py-1.5 text-xs font-medium hover:bg-black/5 dark:hover:bg-white/5 transition"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Try it in your terminal. Build fast, deploy faster.
      </p>
    </div>
  );
}