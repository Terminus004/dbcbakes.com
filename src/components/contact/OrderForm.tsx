"use client";

import { useId, useState } from "react";
import { brand } from "@/lib/brand";

const occasions = ["Birthday", "Wedding", "Anniversary", "Office", "Festival", "Other"] as const;

const inputClass =
  "rounded-xl border border-cocoa/20 bg-paper px-4 py-3 text-cocoa focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2";

function buildMessage(form: HTMLFormElement) {
  const data = new FormData(form);
  const lines = [
    `New order enquiry — ${brand.name}`,
    `Name: ${data.get("name")}`,
    `Phone: ${data.get("phone")}`,
    `Occasion: ${data.get("occasion")}`,
    `Pickup location: ${data.get("location")}`,
    `Preferred date: ${data.get("date") || "Not specified"}`,
    `Message: ${data.get("message") || "-"}`,
  ];
  return lines.join("\n");
}

export default function OrderForm() {
  const todayId = useId();
  const [today] = useState(() => new Date().toISOString().split("T")[0]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const message = buildMessage(e.currentTarget);
    window.open(`${brand.whatsappHref}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" aria-label="Custom order enquiry">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium">Name</label>
        <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-sm font-medium">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          pattern="[6-9][0-9]{9}"
          minLength={10}
          maxLength={10}
          placeholder="98765 43210"
          autoComplete="tel"
          className={inputClass}
        />
        <p className="text-xs text-cocoa-soft">10-digit Indian mobile number</p>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="occasion" className="text-sm font-medium">Occasion</label>
        <select id="occasion" name="occasion" required autoComplete="off" defaultValue="Birthday" className={inputClass}>
          {occasions.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>

      <fieldset className="flex flex-col gap-1.5">
        <legend className="text-sm font-medium">Pickup location</legend>
        <div className="flex gap-6 pt-1">
          <label className="flex items-center gap-2 text-sm">
            <input type="radio" name="location" value="Durgapur" defaultChecked className="h-4 w-4 accent-brand focus-visible:outline-2 focus-visible:outline-brand" />
            Durgapur
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="radio" name="location" value="Kolkata" className="h-4 w-4 accent-brand focus-visible:outline-2 focus-visible:outline-brand" />
            Kolkata
          </label>
        </div>
      </fieldset>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={todayId} className="text-sm font-medium">Preferred date</label>
        <input id={todayId} name="date" type="date" min={today} autoComplete="off" className={inputClass} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <textarea id="message" name="message" rows={4} autoComplete="off" className={inputClass} placeholder="Flavour, size, design, anything else we should know" />
      </div>

      <button type="submit" className="btn btn-primary justify-center">Send on WhatsApp</button>

      <p className="text-sm text-cocoa-soft">
        Prefer email? Send the same details to{" "}
        <a
          href={`mailto:${brand.email}?subject=${encodeURIComponent("Custom order")}&body=${encodeURIComponent(
            "Name: \nPhone: \nOccasion: \nPickup location: \nPreferred date: \nMessage: "
          )}`}
          className="underline decoration-brand/50 underline-offset-4 hover:text-cocoa"
        >
          {brand.email}
        </a>
      </p>
    </form>
  );
}
