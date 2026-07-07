import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Building2,
  MapPin,
  TrendingUp,
  ShieldCheck,
  LineChart,
  Banknote,
  Wrench,
  CalendarClock,
  Mail,
  Phone,
  ChevronRight,
  User,
  ExternalLink,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nicene Investments — Institutional Multifamily Real Estate" },
      {
        name: "description",
        content:
          "Nicene Investments, led by founder Yonnic Land, acquires and operates high-quality apartment communities in stable, high-growth U.S. markets.",
      },
      { property: "og:title", content: "Nicene Investments — Institutional Multifamily" },
      {
        property: "og:description",
        content:
          "Disciplined acquisitions, operational excellence, and long-term value creation in U.S. multifamily.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Founder />
      <Strategy />
      <Portfolio />
      <WhyMultifamily />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "#about"],
    ["Founder", "#founder"],
    ["Strategy", "#strategy"],
    ["Properties", "#portfolio"],
    ["Process", "#process"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="container-x flex items-center justify-between py-6">
        <a href="#top" className="flex items-center gap-3 text-ivory">
          <Mark />
          <div className="leading-tight">
            <div className="font-display text-xl tracking-wide text-ivory">Nicene</div>
            <div className="eyebrow text-[0.6rem] text-gold">Investments</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-ivory/85 hover:text-gold transition-colors"
            >
              {label}
            </a>
          ))}
          <a href="#contact" className="btn-outline">
            Invest With Us
          </a>
        </nav>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-ivory border border-ivory/30 px-3 py-2 text-xs font-semibold tracking-widest uppercase"
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-charcoal/95 backdrop-blur border-t border-ivory/10">
          <div className="container-x py-6 flex flex-col gap-4">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-ivory/90 hover:text-gold text-sm tracking-wide"
              >
                {label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-outline self-start mt-2">
              Invest With Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Mark() {
  return (
    <div className="relative h-10 w-10 shrink-0">
      <div className="absolute inset-0 border border-gold" />
      <div className="absolute inset-1.5 bg-primary flex items-center justify-center">
        <span className="font-display text-ivory text-lg leading-none">N</span>
      </div>
    </div>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-charcoal text-ivory"
    >
      {/* Decorative background — no photography */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-primary/25 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-gold/15 blur-3xl"
      />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-charcoal to-transparent" />

      <div className="container-x relative z-10 pb-20 md:pb-28 pt-40 max-w-4xl">
        <p className="eyebrow text-gold">
          <span className="gold-rule" />
          Institutional Multifamily Investments
        </p>
        <h1 className="mt-6 font-display text-ivory text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
          Institutional Multifamily Investments{" "}
          <span className="italic text-gold">Built for Long-Term Growth.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-ivory/80 text-base md:text-lg leading-relaxed">
          Nicene Investments, led by founder Yonnic Land, acquires and operates high-quality
          apartment communities in stable, high-growth U.S. markets — delivering disciplined,
          risk-adjusted returns for our investors.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#contact" className="btn-primary">
            Invest With Us <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="btn-outline">
            <CalendarClock className="h-4 w-4" /> Schedule a Call
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6 border-t border-ivory/15 pt-8 max-w-3xl">
          {[
            ["Asset Class", "Multifamily"],
            ["Strategy", "Value-Add"],
            ["Focus", "Cash Flow"],
            ["Horizon", "Mid to Long Term"],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="eyebrow text-gold/80 text-[0.62rem]">{k}</dt>
              <dd className="mt-2 font-display text-ivory text-lg md:text-xl">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */

function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <p className="eyebrow"><span className="gold-rule" />About the Firm</p>
          <h2 className="mt-5 text-4xl md:text-5xl text-charcoal">
            A privately held firm built on <em className="text-primary not-italic">discipline</em>{" "}
            and conviction.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-charcoal/80 text-base md:text-lg leading-relaxed">
          <p>
            Nicene Investments is a privately held multifamily investment firm focused on
            long-term value creation. We acquire institutional-quality apartment communities in
            resilient, high-growth U.S. markets and operate them with rigor.
          </p>
          <p>
            Founded by <span className="text-charcoal font-semibold">Yonnic Land</span>, an
            operator with deep experience in acquisitions, asset management, and value-add
            repositioning, the firm pairs sharp underwriting with hands-on operational leadership.
          </p>
          <blockquote className="border-l-2 border-gold pl-6 italic font-display text-2xl text-charcoal">
            "To deliver stable, risk-adjusted returns through disciplined acquisitions,
            operational excellence, and a commitment to improving the communities we serve."
          </blockquote>
          <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-border">
            {[
              ["Integrity", "Transparent reporting and aligned interests."],
              ["Discipline", "Conservative underwriting and prudent leverage."],
              ["Alignment", "Investor-first, principal capital in every deal."],
            ].map(([t, d]) => (
              <div key={t}>
                <div className="font-display text-xl text-primary">{t}</div>
                <p className="mt-2 text-sm text-charcoal/70 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOUNDER ---------------- */

function Founder() {
  return (
    <section id="founder" className="py-24 md:py-32 bg-secondary">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-3 border border-gold/60" aria-hidden />
            <div
              role="img"
              aria-label="Portrait placeholder for Yonnic Land"
              className="relative w-full aspect-[4/5] bg-secondary border border-border flex flex-col items-center justify-center text-charcoal/40"
            >
              <User className="h-24 w-24" strokeWidth={1} />
              <span className="mt-4 eyebrow text-[0.62rem] text-charcoal/50">
                Portrait Coming Soon
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <p className="eyebrow"><span className="gold-rule" />Meet the Founder</p>
          <h2 className="mt-5 text-4xl md:text-5xl text-charcoal">Yonnic Land</h2>
          <div className="mt-2 font-sans text-sm tracking-[0.2em] uppercase text-primary font-semibold">
            Founder &amp; Principal
          </div>
          <div className="mt-8 space-y-5 text-charcoal/80 text-base md:text-lg leading-relaxed">
            <p>
              Yonnic Land founded Nicene Investments to build a multifamily platform defined by
              operational rigor and investor alignment. His career spans acquisitions, asset
              management, and value-add repositioning across multiple Sun Belt markets.
            </p>
            <p>
              His approach is fundamentals-driven: stress-tested underwriting, conservative
              leverage, and a relentless focus on the operating fundamentals — occupancy,
              resident retention, and net operating income — that ultimately compound investor
              returns.
            </p>
          </div>
          <ul className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {[
              "Multifamily acquisitions & sourcing",
              "Market analysis and underwriting",
              "Hands-on asset management",
              "Capital structure & investor relations",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-charcoal/80">
                <ChevronRight className="h-4 w-4 mt-1 text-gold shrink-0" />
                <span className="text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- STRATEGY ---------------- */

function Strategy() {
  const pillars = [
    {
      icon: Wrench,
      n: "01",
      title: "Value-Add Multifamily",
      body:
        "Acquire underperforming assets where we can improve interiors, amenities, and operations to unlock embedded value.",
    },
    {
      icon: MapPin,
      n: "02",
      title: "Market Selection",
      body:
        "Focus on high-growth, landlord-friendly markets with durable population, employment, and household-formation tailwinds.",
    },
    {
      icon: TrendingUp,
      n: "03",
      title: "Operational Excellence",
      body:
        "Partner with proven property management teams to maximize NOI, resident satisfaction, and long-term asset performance.",
    },
    {
      icon: ShieldCheck,
      n: "04",
      title: "Conservative Underwriting",
      body:
        "Stress-tested financial models, disciplined leverage, and long-term hold strategies that survive market cycles.",
    },
  ];
  return (
    <section id="strategy" className="py-24 md:py-32 bg-charcoal text-ivory">
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold"><span className="gold-rule" />Investment Strategy</p>
          <h2 className="mt-5 text-4xl md:text-5xl text-ivory">
            Four pillars guiding every <span className="italic text-gold">acquisition</span>.
          </h2>
          <p className="mt-6 text-ivory/70 text-lg leading-relaxed">
            Our strategy is deliberately narrow: institutional-quality multifamily, in markets we
            understand, executed by operators we trust.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-px bg-ivory/10 border border-ivory/10">
          {pillars.map(({ icon: Icon, n, title, body }) => (
            <div key={n} className="bg-charcoal p-8 md:p-10 group">
              <div className="flex items-start justify-between">
                <Icon className="h-8 w-8 text-gold" />
                <span className="font-display text-3xl text-ivory/30">{n}</span>
              </div>
              <h3 className="mt-8 text-2xl md:text-3xl text-ivory">{title}</h3>
              <p className="mt-4 text-ivory/70 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROPERTIES ---------------- */

function Portfolio() {
  const properties = [
    {
      name: "Heritage Apartments",
      market: "Mt Pleasant, TX",
      plan:
        "A well-located multifamily community in Mt Pleasant, Texas — owned and operated by Nicene Investments with a focus on resident experience, thoughtful improvements, and long-term stewardship.",
      stats: [
        ["Market", "Mt Pleasant, TX"],
        ["Asset Type", "Multifamily"],
        ["Status", "Owned & Operated"],
      ],
      url: "https://heritageapartmentsmtpleasant.com",
    },
  ];
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <p className="eyebrow"><span className="gold-rule" />Properties</p>
            <h2 className="mt-5 text-4xl md:text-5xl text-charcoal">
              Communities we <em className="text-primary not-italic">own and operate</em>.
            </h2>
          </div>
          <p className="text-sm text-charcoal/60 max-w-sm">
            Our growing portfolio of multifamily assets, actively managed for long-term value
            and resident satisfaction.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((p) => (
            <article
              key={p.name}
              className="group bg-card border border-border flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-secondary flex items-center justify-center">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(0,0,0,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.6) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <Building2 className="relative h-20 w-20 text-primary/60" strokeWidth={1} />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-[0.62rem] tracking-[0.18em] uppercase font-semibold px-3 py-1.5">
                  Owned
                </span>
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary font-semibold">
                  <MapPin className="h-3.5 w-3.5" />
                  {p.market}
                </div>
                <h3 className="mt-3 font-display text-2xl text-charcoal">{p.name}</h3>
                <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">{p.plan}</p>
                <dl className="mt-6 pt-6 border-t border-border grid grid-cols-3 gap-2">
                  {p.stats.map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-[0.62rem] uppercase tracking-[0.16em] text-charcoal/50">
                        {k}
                      </dt>
                      <dd className="mt-1 font-display text-charcoal text-sm">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-8 pt-6 border-t border-border">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center"
                  >
                    Visit Property <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY MULTIFAMILY ---------------- */

function WhyMultifamily() {
  const items = [
    { icon: ShieldCheck, t: "Recession-Resistant", d: "Housing is a fundamental need — demand stays durable through cycles." },
    { icon: Banknote, t: "Monthly Cash Flow", d: "Stabilized assets generate consistent, distributable income." },
    { icon: TrendingUp, t: "Forced Appreciation", d: "Operational improvements directly increase NOI and asset value." },
    { icon: LineChart, t: "Tax Advantages", d: "Depreciation and cost-segregation benefits enhance after-tax returns." },
    { icon: Building2, t: "Tangible Asset", d: "Hard-asset ownership with intrinsic, replacement-cost value." },
    { icon: Wrench, t: "Operational Lever", d: "Active management drives outcomes — not market timing." },
  ];
  return (
    <section id="why" className="py-24 md:py-32 bg-secondary">
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="eyebrow"><span className="gold-rule" />Why Multifamily</p>
          <h2 className="mt-5 text-4xl md:text-5xl text-charcoal">
            A proven asset class for <em className="text-primary not-italic">long-term wealth</em>.
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="bg-background p-8">
              <Icon className="h-7 w-7 text-primary" />
              <h3 className="mt-6 font-display text-2xl text-charcoal">{t}</h3>
              <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */

function Process() {
  const steps = [
    { n: "01", t: "Join the Investor Network", d: "Create your investor profile and gain access to current and upcoming opportunities." },
    { n: "02", t: "Review Opportunities", d: "Receive detailed offering memoranda with underwriting, market analysis, and business plan." },
    { n: "03", t: "Invest with Confidence", d: "Execute documents through a secure portal with full transparency on terms and structure." },
    { n: "04", t: "Updates & Distributions", d: "Receive quarterly performance reports and scheduled distributions throughout the hold period." },
  ];
  return (
    <section id="process" className="py-24 md:py-32 bg-background">
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="eyebrow"><span className="gold-rule" />Investor Journey</p>
          <h2 className="mt-5 text-4xl md:text-5xl text-charcoal">
            A clear, considered <em className="text-primary not-italic">process</em>.
          </h2>
        </div>
        <ol className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((s, i) => (
            <li key={s.n} className="relative">
              <div className="font-display text-5xl text-gold/80">{s.n}</div>
              <div className="mt-3 h-px w-full bg-border relative">
                {i < steps.length - 1 && (
                  <span className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-1.5 w-1.5 bg-primary rounded-full" />
                )}
              </div>
              <h3 className="mt-5 font-display text-xl text-charcoal">{s.t}</h3>
              <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-14 flex justify-center">
          <a href="#contact" className="btn-primary">
            Join Our Investor List <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="py-24 md:py-32 bg-charcoal text-ivory">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <p className="eyebrow text-gold"><span className="gold-rule" />Contact</p>
          <h2 className="mt-5 text-4xl md:text-5xl text-ivory">
            Request more <span className="italic text-gold">information</span>.
          </h2>
          <p className="mt-6 text-ivory/70 leading-relaxed">
            Share a few details and a member of our team will be in touch to discuss current
            opportunities and answer your questions.
          </p>
          <div className="mt-10 space-y-5">
            <a href="mailto:invest@niceneinvestments.com" className="flex items-center gap-4 text-ivory/90 hover:text-gold transition-colors">
              <span className="h-10 w-10 grid place-items-center border border-gold/60"><Mail className="h-4 w-4 text-gold" /></span>
              <div>
                <div className="text-[0.62rem] uppercase tracking-[0.2em] text-ivory/50">Email</div>
                <div className="font-display text-lg">invest@niceneinvestments.com</div>
              </div>
            </a>
            <a href="tel:+19729839051" className="flex items-center gap-4 text-ivory/90 hover:text-gold transition-colors">
              <span className="h-10 w-10 grid place-items-center border border-gold/60"><Phone className="h-4 w-4 text-gold" /></span>
              <div>
                <div className="text-[0.62rem] uppercase tracking-[0.2em] text-ivory/50">Phone</div>
                <div className="font-display text-lg">(972) 983-9051</div>
              </div>
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="lg:col-span-7 bg-ivory text-charcoal p-8 md:p-12 space-y-6"
        >
          {submitted ? (
            <div className="py-16 text-center">
              <div className="font-display text-3xl text-primary">Thank you.</div>
              <p className="mt-4 text-charcoal/70 max-w-md mx-auto">
                Your request has been received. A member of our team will reach out shortly.
              </p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="First Name" name="firstName" required />
                <Field label="Last Name" name="lastName" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <Field label="Accredited Investor Status" name="accredited" placeholder="Accredited / Non-accredited / Unsure" />
              <div>
                <label className="block text-[0.62rem] uppercase tracking-[0.2em] text-charcoal/60 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Request Information <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-xs text-charcoal/50 leading-relaxed">
                By submitting, you consent to be contacted by Nicene Investments. We respect your
                privacy and never share your information.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-[0.62rem] uppercase tracking-[0.2em] text-charcoal/60 mb-2">
        {label}
        {required && <span className="text-primary ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
      />
    </div>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/70 border-t border-ivory/10">
      <div className="container-x py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <Mark />
            <div>
              <div className="font-display text-xl text-ivory">Nicene Investments</div>
              <div className="text-[0.62rem] uppercase tracking-[0.22em] text-gold">Multifamily Real Estate</div>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed max-w-md">
            A privately held multifamily investment firm focused on disciplined acquisitions and
            long-term value creation across high-growth U.S. markets.
          </p>
        </div>

        <div className="md:col-span-4">
          <div className="text-[0.62rem] uppercase tracking-[0.22em] text-gold mb-4">Navigate</div>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {[
              ["About", "about"],
              ["Founder", "founder"],
              ["Strategy", "strategy"],
              ["Properties", "portfolio"],
              ["Process", "process"],
              ["Contact", "contact"],
            ].map(([l, h]) => (
              <li key={h}>
                <a href={`#${h}`} className="hover:text-gold transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="text-[0.62rem] uppercase tracking-[0.22em] text-gold mb-4">Connect</div>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:invest@niceneinvestments.com" className="hover:text-gold">Email</a></li>
            <li><a href="#" className="hover:text-gold">LinkedIn</a></li>
            <li><a href="#" className="hover:text-gold">X / Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-x py-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-ivory/50">
          <div>© {new Date().getFullYear()} Nicene Investments. All rights reserved.</div>
          <div className="max-w-3xl leading-relaxed">
            This website is for informational purposes only and does not constitute an offer to
            sell securities. All investments involve risk.
          </div>
        </div>
      </div>
    </footer>
  );
}
