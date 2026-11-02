import sunset from "@/public/sunset.png";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { site, home, about, services, team, products } from "@/lib/content";
import TeamCard from "@/components/TeamCard";
import ProductsOverview from "@/components/ProductsOverview";

const container = "mx-auto w-full max-w-[1400px] px-5";
const h2 = "mb-8 font-display text-3xl font-semibold md:text-4xl";
const h3 = "mb-2 font-display text-xl font-semibold";

type Band = {
  bg: string;
  from?: string;
  to?: string;
  fadeIn?: string;
  pt?: string;
};

const bands: Record<string, Band> = {
  home: { bg: "bg-m-green" },
  about: {
    bg: "bg-m-cream",
    fadeIn: "h-120 from-m-green via-[#737A66] via-35% to-m-cream",
    pt: "pt-44 md:pt-18",
  },
  whatWeDo: { bg: "bg-m-cream", from: "from-m-cream", to: "to-m-silver" },
  whoWeAre: { bg: "bg-m-silver", from: "from-m-silver", to: "to-m-cream" },
  products: { bg: "bg-m-cream", from: "from-m-cream", to: "to-cream" },
};

function Section({
  id,
  band,
  className = "",
  children,
}: {
  id: string;
  band: Band;
  className?: string;
  children: React.ReactNode;
}) {
  const hasBottomFade = band.from && band.to;
  return (
    <section id={id} className={`relative scroll-mt-16 items-center justify-center text-center ${band.bg} ${className}`}>
      {band.fadeIn && (
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 top-0 bg-linear-to-b ${band.fadeIn}`}
        />
      )}
      <div
        className={`${container} relative z-10 ${band.pt ?? "pt-16 md:pt-24"} ${hasBottomFade ? "pb-44 md:pb-48" : "pb-16 md:pb-24"
          }`}
      >
        {children}
      </div>
      {hasBottomFade && (
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-linear-to-b ${band.from} ${band.to}`}
        />
      )}
    </section>
  );
}

export default function Page() {
  return (
    <>
      <Section
        id="home"
        band={bands.home}
        className="flex min-h-[calc(100vh-4rem)] items-center"
      >
        <h1 className="max-w-[16ch] font-body text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl text-left text-m-yellow font-display">
          {site.tagline}
        </h1>
        <p className="mt-6 max-w-[46ch] text-xl text-m-yellow text-left">
          {home.body}
        </p>
      </Section>

      <Section id="about" band={bands.about}>
        <div className="bg-paper rounded-lg p-28">
          <h2 className={h2}>About Us</h2>
          <div className="space-y-4 font-body">
            {about.body.map((p) => <p key={p}>{p}</p>)}
          </div>
          <div className="mt-10 flex justify-center">
            <Image src={sunset} alt="Sunset" width={80} height={80} />
          </div>
        </div>
      </Section>

      <Section id="what-we-do" band={bands.whatWeDo}>
        <div className="flex flex-col gap-8">
          <h2 className={h2}>What We Do</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((s) => (
              <article key={s.title} className="flex flex-col gap-4">
                <Image
                  src={s.image}
                  alt={s.title}
                  width={80}
                  height={80}
                  className="mx-auto mb-4"
                />
                <h3 className={h3}>{s.title}</h3>
                <p className="text-muted">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>


      <Section id="who-we-are" band={bands.whoWeAre}>
        <div className="flex flex-col gap-8">
          <h2 className={`${h2} text-center`}>Who We Are</h2>
          <div className="grid gap-12 md:grid-cols-2">
            {team.map((m) => (
              <TeamCard key={m.name} {...m} />
            ))}
          </div>
        </div>
      </Section>

      <Section id="products" band={bands.products}>
        <h2 className={h2}>Products We Offer</h2>
        <p className="font-body pb-8">{products.description}</p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr]">
          <div className="rounded-lg p-6">
            <ProductsOverview />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            {products.pages.map((p) => (
              <Link
                key={p.name}
                href={p.link}
                className="flex items-center px-3 py-1.5 rounded-md bg-m-blue w-64 md:w-72 justify-between hover:opacity-70">
                <p className="text-m-cream">{p.name}</p>
                <ExternalLink className="text-m-yellow ml-2" size={18} />
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}