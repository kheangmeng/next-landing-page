"use client";

import ScrollReveal from "./scroll-reveal";

export default function Contact() {
  return (
    <>
      {/* <!-- Hero Section --> */}
      <section className="mb-xl text-center mt-xl">
        <ScrollReveal direction="down" distance={120}>
          <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg mb-md">
            Let’s Build the Future Together
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Have a vision for a breakthrough engineering project? Our experts are ready to
            collaborate on your next technical challenge.
          </p>
        </ScrollReveal>
      </section>
      {/* <!-- Bento Layout for Contact Information and Form --> */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mx-6">
        {/* <!-- Left Column: Contact Details & Map --> */}
        <div className="lg:col-span-7 flex flex-col gap-gutter">
          {/* <!-- Contact Info Cards --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-base">
            <ScrollReveal direction="right" distance={150}>
              <div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant contact-card-shadow flex items-start gap-sm">
                <div className="bg-primary-fixed p-sm rounded-lg">
                  <span className="material-symbols-outlined text-primary">mail</span>
                </div>
                <div>
                  <p className="text-label-sm text-primary mb-xs">Email Us</p>
                  <a
                    className="text-body-md font-medium"
                    href="mailto:solutions@SpaceTech.com?subject=Contact Us&body=I want to contact you about..."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    solutions@SpaceTech.com
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" distance={120}>
              <div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant contact-card-shadow flex items-start gap-sm">
                <div className="bg-primary-fixed p-sm rounded-lg">
                  <span className="material-symbols-outlined text-primary">call</span>
                </div>
                <div>
                  <p className="text-label-sm text-primary mb-xs">Call Us</p>
                  <a className="text-body-md font-medium" href="tel:+15550123456">
                    +1 (555) 012-3456
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" distance={90}>
              <div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant contact-card-shadow flex items-start gap-sm md:col-span-2 lg:col-span-1">
                <div className="bg-primary-fixed p-sm rounded-lg">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                </div>
                <div>
                  <p className="text-label-sm text-primary mb-xs">Visit Us</p>
                  <p className="text-body-md font-medium">
                    1200 Innovation Way, Suite 400
                    <br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        {/* <!-- Right Column: Contact Form --> */}
        <div className="lg:col-span-5">
          {/* <!-- Office Map --> */}
          <ScrollReveal direction="left" distance={120}>
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant contact-card-shadow overflow-hidden flex-grow min-h-[300px]">
              <div className="w-full h-full relative">
                <img
                  className="w-full h-full object-cover"
                  data-alt="A clean, minimalist architectural map visualization of San Francisco's tech district. The style is professional and corporate, using a light mode aesthetic with white and light gray tones. Subtle electric blue highlights indicate office locations. The lighting is bright and even, conveying high-precision engineering and urban clarity."
                  data-location="San Francisco"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYYJNukMles3cwUFpLE68zdhg5AUuQ6Uil-NYulXhS07wu1LOCllPbiTjtdXyDnyx5rcps0f6MZPgJsnRi3HuVqzXxv1wBt6OHnO5DxGpNt-QIR3XIQzniQw4AZFyrlk6lY9a3IX5MdFTRTvsVscAHWlOvrNrNR3BRzvYb7jABu-MlrDE83rfR2UG2gYFXAJqsjnq-ZXlcvkQtTC1Se63wgLMaftcfqMZLPWrzJdsGWlIv2A091TlmW8fTYb8PgmDi1N9eHLcXqvPX"
                />
                <div className="absolute inset-0 bg-primary/5"></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <section className="bg-surface-container-low py-24 border-y border-outline-variant/10 my-6">
        <div className="px-margin-desktop mx-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <ScrollReveal direction="right" distance={120}>
              <span className="text-headline-md font-headline-md text-on-background text-primary tracking-widest mb-4 block">
                Our Network
              </span>
              <h2 className="font-headline-lg text-lg font-bold">Global Presence</h2>
            </ScrollReveal>
            <ScrollReveal direction="left" distance={120}>
              <p className="font-body-md text-right text-body-md text-on-surface-variant max-w-[400px]">
                With strategic nodes in major technology hubs, SpaceTech ensures low-latency
                support and localized expertise for global enterprises.
              </p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <ScrollReveal direction="right" distance={120}>
              <div className="group cursor-pointer overflow-hidden rounded-xl border border-outline-variant/20 bg-surface">
                <div className="h-48 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    data-alt="A futuristic cityscape of New York City at night, focusing on a sleek glass and steel skyscraper with glowing blue interior lights. The architectural style is modern and professional, with a clean dark-mode aesthetic. The lighting is low-key with sharp electric blue accents against the deep black of the night sky, creating a technical and authoritative atmosphere."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdxoO9TA_5WSprSh0vQ_zbCttWFjHoyrnmIZmT9RwcsZ5rlUFX2PboPc5I2GOucdF9vDmss8iRQDz46r8k4zWvpUzQW9IrK9HhUuVadp0G38gkuqDD3bC79Gbc0MlfUcwJgJus4PqIRaXCZicYnNoAXi_23LyAO3IwFdX4dsUBxFBkLxNVdDN_mU_Bl9xHO4H6E3JSJ-s6RwSpBvs84KO0soI4TwUOvLw3BVLEuBVdclFSa8VV4Ie93ZzlSKM5MXqLH60o04H8-hQX"
                  />
                  <div className="absolute inset-0 dark:bg-gradient-to-t from-surface to-transparent"></div>
                </div>
                <div className="p-6">
                  <h4 className="font-headline-md text-headline-md mb-2">New York HQ</h4>
                  <p className="text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
                    Our primary engineering lab and leadership headquarters overlooking Manhattan`s
                    tech district.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={120}>
              <div className="group cursor-pointer overflow-hidden rounded-xl border border-outline-variant/20 bg-surface">
                <div className="h-48 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    data-alt="The modern skyline of Tokyo at twilight, emphasizing a high-tech corporate office building with minimalist geometric lines. The visual tone is sophisticated and data-driven, featuring a high-fidelity dark mode palette with subtle neon blue highlights. The scene is illuminated by the soft ambient glow of city lights, reflecting a state-of-the-art, mission-control environment."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7tw4XPnb-9a3BE-fiocbQ8l0cN4cfFzaCnyJIDPLl-Nl8UtM1dd5VqhHQH-o5AJ9QgYx_eWtaCSgTFJfQNfOSAEIhupu41-0r0DI_UxPWCHA72C3U-oB-k7trzkwSYz5eTrVbzVpnxofANpLQSWlMdCeH7f9WxMMcWLk-6j0kpQAL9fDhqyoXdtQHk52JXnY3rVmg1wJe66RrWHFjqBzFh2tK1qo6b3O16It0rw2mtcuCOXjfDpAlrw6HCbUsB_JyCbwfwFCvbY81"
                  />
                  <div className="absolute inset-0 dark:bg-gradient-to-t from-surface to-transparent"></div>
                </div>
                <div className="p-6">
                  <h4 className="font-headline-md text-headline-md mb-2">Tokyo Office</h4>
                  <p className="text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
                    Our hub for APAC operations, specializing in hardware acceleration and regional
                    infrastructure.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" distance={120}>
              <div className="group cursor-pointer overflow-hidden rounded-xl border border-outline-variant/20 bg-surface">
                <div className="h-48 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    data-alt="A sleek, contemporary office exterior in London's financial district, captured with a technical architectural lens. The design is uncompromisingly functional, utilizing dark materials and 1px thin luminous borders to define the building's structure. The atmosphere is quiet yet powerful, with deep blacks and cool blue lighting that minimize eye strain while exuding professional authority."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdjBEDHrBgVpd9KCvXpioAb44u_EbKWw1D85dmaJjMUg7HpmUqoUFa-UjBQZo1B5Kvn4dXvhRWSvMyRU94N8TLCbDBSaCzkgLPc0YnIRYoirHSiF7PWR2fLJRh3xW30mEFP3ksruScxy6gOGBSicbPiyqvUlZTyve5zcoq0fkW_IyWvbs1LxRZ3RHeIZ9f8jrEugF6QjpPdOMpV2RjcJn9xkaIkcLXQafSKZ3msEKXaEflRuI06iPXnVekkfvlso0WKnX_AYTuW-RN"
                  />
                  <div className="absolute inset-0 dark:bg-gradient-to-t from-surface to-transparent"></div>
                </div>
                <div className="p-6">
                  <h4 className="font-headline-md text-headline-md mb-2">London Node</h4>
                  <p className="text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
                    Strategically located for European data governance and security compliance
                    engineering.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
