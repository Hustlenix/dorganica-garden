"use client";

import { useState } from "react";

/**
 * Newsletter signup form with success state.
 * Extracted as a client component to maintain server component parent.
 */
export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: Connect to newsletter API
    setSubscribed(true);
    setEmail("");
  };

  if (subscribed) {
    return (
      <p className="text-sm text-forest-200">
        Thanks for subscribing! Check your inbox for a confirmation email.
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
        className="flex-1 rounded-xl border border-forest-500/30 bg-forest-800/50 px-4 py-2.5 text-sm text-white placeholder:text-forest-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-forest-400"
        required
        aria-label="Email for newsletter"
      />
      <button
        type="submit"
        className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-forest-800 transition-all hover:bg-cream-50"
      >
        Subscribe
      </button>
    </form>
  );
}
