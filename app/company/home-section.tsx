"use client";

import Link from "next/link";
import ScrollReveal from "./scroll-reveal";

export default function Home() {
  return (
    <>
      {/* <!-- Hero Section --> */}
      <section className="relative min-h-[921px] flex items-center px-gutter overflow-hidden bg-surface-bright">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[120%] bg-surface-container-highest/30 rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-[10%] -left-[5%] w-[40%] h-[80%] bg-primary/5 rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-container-max mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-gutter items-center relative z-10">
          <div className="md:col-span-7 space-y-md">
            <ScrollReveal direction="down" distance={80}>
              <div className="inline-flex items-center gap-base px-sm py-xs bg-secondary-container text-on-secondary-container rounded-full text-label-sm font-label-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Next-Gen Intelligence Available Now
              </div>
              <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg tracking-tight text-on-background">
                Innovating the <span className="text-primary">Future of AI</span> for Enterprise
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" distance={70}>
              <p className="text-body-lg font-body-lg text-on-surface-variant">
                SpaceTech delivers high-precision engineering solutions that transform complex
                data into actionable intelligence. Scale faster with our surgical AI infrastructure.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" distance={50}>
              <div className="flex flex-col sm:flex-row gap-base pt-base">
                <button className="px-lg py-md bg-primary text-on-primary dark:text-white rounded-xl font-label-md text-label-md shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                  Explore Solutions
                </button>
                <button className="px-lg py-md border border-outline text-on-surface rounded-xl font-label-md text-label-md hover:bg-surface-container-low transition-colors">
                  Watch Tech Demo
                </button>
              </div>
            </ScrollReveal>
          </div>
          <div className="md:col-span-5 relative hidden md:block">
            <ScrollReveal direction="left" distance={80}>
              <div className="relative w-full aspect-square rounded-[32px] overflow-hidden shadow-2xl">
                <img
                  alt="Precision AI Core Visualization"
                  className="w-full h-full object-cover"
                  data-alt="A sophisticated digital rendering of an abstract AI neural network core, glowing with intense electric blue light in a clean, minimalist white environment. The lighting is crisp and surgical, emphasizing a high-precision engineering aesthetic with soft ambient shadows and a modern light-mode color palette. The composition is futuristic and professional."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0LrHKJt0nzyLPUpktCKYKFWZXE7zlIUZnUcwLUBm1doePhGn1B1jdoWP6ldco3h1vJPH1ERhUasN4VTuocP47FSARTa75cp5ekS1S-yiLCdJDxAxGE2Po1RD6B5I9Hv0JghokrZqgaML2SlE9-MJeIJoB9a9OM6VR8LwXW4gYsluYuSC1Rmp9Y5BBG28nrzSLky1JcrPS08Bn7hFBR--PzAMy6o4TxuJ-e6uobnSqjw-OqoNShYVLC0JEuhh9a7ofaEvcfFrKb-l5"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-base -left-base glass-card p-md rounded-xl shadow-xl flex items-center gap-base animate-bounce-slow">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-on-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    analytics
                  </span>
                </div>
                <div>
                  <p className="text-label-sm dark:text-black font-label-sm text-on-surface-variant">
                    Real-time Precision
                  </p>
                  <p className="text-label-md dark:text-black font-label-md text-on-surface">99.98% Accuracy</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      {/* <!-- Trusted By Section (Logo Scroll) --> */}
      <section className="py-xl border-y border-outline-variant/30 bg-surface">
        <div className="max-w-container-max mx-auto px-gutter text-center mb-lg">
          <p className="text-label-sm font-label-sm text-outline tracking-[0.2em] uppercase">
            Trusted by Global Tech Leaders
          </p>
        </div>
        <div className="logo-scroll-container overflow-hidden whitespace-nowrap">
          <div className="flex animate-scroll gap-xl items-center w-max">
            {/* <!-- Repeated logos for continuous scroll effect --> */}
            <div className="text-headline-sm font-headline-sm text-outline opacity-40 hover:opacity-100 transition-opacity flex items-center gap-xs">
              <span className="material-symbols-outlined">rocket_launch</span> NEXUS
            </div>
            <div className="text-headline-sm font-headline-sm text-outline opacity-40 hover:opacity-100 transition-opacity flex items-center gap-xs">
              <span className="material-symbols-outlined">data_object</span> SYNAPSE
            </div>
            <div className="text-headline-sm font-headline-sm text-outline opacity-40 hover:opacity-100 transition-opacity flex items-center gap-xs">
              <span className="material-symbols-outlined">cloud</span> QUANTUM
            </div>
            <div className="text-headline-sm font-headline-sm text-outline opacity-40 hover:opacity-100 transition-opacity flex items-center gap-xs">
              <span className="material-symbols-outlined">bolt</span> VELOCITY
            </div>
            <div className="text-headline-sm font-headline-sm text-outline opacity-40 hover:opacity-100 transition-opacity flex items-center gap-xs">
              <span className="material-symbols-outlined">shield</span> GUARDIAN
            </div>
            <div className="text-headline-sm font-headline-sm text-outline opacity-40 hover:opacity-100 transition-opacity flex items-center gap-xs">
              <span className="material-symbols-outlined">lan</span> NETCORE
            </div>
            {/* <!-- Duplicate for loop --> */}
            <div className="text-headline-sm font-headline-sm text-outline opacity-40 hover:opacity-100 transition-opacity flex items-center gap-xs">
              <span className="material-symbols-outlined">rocket_launch</span> NEXUS
            </div>
            <div className="text-headline-sm font-headline-sm text-outline opacity-40 hover:opacity-100 transition-opacity flex items-center gap-xs">
              <span className="material-symbols-outlined">data_object</span> SYNAPSE
            </div>
            <div className="text-headline-sm font-headline-sm text-outline opacity-40 hover:opacity-100 transition-opacity flex items-center gap-xs">
              <span className="material-symbols-outlined">cloud</span> QUANTUM
            </div>
            <div className="text-headline-sm font-headline-sm text-outline opacity-40 hover:opacity-100 transition-opacity flex items-center gap-xs">
              <span className="material-symbols-outlined">bolt</span> VELOCITY
            </div>
            <div className="text-headline-sm font-headline-sm text-outline opacity-40 hover:opacity-100 transition-opacity flex items-center gap-xs">
              <span className="material-symbols-outlined">shield</span> GUARDIAN
            </div>
            <div className="text-headline-sm font-headline-sm text-outline opacity-40 hover:opacity-100 transition-opacity flex items-center gap-xs">
              <span className="material-symbols-outlined">lan</span> NETCORE
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Core Services Section (Bento Grid Style) --> */}
      <section className="py-xl px-gutter bg-surface-bright">
        <div className="max-w-container-max mx-auto">
          <ScrollReveal direction="down" distance={80}>
            <div className="mb-xl">
              <h2 className="text-headline-md font-headline-md text-on-background mb-sm">
                Our Core Services
              </h2>
              <p className="text-body-md font-body-md text-on-surface-variant">
                We provide a modular suite of AI-driven tools designed to integrate seamlessly into
                existing enterprise workflows with surgical precision.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={90}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* <!-- Service Card 1 (Large focus) --> */}
              {/* <ScrollReveal direction="down" distance={10}></ScrollReveal> */}
              <div className="md:col-span-2 bg-surface-container-lowest p-lg rounded-xl shadow-sm border border-outline-variant hover:shadow-xl transition-all group overflow-hidden relative">
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-primary text-4xl mb-md">
                    neurology
                  </span>
                  <h3 className="text-headline-sm font-headline-sm text-on-background mb-xs">
                    Neural Architecture Design
                  </h3>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-lg">
                    Custom-built machine learning frameworks optimized for your specific hardware
                    and performance requirements.
                  </p>
                  <a
                    className="text-primary font-label-md text-label-md flex items-center gap-xs group-hover:gap-sm transition-all"
                    href="#"
                  >
                    Learn more{" "}
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
                <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                  <span className="material-symbols-outlined text-[200px]">neurology</span>
                </div>
              </div>
              {/* <!-- Service Card 2 --> */}
              <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm border border-outline-variant hover:shadow-xl transition-all group">
                <span className="material-symbols-outlined text-primary text-4xl mb-md">
                  query_stats
                </span>
                <h3 className="text-headline-sm font-headline-sm text-on-background mb-xs">
                  Predictive Analytics
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant mb-lg">
                  Anticipate market shifts with high-fidelity forecasting models.
                </p>
                <a
                  className="text-primary font-label-md text-label-md flex items-center gap-xs group-hover:gap-sm transition-all"
                  href="#"
                >
                  Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
              {/* <!-- Service Card 3 --> */}
              <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm border border-outline-variant hover:shadow-xl transition-all group">
                <span className="material-symbols-outlined text-primary text-4xl mb-md">
                  verified_user
                </span>
                <h3 className="text-headline-sm font-headline-sm text-on-background mb-xs">
                  Enterprise Security
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant mb-lg">
                  AI-powered threat detection that evolves as fast as the risks do.
                </p>
                <a
                  className="text-primary font-label-md text-label-md flex items-center gap-xs group-hover:gap-sm transition-all"
                  href="#"
                >
                  Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
              {/* <!-- Service Card 4 (Horizontal focus) --> */}
              <div className="bg-surface-container-lowest md:col-span-2 p-lg rounded-xl shadow-sm overflow-hidden relative">
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-md">
                  <div>
                    <h3 className="text-headline-sm font-headline-sm dark:text-white mb-xs">
                      Scale-Up Infrastructure
                    </h3>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      Global deployment nodes with sub-millisecond latency for real-time edge
                      computing.
                    </p>
                  </div>
                  <button className="bg-primary dark:text-white text-on-primary px-lg py-sm rounded-lg font-label-md text-label-md hover:bg-primary-container transition-colors shrink-0">
                    View Specs
                  </button>
                </div>
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-container via-transparent to-transparent"></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      {/* <!-- About Us Teaser Section --> */}
      <section className="py-xl px-gutter">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <div className="grid grid-cols-2 gap-md">
            <div className="space-y-md pt-lg">
              <ScrollReveal direction="right" distance={80}>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg transform translate-y-base">
                  <img
                    alt="Our Team in Lab"
                    className="w-full h-full object-cover"
                    data-alt="A focused high-tech engineering team working on complex circuit boards in a sleek, laboratory setting. The room is brightly lit with cool white light, featuring transparent glass partitions and a premium corporate-modern vibe. The image uses a clean, professional aesthetic with primary electric blue highlights."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvhZwYXgif69MBRI6rtEAcjYJl5NLnRQrk-Zn3pBbW4JqYFqNhIFEInKedSWi8jp0TVHuUf9aiJ0_THlOpocxTmNPl6jz8WRIBlW0n7L16BzyVzMSLY6OyxjOrmuqQkG9gQ_dx29Sklw574Q2dKrESlcdBR5tBVha5kx9oJCgngkvQesdCi4afexconHvaftsbd0E6BOJzLS7zRwUPmad-qxlgaKMGD-WJ_cj6RxyA86LLigEWqUNrPeAKagaoTfFPCHpxrMDgJdOl"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" distance={80}>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    alt="Precision Hardware"
                    className="w-full h-full object-cover"
                    data-alt="A macro shot of sophisticated computer hardware components and cooling systems, reflecting vibrant electric blue LED lights. The scene is shot in a high-key, minimalist gallery style with crisp focus and extreme detail, conveying engineering precision and technological sophistication in a light-mode friendly palette."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-zMYZtpu6q1bsgt_g_mUwEFKgVaYzhZpC_pVif48uk8GT87SGvYtAZKugMP3ICWjGFDBtmCH-GOfZe5tj70Em_o57xsSQPfQaRQ8-CBJ_LiZcyXcvbkv2aiNcR5pfin-_ajdPJA1muJ86WF8KPaudmFI6NSwrVMzPsmaIB1oGHHzqI4w8_XvCTqUuUr-xnSWQMjjQr3lNyl0WkrG4xLcQXz_XKCWR6HmRpu9UE8qUbiJ1-u-8nOv3iLU01k0PaAkkXAKrkYDPkT0Q"
                  />
                </div>
              </ScrollReveal>
            </div>
            <div className="space-y-md">
              <ScrollReveal direction="left" distance={80}>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    alt="Advanced Robotics"
                    className="w-full h-full object-cover"
                    data-alt="A sleek, modern humanoid robotic arm performing a delicate calibration task in a high-precision manufacturing facility. The background is a clean, bright white space with soft blue ambient lighting. The overall mood is futuristic, serene, and reflects high-end premium tech craftsmanship."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL4sbMfG4lIT4I8wz6GJO7zZtfxyrzD__JgRO5DArLb7_XjQRj_pGGvb7cC3oO8V3zfEQi1CI46m3R_rbT0kCagqSsQwQVAJBstLYg4WjMnnUhNU72FJs8TaWyRfSOAyFBSm1lET3I4aDDSFJkx0D4zVFVmLg6TkKHvq6r1llJHQ-t6ejYdYm6YeQYGUrb_1B2n3E90OKLbl6t-nkEcHrk0HfiwWg8JD7b0rvgxBp-P8_z7LSIM6NTjqryzD_kt0jCI2e-IABhv0tY"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" distance={80}>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg transform -translate-y-base">
                  <div className="w-full h-full bg-primary flex flex-col items-center justify-center p-md text-center">
                    <h4 className="text-display-lg-mobile font-display-lg text-white">15+</h4>
                    <p className="text-label-md font-label-md text-primary-fixed text-white">
                      Years of Innovation
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
          <ScrollReveal direction="left" distance={80}>
            <div className="space-y-md">
              <p className="text-label-sm font-label-sm text-primary tracking-widest uppercase">
                The SpaceTech Story
              </p>
              <h2 className="text-headline-md font-headline-md text-on-background text-primary">
                Crafting the standards of tomorrow`s technology.
              </h2>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Founded by a group of systems engineers and data scientists, SpaceTech was born
                from a simple mission: to bridge the gap between theoretical AI and industrial-scale
                implementation.
              </p>
              <p className="text-body-md font-body-md text-on-surface-variant">
                We believe that technology should be surgical—minimal waste, maximum impact. Our
                journey began in a small lab in Silicon Valley and has grown into a global
                powerhouse serving Fortune 500 leaders.
              </p>
              <button className="flex items-center gap-sm text-on-background font-label-md text-label-md border-b-2 border-primary pb-xs hover:border-b-4 transition-all w-fit text-primary">
                Read Our Full Story <span className="material-symbols-outlined">north_east</span>
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
      {/* <!-- CTA Section --> */}
      <section className="py-xl px-gutter mb-xl">
        <ScrollReveal direction="up" distance={90}>
          <div className="max-w-container-max mx-auto bg-primary rounded-[32px] p-lg md:p-xl text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[40%] h-full bg-white/5 skew-x-[-20deg] translate-x-20"></div>
            <div className="relative z-10 max-w-3xl mx-auto space-y-md">
              <h2 className="text-display-lg-mobile md:text-display-lg font-display-lg text-white">
                Ready to elevate your technical infrastructure?
              </h2>
              <p className="text-body-lg font-body-lg text-on-primary-container">
                Join over 2,000 global enterprises leveraging SpaceTech to lead their industries
                into the age of intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-base justify-center pt-md">
                <button className="px-xl py-md bg-white text-primary rounded-xl font-headline-sm text-headline-sm hover:bg-surface-container-lowest transition-colors">
                  Book a Strategy Call
                </button>
                <Link
                  href="#price"
                  className="px-xl py-md border border-white/30 text-white rounded-xl font-headline-sm text-headline-sm hover:bg-white/10 transition-colors">
                  Pricing Plans
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
