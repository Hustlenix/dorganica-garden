"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-forest-500/60">
          Something Went Wrong
        </p>
        <h1 className="mt-4 font-serif text-4xl font-bold text-forest-900 sm:text-5xl">
          Unexpected Error
        </h1>
        <p className="mt-4 text-charcoal-500">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-forest-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-forest-500"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
