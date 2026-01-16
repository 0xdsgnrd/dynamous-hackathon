"use client";

import { useState } from "react";

export default function Home() {
  const [easterEgg, setEasterEgg] = useState(false);

  return (
    <main className={`min-h-screen transition-all duration-500 ${easterEgg ? "dark-mode-v1" : ""}`}>

      {/* Easter Egg Overlay */}
      {easterEgg && (
        <div className="fixed inset-0 z-[100] bg-[#0a0a0f] text-white flex items-center justify-center p-6">
          <div className="max-w-2xl text-center">
            <p className="text-purple-400 font-mono text-sm mb-4">VERSION 1.0 — THE GENERIC VERSION</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              See? Generic.
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              Dark background. Purple gradients. System fonts.<br />
              This is what you get without a system.
            </p>
            <button
              onClick={() => setEasterEgg(false)}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:scale-105 transition-transform"
            >
              Take me back to the good version →
            </button>
            <p className="text-zinc-600 text-sm mt-8">
              (You found the easter egg! Click anywhere or the button to return)
            </p>
          </div>
        </div>
      )}

      {/* Commit Counter - Floating */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="card-brutal px-4 py-3 flex items-center gap-3 text-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="font-mono">
            <span className="text-accent font-bold">7</span> commits to build this
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)] border-b-2 border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/avatar.jpg" alt="Kris Kutayiah" className="w-8 h-8 rounded-full border-2 border-[var(--border)]" />
            <span className="font-mono text-sm font-semibold tracking-wide">KRIS KUTAYIAH</span>
          </div>
          <div className="flex gap-6">
            <a href="#process" className="font-mono text-sm link-underline">Process</a>
            <a href="#toolkit" className="font-mono text-sm link-underline">Toolkit</a>
            <a href="#tips" className="font-mono text-sm link-underline">Tips</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20 border-b-2 border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-12 items-center">
          {/* Left column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="animate-fade-up">
              <span className="tag tag-accent">Meta Landing Page</span>
            </div>

            <h1 className="headline-xl animate-fade-up delay-1">
              How I Build<br />
              <span className="serif-italic text-accent">Beautiful</span><br />
              Frontends
            </h1>

            <p className="text-xl text-[var(--fg-muted)] max-w-lg animate-fade-up delay-2">
              A look inside <span className="text-[var(--fg)] font-medium">Kris Kutayiah&apos;s</span> AI-assisted
              frontend workflow. This page was built using the exact process it describes.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up delay-3">
              <a href="#process" className="btn-brutal btn-brutal-fill">
                See the Process →
              </a>
              <a href="#toolkit" className="btn-brutal">
                View Toolkit
              </a>
            </div>
          </div>

          {/* Right column - asymmetric card */}
          <div className="lg:col-span-5 animate-fade-up delay-4">
            <div className="card-brutal p-8 rotate-2 hover:rotate-0 transition-transform">
              <p className="section-number mb-4">The Meta Twist</p>
              <p className="font-serif text-2xl leading-relaxed">
                &ldquo;Build a page that showcases how you build pages.&rdquo;
              </p>
              <p className="mt-4 text-[var(--fg-muted)]">
                — Hackathon Challenge
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee divider */}
      <div className="bg-[var(--fg)] text-[var(--bg)] py-4 overflow-hidden border-b-2 border-[var(--border)]">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="font-mono text-sm tracking-widest mx-8">
              PLAN → IMPLEMENT → VALIDATE • PLAN → IMPLEMENT → VALIDATE • PLAN → IMPLEMENT → VALIDATE • PLAN → IMPLEMENT → VALIDATE •
            </span>
          ))}
        </div>
      </div>

      {/* What Is This Section */}
      <section className="py-16 border-b-2 border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-number mb-4">The Short Version</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">
                What is this, exactly?
              </h2>
              <p className="text-lg text-[var(--fg-muted)] mb-6">
                I use AI to help me write code. But just asking &ldquo;make me a website&rdquo;
                gets generic, forgettable results. <span className="text-[var(--fg)]">This page shows my system for getting distinctive, production-ready output.</span>
              </p>
              <p className="text-lg text-[var(--fg-muted)]">
                The twist? This very page was built using that system — so you&apos;re looking at the proof.
              </p>
            </div>
            <div className="card-accent p-8">
              <p className="font-mono text-sm mb-4 opacity-75">WHY DOES THIS MATTER?</p>
              <p className="font-serif text-2xl leading-relaxed">
                Without a system, AI gives you the same purple-gradient, dark-mode template everyone else gets.
              </p>
              <p className="font-serif text-2xl leading-relaxed mt-4">
                <span className="opacity-75">With a system,</span> you get work that actually looks <span className="underline">designed</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 border-b-2 border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4">
              <p className="section-number mb-4">01 — The Process</p>
              <h2 className="headline-lg">The PIV Loop</h2>
              <p className="text-[var(--fg-muted)] mt-4">
                A simple 3-step cycle that keeps AI focused and your output high-quality.
              </p>
            </div>
            <div className="lg:col-span-8 lg:pt-12">
              <p className="pull-quote">
                Plan before you prompt. Validate before you ship.
                The loop keeps AI on track.
              </p>
            </div>
          </div>

          {/* Three columns */}
          <div className="grid md:grid-cols-3 gap-0 border-2 border-[var(--border)]">
            {/* Plan */}
            <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-[var(--border)] relative">
              <span className="number-accent">1</span>
              <div className="relative z-10">
                <h3 className="font-serif text-3xl mb-2">Plan</h3>
                <p className="text-sm text-accent font-mono mb-4">Tell AI about your project</p>
                <p className="text-[var(--fg-muted)] mb-6">
                  Before asking for code, give the AI context about what you&apos;re building
                  and what you want. Clear instructions = better results.
                </p>
                <div className="code-brutal">
                  <code className="opacity-60">Example commands:</code><br />
                  <code>/prime</code> <span className="opacity-60">← load project info</span>
                </div>
              </div>
            </div>

            {/* Implement */}
            <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-[var(--border)] relative bg-[var(--bg-alt)]">
              <span className="number-accent">2</span>
              <div className="relative z-10">
                <h3 className="font-serif text-3xl mb-2">Implement</h3>
                <p className="text-sm text-accent font-mono mb-4">Be specific about what you want</p>
                <p className="text-[var(--fg-muted)] mb-6">
                  Don&apos;t say &ldquo;make it pretty.&rdquo; Say exactly what style, colors,
                  and feeling you want. Specificity is the secret.
                </p>
                <div className="code-brutal">
                  <code className="text-[var(--accent)]">&quot;warm cream background,<br />coral accent, serif fonts&quot;</code>
                </div>
              </div>
            </div>

            {/* Validate */}
            <div className="p-8 relative">
              <span className="number-accent">3</span>
              <div className="relative z-10">
                <h3 className="font-serif text-3xl mb-2">Validate</h3>
                <p className="text-sm text-accent font-mono mb-4">Check the output, then refine</p>
                <p className="text-[var(--fg-muted)] mb-6">
                  Look at what AI made. Does it work? Does it look right on mobile?
                  Give feedback and repeat until it&apos;s right.
                </p>
                <div className="code-brutal">
                  <code className="opacity-60">Review → Feedback → Repeat</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toolkit Section */}
      <section id="toolkit" className="py-24 grid-lines border-b-2 border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="section-number mb-4">02 — The Toolkit</p>
            <h2 className="headline-lg max-w-2xl">
              Skills, Commands, and the <span className="serif-italic">Agentic Layer</span>
            </h2>
            <p className="text-[var(--fg-muted)] mt-4 max-w-2xl">
              Think of &ldquo;skills&rdquo; as recipes you write once and reuse forever.
              The &ldquo;agentic layer&rdquo; is just a folder of instructions that teaches AI about your project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="card-brutal p-8">
              <div className="flex items-start justify-between mb-6">
                <h3 className="font-serif text-2xl">AI Coding Agent</h3>
                <span className="tag">Core</span>
              </div>
              <p className="text-[var(--fg-muted)] mb-6">
                Terminal-native AI assistant. Understands the entire codebase through
                <code className="font-mono text-accent"> CLAUDE.md</code> and custom commands.
              </p>
              <hr className="hr-brutal mb-6" />
              <p className="font-mono text-sm text-[var(--fg-muted)]">
                Agentic AI + Custom Skills
              </p>
            </div>

            {/* Card 2 - Accent */}
            <div className="card-accent p-8">
              <div className="flex items-start justify-between mb-6">
                <h3 className="font-serif text-2xl">/frontend-design</h3>
                <span className="tag bg-[var(--bg)] text-[var(--fg)]">Skill</span>
              </div>
              <p className="opacity-90 mb-6">
                The skill that built this page. Encodes design principles, anti-patterns,
                and aesthetic guidelines. Forces bold choices.
              </p>
              <hr className="border-[var(--bg)] opacity-30 mb-6" />
              <p className="font-mono text-sm opacity-75">
                .claude/commands/frontend-design.md
              </p>
            </div>

            {/* Card 3 */}
            <div className="card-brutal p-8">
              <div className="flex items-start justify-between mb-6">
                <h3 className="font-serif text-2xl">Documentation System</h3>
                <span className="tag">Process</span>
              </div>
              <p className="text-[var(--fg-muted)] mb-6">
                Three-layer logging: narrative devlog, structured session log, and
                detailed git commits. The process documents itself.
              </p>
              <hr className="hr-brutal mb-6" />
              <p className="font-mono text-sm text-[var(--fg-muted)]">
                dev/devlog.md • dev/logs/ • git history
              </p>
            </div>

            {/* Card 4 */}
            <div className="card-brutal p-8">
              <div className="flex items-start justify-between mb-6">
                <h3 className="font-serif text-2xl">Next.js + Tailwind</h3>
                <span className="tag">Stack</span>
              </div>
              <p className="text-[var(--fg-muted)] mb-6">
                Modern React with utility CSS. AI models know these frameworks deeply —
                iteration is fast and precise.
              </p>
              <hr className="hr-brutal mb-6" />
              <p className="font-mono text-sm text-[var(--fg-muted)]">
                React 18 • Next.js 14 • Tailwind CSS 3
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section id="tips" className="py-24 border-b-2 border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <p className="section-number mb-4">03 — The Insights</p>
              <h2 className="headline-lg">
                What Actually<br />
                <span className="serif-italic">Works</span>
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-12">
              <p className="text-xl text-[var(--fg-muted)]">
                Specific, actionable lessons from building this page —
                and dozens before it.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Tip 1 */}
            <div className="grid lg:grid-cols-12 gap-8 items-start p-8 border-2 border-[var(--border)] hover:bg-[var(--bg-alt)] transition-colors">
              <div className="lg:col-span-1">
                <span className="font-serif text-4xl text-accent">01</span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-serif text-2xl mb-2">Be Absurdly Specific</h3>
              </div>
              <div className="lg:col-span-7">
                <p className="text-[var(--fg-muted)] mb-4">
                  &ldquo;Make it look good&rdquo; gets generic output.
                  &ldquo;Editorial brutalist, warm cream #FFFDF8, coral #FF6B4A accent,
                  Instrument Serif headlines, exposed 2px borders&rdquo; gets this.
                </p>
                <code className="code-brutal inline-block">
                  Specificity → Distinctiveness
                </code>
              </div>
            </div>

            {/* Tip 2 */}
            <div className="grid lg:grid-cols-12 gap-8 items-start p-8 border-2 border-[var(--border)] hover:bg-[var(--bg-alt)] transition-colors">
              <div className="lg:col-span-1">
                <span className="font-serif text-4xl text-accent">02</span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-serif text-2xl mb-2">Encode Your Taste</h3>
              </div>
              <div className="lg:col-span-7">
                <p className="text-[var(--fg-muted)] mb-4">
                  The <code className="font-mono text-accent">/frontend-design</code> skill
                  isn&apos;t magic — it&apos;s documented taste. Anti-patterns, preferred approaches,
                  aesthetic guidelines. Your judgment, reusable.
                </p>
                <code className="code-brutal inline-block">
                  Skills = Encoded Expertise
                </code>
              </div>
            </div>

            {/* Tip 3 */}
            <div className="grid lg:grid-cols-12 gap-8 items-start p-8 border-2 border-[var(--border)] hover:bg-[var(--bg-alt)] transition-colors">
              <div className="lg:col-span-1">
                <span className="font-serif text-4xl text-accent">03</span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-serif text-2xl mb-2">Document Everything</h3>
              </div>
              <div className="lg:col-span-7">
                <p className="text-[var(--fg-muted)] mb-4">
                  Every prompt, every iteration, every decision. The devlog becomes
                  content. The git history tells the story. Meta documentation
                  makes meta pages possible.
                </p>
                <code className="code-brutal inline-block">
                  /log &quot;what changed and why&quot;
                </code>
              </div>
            </div>

            {/* Tip 4 */}
            <div className="grid lg:grid-cols-12 gap-8 items-start p-8 border-2 border-[var(--border)] hover:bg-[var(--bg-alt)] transition-colors">
              <div className="lg:col-span-1">
                <span className="font-serif text-4xl text-accent">04</span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-serif text-2xl mb-2">Commit to a Direction</h3>
              </div>
              <div className="lg:col-span-7">
                <p className="text-[var(--fg-muted)] mb-4">
                  The first version was purple gradients on dark. Generic.
                  This version commits to editorial brutalist — light background,
                  serif type, exposed structure. Pick a lane.
                </p>
                <code className="code-brutal inline-block">
                  Bold &gt; Safe
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-24 border-b-2 border-[var(--border)] bg-[var(--bg-alt)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-number mb-4">04 — The Proof</p>
            <h2 className="headline-lg">Before &amp; After</h2>
            <p className="text-[var(--fg-muted)] mt-4 max-w-2xl mx-auto">
              Same AI, same project, different approach. The first version used vague prompts.
              The second used the system you just learned about.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="card-brutal p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="tag">Before</span>
                <span className="text-[var(--fg-muted)] text-sm">Version 1</span>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full bg-[#0a0a0f] border border-[var(--border)]"></span>
                  <span className="text-sm">Dark background (#0a0a0f)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full bg-[#8b5cf6]"></span>
                  <span className="text-sm">Purple gradient accents</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm bg-[var(--bg-alt)] px-2 py-1">Aa</span>
                  <span className="text-sm">System fonts (generic)</span>
                </div>
              </div>
              <p className="text-[var(--fg-muted)] text-sm">
                <strong className="text-[var(--fg)]">The prompt:</strong> &ldquo;Build a landing page for my workflow&rdquo;
              </p>
              <p className="text-[var(--fg-muted)] text-sm mt-2">
                <strong className="text-[var(--fg)]">The result:</strong> Generic, looked like every other AI-generated site
              </p>
            </div>

            {/* After */}
            <div className="card-brutal p-8 border-[var(--accent)]">
              <div className="flex items-center gap-3 mb-6">
                <span className="tag tag-accent">After</span>
                <span className="text-[var(--fg-muted)] text-sm">Version 2 (this page)</span>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full bg-[#FFFDF8] border border-[var(--border)]"></span>
                  <span className="text-sm">Warm cream (#FFFDF8)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full bg-[#FF6B4A]"></span>
                  <span className="text-sm">Coral accent (#FF6B4A)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-serif text-sm bg-[var(--bg-alt)] px-2 py-1">Aa</span>
                  <span className="text-sm">Instrument Serif + Sora</span>
                </div>
              </div>
              <p className="text-[var(--fg-muted)] text-sm">
                <strong className="text-[var(--fg)]">The prompt:</strong> &ldquo;Editorial brutalist, warm cream, coral accent, serif headlines&rdquo;
              </p>
              <p className="text-[var(--fg-muted)] text-sm mt-2">
                <strong className="text-[var(--fg)]">The result:</strong> Distinctive, memorable, looks intentionally designed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--fg)] text-[var(--bg)]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-mono text-sm tracking-widest mb-8 opacity-60">THE PROOF IS IN THE PAGE</p>
          <h2 className="headline-lg mb-8 max-w-3xl mx-auto">
            This page was designed and built in under an hour
          </h2>
          <p className="text-xl opacity-75 mb-12 max-w-2xl mx-auto">
            Using the /frontend-design skill, the PIV loop, and an AI coding agent.
            The same process can build your next interface.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#process"
              className="btn-brutal btn-brutal-accent"
            >
              Learn the Process
            </a>
            <a href="#process" className="btn-brutal bg-[var(--bg)] text-[var(--fg)]">
              Review the Process
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t-2 border-[var(--border)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-sm text-[var(--fg-muted)]">
            Built by <span className="text-[var(--fg)]">Kris Kutayiah</span> with AI + Next.js + Tailwind
          </p>
          <p className="font-mono text-sm text-[var(--fg-muted)]">
            Dynamous Community Hackathon 1.16.2026 • <button onClick={() => setEasterEgg(true)} className="text-accent hover:underline cursor-pointer">Editorial Brutalist</button>
          </p>
        </div>
      </footer>
    </main>
  );
}
