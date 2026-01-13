export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">My Agentic App</h1>
      <p className="text-gray-600 mb-8">
        A monorepo with AI agent support via CLAUDE.md and AGENTS.md
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
        <div className="p-6 border rounded-lg hover:border-blue-500 transition-colors">
          <h2 className="text-xl font-semibold mb-2">User Management API</h2>
          <p className="text-gray-500 text-sm">
            Python microservice built with FastAPI and Pydantic
          </p>
        </div>
        <div className="p-6 border rounded-lg hover:border-blue-500 transition-colors">
          <h2 className="text-xl font-semibold mb-2">Web Frontend</h2>
          <p className="text-gray-500 text-sm">
            Next.js app with TypeScript and Tailwind CSS
          </p>
        </div>
      </div>
    </main>
  );
}
