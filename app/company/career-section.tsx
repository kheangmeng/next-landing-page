"use client";

import Link from "next/link";
import ScrollReveal from "./scroll-reveal";

export default function Career() {
  return (
    <>
      {/* <!-- Hero Section --> */}
      <section className="relative px-lg py-xl md:py-[120px] overflow-hidden">
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="max-w-[720px]">
            <ScrollReveal direction="right" distance={80}>
              <span className="inline-block px-sm py-xs bg-secondary-container text-on-secondary-container rounded-full text-label-sm font-label-sm mb-md uppercase tracking-wider">
                Join Our Team
              </span>
              <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg mb-md leading-tight text-on-background">
                Join the Future of Innovation
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="right" distance={120}>
              <p className="text-body-lg text-on-surface-variant mb-lg leading-relaxed max-w-[500px]">
                We`re building the next generation of precision-engineered technical solutions. Be
                part of a global team committed to excellence and craftsmanship.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" distance={150}>
              <div className="flex gap-base">
                <a
                  className="bg-primary text-on-primary px-lg py-md rounded-xl text-label-md font-label-md shadow-lg hover:shadow-xl transition-all"
                  href="#positions"
                >
                  View Openings
                </a>
                <a
                  className="border border-outline px-lg py-md rounded-xl text-label-md font-label-md text-on-surface hover:bg-surface-container transition-all"
                  href="#culture"
                >
                  Our Culture
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
        {/* <!-- Background Decorative Element --> */}
        <div className="absolute top-0 right-0 w-1/2 h-full -z-10 dark:opacity-30 hidden md:block">
          <img
            className="w-full h-full object-cover rounded-bl-[160px]"
            data-alt="A minimalist architectural shot of a modern glass office building interior with sharp lines and high-precision steel structures. The lighting is bright and clean, emphasizing a corporate light-mode aesthetic with a blue-tinted professional atmosphere. The composition is expansive, suggesting innovation and high-end technical craftsmanship."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB1GaNJFutw7r-8vqno3XinNm2YReaWpOCO64O2turyeUsT22WGWUJt2ZpIrnlq21QRKg3WCNS_cCVsPY1LZ7uTPaLXIInBK-cV0vNtoieaOtufgb52PIcafxTfQ2sKIQY5Y1EJUoNUvxLGxZNntgSOjHEJGB9czmt3ZtNumCKWPkXxmZ2pEArHnADfNcn2yEQ69L9-7Spwnkz_qh7YckxN33nqq_ABRlnSLNP6t0gdK5rj6cI3SjgE4RjghIh2o-ThQX9YWwt6uHG"
          />
        </div>
      </section>
      {/* <!-- Our Values Grid --> */}
      <section className="px-lg py-xl bg-surface">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-xl gap-md">
            <ScrollReveal direction="right" distance={80}>
              <div className="max-w-[500px]">
                <h2 className="text-headline-md font-headline-md text-on-surface mb-sm">
                  Our Values
                </h2>
                <p className="text-body-md text-on-surface-variant">
                  The principles that guide every line of code we write and every decision we make.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            <ScrollReveal direction="left" distance={80}>
              <div className="p-md border-l-4 border-primary bg-surface-container-lowest">
                <h4 className="text-label-md font-label-md font-bold text-primary mb-sm uppercase">
                  01 Precision
                </h4>
                <p className="text-body-md text-on-surface-variant">
                  We obsess over details. Excellence is not an act, but a habit of rigorous
                  technical precision.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" distance={120}>
              <div className="p-md border-l-4 border-outline bg-surface-container-lowest">
                <h4 className="text-label-md font-label-md font-bold text-on-surface mb-sm uppercase">
                  02 Integrity
                </h4>
                <p className="text-body-md text-on-surface-variant">
                  We build trust through radical transparency and ethical engineering practices.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" distance={160}>
              <div className="p-md border-l-4 border-outline bg-surface-container-lowest">
                <h4 className="text-label-md font-label-md font-bold text-on-surface mb-sm uppercase">
                  03 Innovation
                </h4>
                <p className="text-body-md text-on-surface-variant">
                  We don`t just follow trends; we define the future by questioning the status quo.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" distance={220}>
              <div className="p-md border-l-4 border-outline bg-surface-container-lowest">
                <h4 className="text-label-md font-label-md font-bold text-on-surface mb-sm uppercase">
                  04 Craft
                </h4>
                <p className="text-body-md text-on-surface-variant">
                  Technology is our medium. We treat every technical challenge as a work of art.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      {/* <!-- Open Positions --> */}
      <section className="px-lg py-xl" id="positions">
        <div className="max-w-container-max mx-auto">
          <ScrollReveal direction="right" distance={80}>
            <div className="mb-xl">
              <h2 className="text-headline-md font-headline-md text-on-surface mb-sm">
                Open Positions
              </h2>
              <p className="text-body-md text-on-surface-variant">
                Find your next challenge and build something remarkable.
              </p>
            </div>
          </ScrollReveal>

          <div className="mb-lg">
            <div className="flex items-center gap-sm mb-md border-b border-outline-variant pb-base">
              <span className="material-symbols-outlined text-primary" data-icon="terminal">
                terminal
              </span>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">Engineering</h3>
            </div>
            <div className="space-y-base">
              <ScrollReveal direction="up" distance={80}>
                <JobCard id="4" title="Senior Full-Stack Engineer" location="Remote • Full-time" />
              </ScrollReveal>

              <ScrollReveal direction="up" distance={80}>
                <JobCard
                  id="3"
                  title="DevOps Specialist"
                  location="San Francisco, CA • Full-time"
                />
              </ScrollReveal>
            </div>
          </div>

          <div className="mb-lg">
            <div className="flex items-center gap-sm mb-md border-b border-outline-variant pb-base">
              <span className="material-symbols-outlined text-primary" data-icon="palette">
                palette
              </span>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">Design</h3>
            </div>
            <div className="space-y-base">
              <ScrollReveal direction="up" distance={80}>
                <JobCard
                  id="2"
                  title="Product Designer (UI/UX)"
                  location="London, UK • Full-time"
                />
              </ScrollReveal>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-sm mb-md border-b border-outline-variant pb-base">
              <span className="material-symbols-outlined text-primary" data-icon="campaign">
                campaign
              </span>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">Marketing</h3>
            </div>
            <div className="space-y-base">
              <ScrollReveal direction="up" distance={80}>
                <JobCard
                  id="1"
                  title="Growth Marketing Manager"
                  location="New York, NY • Full-time"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

interface JobCardProp {
  id: string;
  title: string;
  location: string;
}
function JobCard({ id, title, location }: JobCardProp) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between p-md bg-white dark:bg-surface-container-lowest border border-outline-variant rounded-xl hover:shadow-md transition-shadow group cursor-pointer">
      <div>
        <h4 className="text-label-lg font-headline-sm text-on-surface group-hover:text-primary transition-colors">
          {title}
        </h4>
        <p className="text-label-sm text-on-surface-variant">{location}</p>
      </div>
      <Link
        href={`#${id}`}
        className="mt-md md:mt-0 flex items-center gap-xs text-primary font-bold text-label-md"
      >
        Apply Now{" "}
        <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">
          arrow_forward
        </span>
      </Link>
    </div>
  );
}
