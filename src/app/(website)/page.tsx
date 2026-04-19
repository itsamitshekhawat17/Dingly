import Image from "next/image";
import Link from "next/link";

const navLinks = ["Features", "Pricing", "About"];

const galleryCards: Array<{
  name: string;
  role: string;
  palette: [string, string, string];
  skin: string;
  hair: string;
  shirt: string;
}> = [
  {
    name: "Maya",
    role: "Growth Lead",
    palette: ["#0f172a", "#1d4ed8", "#38bdf8"],
    skin: "#f5d0c5",
    hair: "#1e293b",
    shirt: "#2563eb",
  },
  {
    name: "Noah",
    role: "Creator Ops",
    palette: ["#111827", "#1e3a8a", "#60a5fa"],
    skin: "#efd3c2",
    hair: "#0f172a",
    shirt: "#0ea5e9",
  },
  {
    name: "Ava",
    role: "Agency Owner",
    palette: ["#0b1120", "#0f766e", "#22d3ee"],
    skin: "#f1cbbd",
    hair: "#111827",
    shirt: "#14b8a6",
  },
  {
    name: "Eli",
    role: "RevOps",
    palette: ["#111827", "#4338ca", "#818cf8"],
    skin: "#f7d5c8",
    hair: "#020617",
    shirt: "#4f46e5",
  },
];

const pricingPlans = [
  {
    name: "Free Plan",
    description: "Perfect for getting started",
    price: "$0",
    cadence: "/month",
    features: [
      "Boost engagement with target responses",
      "Automate comment replies to enhance audience interaction",
      "Turn followers into customers with targeted messaging",
    ],
    cta: "Get Started",
  },
  {
    name: "Smart AI Plan",
    description: "Advanced features for power users",
    price: "$99",
    cadence: "/month",
    features: [
      "All features from Free Plan",
      "AI-powered response generation",
      "Advanced analytics and insights",
      "Priority customer support",
      "Custom branding options",
    ],
    cta: "Upgrade Now",
  },
];

const galleryPhotoSources = [
  "/photos/photo-1.jpg",
  "/photos/photo-3.jpg",
  "/photos/photo-2.png",
  "/photos/photo-4.png",
];

function createAvatarDataUri({
  palette,
  skin,
  hair,
  shirt,
}: {
  palette: [string, string, string];
  skin: string;
  hair: string;
  shirt: string;
}) {
  const [base, accent, glow] = palette;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" fill="none">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="400" y2="500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="${base}" />
          <stop offset="100%" stop-color="${accent}" />
        </linearGradient>
        <radialGradient id="shine" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(300 100) rotate(90) scale(170 170)">
          <stop stop-color="${glow}" stop-opacity="0.65" />
          <stop offset="1" stop-color="${glow}" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="500" rx="44" fill="url(#bg)" />
      <circle cx="302" cy="92" r="122" fill="url(#shine)" />
      <circle cx="200" cy="184" r="78" fill="${skin}" />
      <path d="M126 174c14-49 58-82 74-82 49 0 82 30 92 76-14-10-39-18-66-18-31 0-66 10-100 24Z" fill="${hair}" />
      <path d="M112 418c14-73 58-108 88-108s74 35 88 108" fill="${shirt}" />
      <path d="M158 258c13 15 28 22 42 22s29-7 42-22" stroke="#e2e8f0" stroke-opacity="0.2" stroke-width="10" stroke-linecap="round" />
      <circle cx="172" cy="176" r="7" fill="#020617" fill-opacity="0.55" />
      <circle cx="228" cy="176" r="7" fill="#020617" fill-opacity="0.55" />
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function createGalleryDataUri(index: number) {
  const palettes = [
    ["#0f172a", "#2563eb", "#7dd3fc"],
    ["#111827", "#8b5cf6", "#c4b5fd"],
    ["#0b1120", "#14b8a6", "#99f6e4"],
    ["#1e1b4b", "#f472b6", "#f9a8d4"],
    ["#1f2937", "#60a5fa", "#bfdbfe"],
    ["#312e81", "#22c55e", "#bbf7d0"],
  ] as const;

  const [base, accent, glow] = palettes[index % palettes.length];
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 520" fill="none">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="640" y2="520" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="${base}" />
          <stop offset="100%" stop-color="${accent}" />
        </linearGradient>
        <radialGradient id="halo" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(510 110) rotate(90) scale(210 210)">
          <stop stop-color="${glow}" stop-opacity="0.62" />
          <stop offset="1" stop-color="${glow}" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="640" height="520" rx="34" fill="url(#bg)" />
      <circle cx="520" cy="100" r="145" fill="url(#halo)" />
      <circle cx="168" cy="168" r="78" fill="#ffffff" fill-opacity="0.9" />
      <rect x="96" y="272" width="210" height="28" rx="14" fill="#ffffff" fill-opacity="0.82" />
      <rect x="96" y="314" width="274" height="20" rx="10" fill="#ffffff" fill-opacity="0.55" />
      <rect x="96" y="346" width="188" height="20" rx="10" fill="#ffffff" fill-opacity="0.42" />
      <path d="M360 370c44-100 110-146 206-146 16 0 36 2 58 6v140H360Z" fill="#ffffff" fill-opacity="0.17" />
      <path d="M392 334c56-84 114-118 198-118 17 0 32 1 50 4" stroke="#ffffff" stroke-opacity="0.26" stroke-width="16" stroke-linecap="round" />
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function GallerySection() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden px-0">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-[0_24px_80px_rgba(2,6,23,0.38)] backdrop-blur md:col-span-2">
            <div className="relative h-52 overflow-hidden rounded-2xl sm:h-64 lg:h-72">
              <Image
                src={galleryPhotoSources[0]}
                alt="Gallery image 1"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover"
              />
            </div>
          </article>

          <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-[0_24px_80px_rgba(2,6,23,0.38)] backdrop-blur md:row-span-2">
            <div className="relative h-52 overflow-hidden rounded-2xl sm:h-64 md:h-full">
              <Image
                src={galleryPhotoSources[1]}
                alt="Gallery image 2"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </article>

          <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-[0_24px_80px_rgba(2,6,23,0.38)] backdrop-blur">
            <div className="relative h-52 overflow-hidden rounded-2xl sm:h-64 lg:h-72">
              <Image
                src={galleryPhotoSources[2]}
                alt="Gallery image 3"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </article>

          <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-[0_24px_80px_rgba(2,6,23,0.38)] backdrop-blur">
            <div className="relative h-52 overflow-hidden rounded-2xl sm:h-64 lg:h-72">
              <Image
                src={galleryPhotoSources[3]}
                alt="Gallery image 4"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden px-0">
      <div className="relative w-full px-6 py-14 text-white sm:px-8 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Choose Your Plan
          </h2>
          <p className="mt-3 text-sm text-white/65 sm:text-base">
            Select the perfect plan to boost your Instagram engagement
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-[#0f172a]/90 p-5 shadow-[0_16px_40px_rgba(2,6,23,0.22)] sm:p-7"
            >
              <div className="text-sm font-semibold text-white">{plan.name}</div>
              <p className="mt-1 text-sm text-white/60">{plan.description}</p>

              <div className="mt-7 flex items-end gap-1">
                <span className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  {plan.price}
                </span>
                <span className="pb-1 text-sm text-white/55">{plan.cadence}</span>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-white/72">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-white/20 text-[11px] text-white/80">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition duration-200 hover:bg-slate-100"
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0 bg-size-[20px_20px] bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 bg-[#050816] mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-sky-500/18 blur-3xl" />
      <div className="absolute right-[-8%] top-[18%] h-112 w-md rounded-full bg-blue-700/15 blur-3xl" />
      <div className="absolute bottom-[-12%] left-[22%] h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 lg:px-8">
        <nav className="flex items-center justify-between py-6 md:py-8">
          <a href="#" className="text-lg font-semibold tracking-[0.2em] text-white/95">
            Dingly
          </a>

          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-white/65 transition duration-200 hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>

          <Link
            href="/dashboard"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur transition duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white"
          >
            Login
          </Link>
        </nav>

        <section className="flex flex-1 flex-col justify-center pb-10 pt-8 text-center lg:pt-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.24em] text-sky-100/80">
              AI Instagram automation for modern teams
            </div>

            <h1 className="mx-auto max-w-5xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Automate Your Instagram DMs with <span className="text-sky-400">Dingly</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
              Dingly helps you automate replies, capture leads, and engage with your audience instantly using AI-powered Instagram DM automation.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(125,211,252,0.15)] transition duration-200 hover:-translate-y-0.5 hover:bg-sky-400 hover:shadow-[0_20px_40px_rgba(14,165,233,0.28)]"
              >
                Get Started
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-16">
            <GallerySection />
            <PricingSection />
          </div>

        </section>
      </div>
    </main>
  );
}