export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-forest-300 border-t-forest-600" role="status" aria-label="Loading" />
        <p className="text-sm text-charcoal-400">Loading&hellip;</p>
      </div>
    </div>
  );
}
