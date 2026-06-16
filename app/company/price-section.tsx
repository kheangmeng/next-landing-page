"use client";

import Link from "next/link";
import ScrollReveal from "./scroll-reveal";

export default function Price() {
  return (
    <>
      {/* <!-- Hero Section --> */}
      <section className="max-w-container-max mx-auto text-center mb-xl mt-xl">
        <ScrollReveal direction="down" distance={130}>
          <h1 className="font-display-lg text-display-lg text-on-background mb-sm md:text-display-lg sm:text-display-lg-mobile text-primary">
            Pricing Plans
          </h1>
          <p className="text-on-surface-variant text-body-lg max-w-2xl mx-auto font-body-lg">
            Scale your technical infrastructure with surgical precision. Choose a plan that aligns
            with your enterprise growth and compute requirements.
          </p>
        </ScrollReveal>
      </section>
      {/* <!-- Pricing Tiers Grid --> */}
      <section className="flex flex-col justify-center items-center mx-6">
        <div className="max-w-container-max w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter mb-xl mx-lg">
          {/* <!-- Starter Plan --> */}
          <ScrollReveal direction="right" distance={120}>
            <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant pricing-card-shadow flex flex-col transition-all duration-300">
              <div className="mb-md">
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs">Starter</h3>
                <p className="text-on-surface-variant text-body-md font-body-md">
                  Ideal for small specialized teams.
                </p>
              </div>
              <div className="mb-lg">
                <span className="text-display-lg font-display-lg text-on-background">$499</span>
                <span className="text-on-surface-variant text-body-md font-body-md">/mo</span>
              </div>
              <ul className="flex-grow space-y-sm mb-lg">
                <li className="flex items-center gap-sm">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="text-on-surface text-body-md font-body-md">
                    Basic API Access
                  </span>
                </li>
                <li className="flex items-center gap-sm">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="text-on-surface text-body-md font-body-md">
                    100 Compute Hours
                  </span>
                </li>
                <li className="flex items-center gap-sm">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="text-on-surface text-body-md font-body-md">
                    Standard Email Support
                  </span>
                </li>
                <li className="flex items-center gap-sm opacity-40">
                  <span className="material-symbols-outlined">cancel</span>
                  <span className="text-on-surface text-body-md font-body-md">
                    Dedicated Hardware
                  </span>
                </li>
              </ul>
              <button className="w-full py-sm px-md rounded-lg border border-primary text-primary font-label-md hover:bg-primary/5 transition-colors active:scale-95">
                Get Started
              </button>
            </div>
          </ScrollReveal>
          {/* <!-- Pro Plan (Highlighted) --> */}
          <ScrollReveal direction="down" distance={120}>
            <div className="relative bg-surface-container-lowest p-lg rounded-xl border-2 border-primary pricing-card-shadow flex flex-col scale-105 z-10 transition-all duration-300">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-md py-xs rounded-full text-label-sm font-label-sm uppercase tracking-wider">
                Most Popular
              </div>
              <div className="mb-md">
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs">Pro</h3>
                <p className="text-on-surface-variant text-body-md font-body-md">
                  For growing high-performance enterprises.
                </p>
              </div>
              <div className="mb-lg">
                <span className="text-display-lg font-display-lg text-on-background">$1,299</span>
                <span className="text-on-surface-variant text-body-md font-body-md">/mo</span>
              </div>
              <ul className="flex-grow space-y-sm mb-lg">
                <li className="flex items-center gap-sm">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="text-on-surface text-body-md font-body-md">
                    Unlimited API Access
                  </span>
                </li>
                <li className="flex items-center gap-sm">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="text-on-surface text-body-md font-body-md">
                    500 Compute Hours
                  </span>
                </li>
                <li className="flex items-center gap-sm">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="text-on-surface text-body-md font-body-md">
                    24/7 Priority Support
                  </span>
                </li>
                <li className="flex items-center gap-sm">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="text-on-surface text-body-md font-body-md">
                    Advanced Analytics Dashboard
                  </span>
                </li>
              </ul>
              <button className="w-full py-sm px-md rounded-lg primary-gradient rounded-lg border-2 border-primary text-lg font-label-md hover:bg-primary/5 text-white font-label-md text-lg shadow-md hover:opacity-90 transition-all active:scale-95">
                Get Started
              </button>
            </div>
          </ScrollReveal>
          {/* <!-- Enterprise Plan --> */}
          <ScrollReveal direction="left" distance={120}>
            <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant pricing-card-shadow flex flex-col transition-all duration-300">
              <div className="mb-md">
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs">
                  Enterprise
                </h3>
                <p className="text-on-surface-variant text-body-md font-body-md">
                  Custom surgical AI solutions.
                </p>
              </div>
              <div className="mb-lg">
                <span className="text-display-lg font-display-lg text-on-background">Custom</span>
              </div>
              <ul className="flex-grow space-y-sm mb-lg">
                <li className="flex items-center gap-sm">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="text-on-surface text-body-md font-body-md">
                    Dedicated Infrastructure
                  </span>
                </li>
                <li className="flex items-center gap-sm">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="text-on-surface text-body-md font-body-md">
                    Unlimited Compute
                  </span>
                </li>
                <li className="flex items-center gap-sm">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="text-on-surface text-body-md font-body-md">
                    White-glove Concierge Support
                  </span>
                </li>
                <li className="flex items-center gap-sm">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="text-on-surface text-body-md font-body-md">
                    On-premise Deployment Options
                  </span>
                </li>
              </ul>
              <Link
                href="#contact"
                className="w-full py-sm px-md rounded-lg border border-on-background text-center text-on-background font-label-md hover:bg-on-background/5 transition-colors active:scale-95"
              >
                Contact Sales
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      {/* <!-- FAQ Section --> */}
      <section className="bg-surface-container-low py-6">
        <div className="max-w-3xl mx-auto mt-xl mb-xl">
          <ScrollReveal direction="down" distance={130}>
          <h2 className="font-headline-md text-headline-md text-on-surface text-center mb-lg text-primary">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <div className="space-y-md">
          <details className="group bg-surface-container-low rounded-xl p-md border border-outline-variant cursor-pointer transition-all">
            <summary className="flex justify-between items-center list-none font-headline-sm text-body-lg text-on-surface">
              Can I switch plans later?
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                expand_more
              </span>
            </summary>
            <div className="mt-sm text-on-surface-variant text-body-md font-body-md leading-relaxed">
              Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in
              your next billing cycle, with pro-rated credits applied for upgrades.
            </div>
          </details>

          <details className="group bg-surface-container-low rounded-xl p-md border border-outline-variant cursor-pointer transition-all">
            <summary className="flex justify-between items-center list-none font-headline-sm text-body-lg text-on-surface">
              What counts as a &quot;Compute Hour&quot;?
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                expand_more
              </span>
            </summary>
            <div className="mt-sm text-on-surface-variant text-body-md font-body-md leading-relaxed">
              A compute hour represents one hour of active processing time on our GPU-accelerated
              server clusters. Idle time is not billed, ensuring maximum cost efficiency for your
              team.
            </div>
          </details>

          <details className="group bg-surface-container-low rounded-xl p-md border border-outline-variant cursor-pointer transition-all">
            <summary className="flex justify-between items-center list-none font-headline-sm text-body-lg text-on-surface">
              Do you offer custom security SLAs?
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                expand_more
              </span>
            </summary>
            <div className="mt-sm text-on-surface-variant text-body-md font-body-md leading-relaxed">
              Absolutely. For our Enterprise customers, we offer tailored Service Level Agreements
              including 99.99% uptime guarantees, dedicated security audits, and SOC2 compliance
              reporting.
            </div>
          </details>
        </div>
        </div>

      </section>
    </>
  );
}
