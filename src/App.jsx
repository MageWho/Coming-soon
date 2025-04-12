

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-white text-5xl font-bold">Coming Soon</h1>
        <div className="mt-10 space-x-4 animate-pulse">
          <div className="w-16 h-16 bg-gray-800 inline-block rotate-45 transition-transform duration-1000 ease-in-out hover:scale-110"></div>
          <div className="w-12 h-12 bg-white inline-block rounded-full animate-bounce"></div>
          <div className="w-20 h-20 border-2 border-gray-600 inline-block animate-spin-slow"></div>
        </div>
      </div>
    </main>
  );
}
