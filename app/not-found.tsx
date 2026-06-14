export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-forest-500/60">
          Error 404
        </p>
        <h1 className="mt-4 font-serif text-4xl font-bold text-forest-900 sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-charcoal-500">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-forest-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-forest-500"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
