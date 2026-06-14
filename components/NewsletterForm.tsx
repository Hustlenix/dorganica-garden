"use client";

import { useState } from "react";
import { toast } from "sonner";

/**
 * Newsletter signup form with success state.
 * Shows a clear message that the feature is coming soon,
 * while collecting the email for future integration.
 */
export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);

    // Simulate API call - replace with actual newsletter API endpoint
    try {
      // TODO: Replace with actual newsletter API call
      // await fetch("/api/newsletter", { method: "POST", body: JSON.stringify({ email }) });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubscribed(true);
      setEmail("");
      toast.success("Thanks for subscribing!", {
        description: "You'll hear from us soon with tips and updates.",
      });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (subscribed) {
    return (
      <p className="text-sm text-forest-200">
        You&apos;re subscribed! Watch your inbox for urban farming tips and updates.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-md gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 rounded-xl border border-forest-500/30 bg-forest-800/50 px-4 py-2.5 text-sm text-white placeholder:text-forest-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-forest-400 disabled:opacity-50"
        required
        disabled={loading}
        aria-label="Email for newsletter"
      />
      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-forest-800 transition-all hover:bg-cream-50 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Subscribe"}
      </button>
    </form>
  );
}