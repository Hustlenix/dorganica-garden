"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ContactOptionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  label: string;
  variant: "whatsapp" | "email";
}

function ContactOption({ icon, title, description, href, label, variant }: ContactOptionProps) {
  return (
    <motion.a
      href={href}
      target={variant === "whatsapp" ? "_blank" : undefined}
      rel={variant === "whatsapp" ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "group relative flex flex-col items-center rounded-2xl border-2 p-8 text-center transition-all duration-300",
        variant === "whatsapp"
          ? "border-[#25D366]/20 bg-[#25D366]/5 hover:border-[#25D366]/40 hover:bg-[#25D366]/10"
          : "border-forest-200 bg-forest-50/50 hover:border-forest-300 hover:bg-forest-50"
      )}
    >
      <div
        className={cn(
          "flex h-16 w-16 items-center justify-center rounded-2xl transition-colors",
          variant === "whatsapp"
            ? "bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366]/20"
            : "bg-forest-100 text-forest-600 group-hover:bg-forest-200"
        )}
      >
        {icon}
      </div>
      <h3 className="mt-5 text-xl font-bold text-charcoal-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
        {description}
      </p>
      <span
        className={cn(
          "mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors",
          variant === "whatsapp"
            ? "text-[#25D366]"
            : "text-forest-600"
        )}
      >
        {label}
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </motion.a>
  );
}

export default function ContactCta() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <ContactOption
        icon={<MessageCircle className="h-8 w-8" />}
        title="Chat on WhatsApp"
        description="Instant replies. Send us a message and we'll respond right away."
        href={`https://wa.me/${CONTACT.whatsapp}?text=Hi!%20I'd%20like%20to%20know%20more%20about%20your%20services.`}
        label="Open WhatsApp"
        variant="whatsapp"
      />
      <ContactOption
        icon={<Mail className="h-8 w-8" />}
        title="Send an Email"
        description="Prefer writing? Drop us an email and we'll get back within 24 hours."
        href={`mailto:${CONTACT.email}`}
        label="Send Email"
        variant="email"
      />
    </div>
  );
}
