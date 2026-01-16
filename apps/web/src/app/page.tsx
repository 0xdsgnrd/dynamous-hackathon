export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)] border-b-2 border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-mono text-sm font-semibold tracking-wide">WORKFLOW.DEV</span>
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
              This page was built using the exact workflow it describes.
              You&apos;re looking at the proof.
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

      {/* Process Section */}
      <section id="process" className="py-24 border-b-2 border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4">
              <p className="section-number mb-4">01 — The Process</p>
              <h2 className="headline-lg">The PIV Loop</h2>
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
                <h3 className="font-serif text-3xl mb-4">Plan</h3>
                <p className="text-[var(--fg-muted)] mb-6">
                  Load context with <code className="font-mono text-accent">/prime</code>.
                  Define requirements. Identify files. Consider edge cases.
                </p>
                <div className="code-brutal">
                  <code>/prime</code><br />
                  <code>/plan-feature</code>
                </div>
              </div>
            </div>

            {/* Implement */}
            <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-[var(--border)] relative bg-[var(--bg-alt)]">
              <span className="number-accent">2</span>
              <div className="relative z-10">
                <h3 className="font-serif text-3xl mb-4">Implement</h3>
                <p className="text-[var(--fg-muted)] mb-6">
                  Execute with specifics. Reference real sites. Name colors, spacing, effects.
                </p>
                <div className="code-brutal">
                  <code>/frontend-design</code><br />
                  <code className="text-[var(--accent)]">&quot;editorial brutalist,<br />warm cream, coral accent&quot;</code>
                </div>
              </div>
            </div>

            {/* Validate */}
            <div className="p-8 relative">
              <span className="number-accent">3</span>
              <div className="relative z-10">
                <h3 className="font-serif text-3xl mb-4">Validate</h3>
                <p className="text-[var(--fg-muted)] mb-6">
                  Build it. Check responsive. Iterate on what&apos;s off. Document the changes.
                </p>
                <div className="code-brutal">
                  <code>npm run build</code><br />
                  <code>/log &quot;fixed spacing&quot;</code>
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
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="card-brutal p-8">
              <div className="flex items-start justify-between mb-6">
                <h3 className="font-serif text-2xl">Claude Code CLI</h3>
                <span className="tag">Core</span>
              </div>
              <p className="text-[var(--fg-muted)] mb-6">
                Terminal-native AI assistant. Understands the entire codebase through
                <code className="font-mono text-accent"> CLAUDE.md</code> and custom commands.
              </p>
              <hr className="hr-brutal mb-6" />
              <p className="font-mono text-sm text-[var(--fg-muted)]">
                anthropic/claude-code
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

      {/* CTA Section */}
      <section className="py-24 bg-[var(--fg)] text-[var(--bg)]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-mono text-sm tracking-widest mb-8 opacity-60">THE PROOF IS IN THE PAGE</p>
          <h2 className="headline-lg mb-8 max-w-3xl mx-auto">
            This page was designed and built in under an hour
          </h2>
          <p className="text-xl opacity-75 mb-12 max-w-2xl mx-auto">
            Using Claude Code, the /frontend-design skill, and the PIV loop workflow.
            The same process can build your next interface.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://docs.anthropic.com/en/docs/claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutal btn-brutal-accent"
            >
              Try Claude Code
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
            Built with Claude Code + Next.js + Tailwind
          </p>
          <p className="font-mono text-sm text-[var(--fg-muted)]">
            Hackathon 2025 • <span className="text-accent">Editorial Brutalist</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
