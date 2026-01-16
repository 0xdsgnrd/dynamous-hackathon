export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up opacity-0">
            <span className="inline-block px-4 py-2 rounded-full border border-purple-500/30 text-purple-400 text-sm mb-8 backdrop-blur-sm">
              Built with Claude Code in ~1 hour
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up opacity-0 delay-100">
            How I Build{" "}
            <span className="gradient-text">Beautiful Frontends</span>
            {" "}with AI
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto animate-fade-in-up opacity-0 delay-200">
            This page was built using the exact workflow it describes.
            <br />
            <span className="text-zinc-500">Meta, right?</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 delay-300">
            <a
              href="#workflow"
              className="px-8 py-4 bg-purple-600 hover:bg-purple-500 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              See My Workflow
            </a>
            <a
              href="#tools"
              className="px-8 py-4 border border-zinc-700 hover:border-zinc-500 rounded-xl font-semibold transition-all hover:scale-105"
            >
              View My Setup
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Setup</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              The tools and configuration that power my AI-assisted frontend development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Tool Card 1 */}
            <div className="gradient-border p-8">
              <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Claude Code CLI</h3>
              <p className="text-zinc-400 leading-relaxed">
                Anthropic&apos;s official CLI for Claude. Terminal-native, fast, and understands my entire codebase through the agentic layer.
              </p>
            </div>

            {/* Tool Card 2 */}
            <div className="gradient-border p-8">
              <div className="w-14 h-14 rounded-xl bg-pink-500/20 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Agentic Layer</h3>
              <p className="text-zinc-400 leading-relaxed">
                A <code className="text-pink-400">.claude/</code> folder with custom commands, CLAUDE.md for project rules, and reusable skills.
              </p>
            </div>

            {/* Tool Card 3 */}
            <div className="gradient-border p-8">
              <div className="w-14 h-14 rounded-xl bg-orange-500/20 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Next.js + Tailwind</h3>
              <p className="text-zinc-400 leading-relaxed">
                Modern React framework with utility-first CSS. AI models know these well, making iteration lightning fast.
              </p>
            </div>
          </div>

          {/* Code Preview */}
          <div className="mt-12 code-block p-6 overflow-x-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-zinc-500 text-sm">.claude/commands/prime.md</span>
            </div>
            <pre className="text-sm text-zinc-300">
              <code>{`# Prime: Load Project Context

## Objective
Build comprehensive understanding of the codebase by
analyzing structure, documentation, and key files.

## Process
1. Analyze project structure (git ls-files, tree)
2. Read core documentation (CLAUDE.md, READMEs)
3. Identify and read key files
4. Understand current state (git log, git status)

## Output
Provide a concise summary covering architecture,
tech stack, and current state.`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="gradient-text">PIV Loop</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Plan → Implement → Validate. A structured approach that keeps AI on track.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -left-4 top-0 text-8xl font-bold text-purple-500/10">1</div>
              <div className="relative z-10 pt-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 glow-sm">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Plan</h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Start with <code className="text-purple-400">/prime</code> to load context. Then use <code className="text-purple-400">/plan-feature</code> to outline the approach before writing any code.
                </p>
                <ul className="space-y-2 text-sm text-zinc-500">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">→</span> Define clear requirements
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">→</span> Identify affected files
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">→</span> Consider edge cases upfront
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -left-4 top-0 text-8xl font-bold text-pink-500/10">2</div>
              <div className="relative z-10 pt-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mb-6 glow-sm">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Implement</h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Use <code className="text-pink-400">/execute</code> with the plan. Be specific about visual style — reference sites, colors, spacing.
                </p>
                <ul className="space-y-2 text-sm text-zinc-500">
                  <li className="flex items-center gap-2">
                    <span className="text-pink-400">→</span> &quot;Dark theme, purple accents&quot;
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-400">→</span> &quot;Generous whitespace&quot;
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-400">→</span> &quot;Subtle animations&quot;
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -left-4 top-0 text-8xl font-bold text-orange-500/10">3</div>
              <div className="relative z-10 pt-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 glow-sm">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Validate</h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Run <code className="text-orange-400">/validate</code> or <code className="text-orange-400">/code-review</code>. Check mobile responsiveness. Iterate on what doesn&apos;t look right.
                </p>
                <ul className="space-y-2 text-sm text-zinc-500">
                  <li className="flex items-center gap-2">
                    <span className="text-orange-400">→</span> Build passes?
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-400">→</span> Looks good on mobile?
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-400">→</span> Smooth interactions?
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Loop visualization */}
          <div className="mt-16 flex justify-center">
            <div className="flex items-center gap-4 text-sm text-zinc-500">
              <span className="px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400">Plan</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <span className="px-4 py-2 rounded-lg bg-pink-500/20 text-pink-400">Implement</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <span className="px-4 py-2 rounded-lg bg-orange-500/20 text-orange-400">Validate</span>
              <svg className="w-6 h-6 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section id="tips" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Design <span className="gradient-text">Tips</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Specific, actionable insights for getting beautiful results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Tip 1 */}
            <div className="gradient-border p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🎨</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Be Specific About Style</h3>
                  <p className="text-zinc-400 mb-4">
                    Don&apos;t say &quot;make it look good.&quot; Say &quot;dark theme with purple-500 accents,
                    generous padding, subtle hover animations, and a gradient hero background.&quot;
                  </p>
                  <div className="code-block p-3 text-sm">
                    <span className="text-green-400">&quot;Use a dark theme (#0a0a0f background), purple gradient accents,
                    glassmorphism cards, and smooth 300ms transitions&quot;</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tip 2 */}
            <div className="gradient-border p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl">📐</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Reference Real Sites</h3>
                  <p className="text-zinc-400 mb-4">
                    Point to specific sites you like. &quot;Similar spacing to Linear.app&quot; or
                    &quot;hero layout like Vercel&apos;s homepage&quot; gives concrete direction.
                  </p>
                  <div className="code-block p-3 text-sm">
                    <span className="text-green-400">&quot;Cards styled like shadcn/ui,
                    with the gradient borders from Stripe&apos;s dashboard&quot;</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tip 3 */}
            <div className="gradient-border p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🔄</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Iterate Fast</h3>
                  <p className="text-zinc-400 mb-4">
                    First result won&apos;t be perfect. Run dev server, see what&apos;s off,
                    give specific feedback: &quot;The spacing between cards is too tight, increase to gap-8.&quot;
                  </p>
                  <div className="code-block p-3 text-sm">
                    <span className="text-green-400">&quot;The hero text is too small on mobile.
                    Make it text-3xl on mobile, text-5xl on md:&quot;</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tip 4 */}
            <div className="gradient-border p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl">✨</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Add Polish Last</h3>
                  <p className="text-zinc-400 mb-4">
                    Get the layout and content right first. Then add animations,
                    hover states, and micro-interactions. Polish is easier to add than restructure.
                  </p>
                  <div className="code-block p-3 text-sm">
                    <span className="text-green-400">&quot;Add a subtle fade-in-up animation to each section,
                    staggered by 100ms. Add hover:scale-105 to the CTA buttons.&quot;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            This Page is the <span className="gradient-text">Proof</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-8">
            Built in ~1 hour using Claude Code with the PIV loop workflow.
            The same process that built this can build your next frontend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://claude.ai/claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Try Claude Code
            </a>
            <a
              href="#tools"
              className="px-8 py-4 border border-zinc-700 hover:border-zinc-500 rounded-xl font-semibold transition-all hover:scale-105"
            >
              Back to Top
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            Built with Claude Code + Next.js + Tailwind CSS
          </p>
          <p className="text-zinc-600 text-sm">
            Hackathon 2025
          </p>
        </div>
      </footer>
    </main>
  );
}
