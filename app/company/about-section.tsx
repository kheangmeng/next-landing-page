"use client";

import ScrollReveal from "./scroll-reveal";

export default function About() {
  return (
    <>
      {/* <!-- Our Story Timeline --> */}
      <section className="py-xl px-gutter max-w-container-max mx-auto">
        <ScrollReveal direction="right" distance={80}>
          <div className="mb-lg text-center md:text-left">
            <h2 className="text-headline-md font-headline-md text-on-background text-primary">
              Our Story
            </h2>
            <div className="h-1 w-24 bg-primary mt-sm rounded-full"></div>
          </div>
        </ScrollReveal>
        <div className="relative flex flex-col gap-xl">
          {/* <!-- Vertical Line --> */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-outline-variant transform -translate-x-1/2 hidden md:block"></div>
          {/* <!-- Timeline Item 1 --> */}
          <ScrollReveal direction="down" distance={80}>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-md">
              <div className="md:w-5/12 text-left md:text-right order-2 md:order-1">
                <h3 className="text-headline-sm font-headline-sm text-primary">2014</h3>
                <h4 className="text-body-lg font-bold">The Inception</h4>
                <p className="text-body-md text-on-surface-variant mt-sm">
                  SpaceTech was founded in a small lab with a singular focus: redefining how data
                  centers consume energy through liquid cooling breakthroughs.
                </p>
              </div>
              <div className="relative z-10 w-8 h-8 rounded-full bg-primary border-4 border-surface shadow-sm order-1 md:order-2"></div>
              <div className="md:w-5/12 order-3">
                <img
                  alt="Laboratory inception"
                  className="rounded-xl shadow-sm object-cover aspect-video w-full"
                  data-alt="A cinematic, high-key photograph of a sterile, modern technology laboratory at night. Blue ambient lighting illuminates sleek aluminum workbenches and advanced computing components. The atmosphere is clinical, professional, and suggests the beginning of a major scientific breakthrough. Sharp focus on technical details with a minimalist corporate aesthetic."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8PcjElOlAA6ZJcMS9Bdewz2hHpvKq-7v622D-gWgjpN4ycbN56lAExDvsP4mMZcjw8QNQAKzTh5uQctaM2ij49eoaqSZywEu5JUTTilgpv4coVlpGdGetZT84AxEnwGv5OMZs1J1LlJFMixrs2PuSquxMN1LGdtUqtt43Z5qhD8C_dHPK6Z33KjEew5DlrlsagLmqGqa-HauW5ZvqisRDk2hBvsZX4vz-fakJXQBXWw3BGNRNO8v6JJRBgr16cHeOgccSmdAu3QLJ"
                />
              </div>
            </div>
          </ScrollReveal>
          {/* <!-- Timeline Item 2 --> */}
          <ScrollReveal direction="down" distance={80}>
            <div className="relative flex flex-col md:flex-row-reverse items-center justify-between gap-md">
              <div className="md:w-5/12 text-left order-2 md:order-1">
                <h3 className="text-headline-sm font-headline-sm text-primary">2018</h3>
                <h4 className="text-body-lg font-bold">Scaling Globally</h4>
                <p className="text-body-md text-on-surface-variant mt-sm">
                  Opening our first international headquarters in Singapore, we expanded our
                  precision-led solutions to over 40 countries across three continents.
                </p>
              </div>
              <div className="relative z-10 w-8 h-8 rounded-full bg-primary border-4 border-surface shadow-sm order-1 md:order-2"></div>
              <div className="md:w-5/12 order-3">
                <img
                  alt="Global Expansion"
                  className="rounded-xl shadow-sm object-cover aspect-video w-full"
                  data-alt="A stunning low-angle architectural photograph of a modern glass skyscraper reflecting a clear blue sky. The building features clean, sharp lines and steel frameworks characteristic of contemporary corporate engineering. The lighting is bright and airy, symbolizing growth, transparency, and global reach. High-end, premium look with deep navy and crisp white tones."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC94ftLZiIN98FdUkoIubYZVNjtpiB55UWxZI8cXQmY7YtNnnDxzF3AH_y1WLy95LLX47F8fos4qf6vCudAdBe5S9Sb_pj-7zSGXkYENB7zQULyPR3UQ7qfNWq_bP9fdvVFhWE8hrlGUXOPRvuhnQKt9y69229h7WKqTphcz5v5p0qrox2I8MTfzmFSL44dTl2ZVit7JxaXA7UnXlKXq2CzcvtoTwJHb50C-aZDd6tW9SyOE5mK01m4ZNO62UTadFZFm8u3R3ICgHPw"
                />
              </div>
            </div>
          </ScrollReveal>
          {/* <!-- Timeline Item 3 --> */}
          <ScrollReveal direction="down" distance={80}>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-md">
              <div className="md:w-5/12 text-left md:text-right order-2 md:order-1">
                <h3 className="text-headline-sm font-headline-sm text-primary">2024</h3>
                <h4 className="text-body-lg font-bold">Carbon Neutrality Reached</h4>
                <p className="text-body-md text-on-surface-variant mt-sm">
                  Today, SpaceTech stands as an industry leader, achieving 100% renewable energy
                  usage across all global manufacturing facilities.
                </p>
              </div>
              <div className="relative z-10 w-8 h-8 rounded-full bg-primary border-4 border-surface shadow-sm order-1 md:order-2"></div>
              <div className="md:w-5/12 order-3">
                <img
                  alt="Sustainable Future"
                  className="rounded-xl shadow-sm object-cover aspect-video w-full"
                  data-alt="A breathtaking landscape of a futuristic wind farm integrated into a lush green countryside. The sun is setting, casting a golden, optimistic light across modern wind turbines that look like sculptural art pieces. The scene combines nature with high-technology in a harmonious, sustainable vision. The aesthetic is clean, bright, and environmentally conscious."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNRTg86EquAuFN6BdOVT_TkMqnTTf_yxyFOyY8NSr_kvSz7HIGAJESrzvyWBx3rxHvC95yq-bekfUWuhTYBLTXRWfGSsE970FZ92ll_2hQyiDJb4DIgi0Whkqmt5JpKWEkZb8cvmp9EDcAhQFWcvf2hauDgWsnsOAcovR-ug6Q8lI3mkXfsJdixVifLr-M9Rf31FJUOyKp4lgU1acK1AKommy0bam_bRiVEE6toVRsjz7n_o1T746pIbCj9ECYenYw5tKbrsw_IP52"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      {/* <!-- Leadership Team Grid --> */}
      <section className="bg-surface-container py-xl">
        <div className="max-w-container-max mx-auto px-gutter">
          <ScrollReveal direction="down" distance={120}>
            <div className="mb-lg text-center">
              <h2 className="text-headline-md font-headline-md text-on-background">
                Meet the Leadership Team
              </h2>
              <p className="text-body-md text-on-surface-variant mt-sm">
                Visionaries steering the future of engineering.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
            {/* <!-- Member 1 --> */}
            <ScrollReveal direction="down" distance={250}>
              <div className="group bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square overflow-hidden bg-surface-container-high">
                  <img
                    alt="CEO"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    data-alt="A professional, high-end studio portrait of a corporate male leader in his late 40s. He wears a tailored navy blue suit and a soft gray shirt. The lighting is flattering, Rembrandt-style, against a minimalist soft gray background. The overall look is authoritative yet approachable, reflecting high-precision professionalism and corporate modernism."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOna9jrcDecW4wRHvIPYfdGvuHmKWapNcZGYLGCVDQiv8F5GdJu7FCl_m8igkTzpVu51WYOOAmfK46p1f1viKK0AUEP_0bM2Ry5kNv4iP7FfwdW1rKX86Xr24e6pYvWWyaaks7F6kHKSYXEJ8xWiqEEPeGhF5TkrVjsbah9M7rCv36p-tSgqsh8zJHRpcmGZ8VOiLYEXuRWvWXsF4Tcvl_7S0nv2yp3KyEav6V-K9yYvRfuOjN7DqQteE9srGcxIZbWZGi5zHYT5SS"
                  />
                </div>
                <div className="p-md">
                  <h4 className="text-body-lg font-bold text-on-surface">Marcus Thorne</h4>
                  <p className="text-label-md font-label-md text-primary mt-xs">
                    Chief Executive Officer
                  </p>
                </div>
              </div>
            </ScrollReveal>
            {/* <!-- Member 2 --> */}
            <ScrollReveal direction="down" distance={180}>
              <div className="group bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square overflow-hidden bg-surface-container-high">
                  <img
                    alt="CTO"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    data-alt="A high-end professional headshot of a female technology executive. She has a confident, serene expression and wears a sharp, minimalist charcoal blazer. The lighting is bright and modern, creating a clear, sophisticated look. The background is a slightly blurred high-tech office environment with blue tones, maintaining a corporate and surgical aesthetic."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWf6_7f9-WCMHO_iGgjChf9DspnOR-dWRNn-tWfBEuIAtGwRI6rz5FgynXrVg5R5n8Gna3ciKg5yGdPKK2l6RAb82fDNdWVq0bBVbsmRb8JCE8LdkI8g0b9Vp64H7dNuQrvQ_al5rUnFPnZfUvGP3oiWi6aOnoVM6zO24cHm_2XTVsWQ5oYcoBzX_yLMh9QwZhvDf_CD4F_qFJnit1tivlweCoU4FEYz0x-S90Dcc10vNXPdphjN4wJN7jSPXlUkbp2QCxYA5RlHOi"
                  />
                </div>
                <div className="p-md">
                  <h4 className="text-body-lg font-bold text-on-surface">Dr. Elena Vance</h4>
                  <p className="text-label-md font-label-md text-primary mt-xs">
                    Chief Technology Officer
                  </p>
                </div>
              </div>
            </ScrollReveal>
            {/* <!-- Member 3 --> */}
            <ScrollReveal direction="down" distance={150}>
              <div className="group bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square overflow-hidden bg-surface-container-high">
                  <img
                    alt="COO"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    data-alt="A portrait of a male executive in a bright, modern glass-walled boardroom. He is wearing a minimalist, professional dark blue sweater over a collared shirt. The lighting is high-key and airy, emphasizing clarity and precision. The aesthetic is modern corporate, focusing on reliable leadership and forward-thinking innovation."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpm8yYM0IP6IJCU18dnBQ0Jr7MUQg-ukXHdR35Vlk-nqeqBO_IDD0rx1IFP_4_Jbe4blBVK6B-UrAchlDN8jggRz4zNhrN_UDbpswNLGuD-Urx2yzqnUgu2RZb1i_vAPmCSlZ7D8vvhPTL-NvHfrtLcCwZ02oUexAwf1flOLfpv2bCw6yXIIR-7RAktn1qu3qYMzZ4Av11wQmTX-qOTvlFTrNYE2RasdrL5jzUM4HqGkvorDaX9i_9uLYo7rCspE7V_yUhkjQbCVKS"
                  />
                </div>
                <div className="p-md">
                  <h4 className="text-body-lg font-bold text-on-surface">Jameson Cole</h4>
                  <p className="text-label-md font-label-md text-primary mt-xs">
                    Chief Operations Officer
                  </p>
                </div>
              </div>
            </ScrollReveal>
            {/* <!-- Member 4 --> */}
            <ScrollReveal direction="down" distance={50}>
              <div className="group bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square overflow-hidden bg-surface-container-high">
                  <img
                    alt="Impact Lead"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    data-alt="A professional studio portrait of a woman of color in a smart, modern lavender business suit. Her expression is warm and optimistic. The lighting is soft and even, highlighting a clean, high-precision aesthetic. The background is a solid off-white, keeping the focus entirely on the subject and reflecting a premium, minimalist brand identity."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIBscF8t5jZ_I3r9uhnlw5NayLuB86MRAH7HaMGLl2T9FmF54SbNNgCaDUVresv-DITtQkGTsEE6palfG5Z3jCPlyY1NkKza3X7BKNGJNa4VFobkxcM6IzPZZByZX6McRSritAUHYRDcQesNZ8o1EJLEEiJF4xh1jMUtZ1MybdTVYvzEnhM1GJeWNKjaNCMSji3o6WQwdQXE_k6wDERh3_oJ7R-mUEyULtd3RrGH8a41h2iZvk80Dvhol6mAmVkxuianVJMJ_GKS-X"
                  />
                </div>
                <div className="p-md">
                  <h4 className="text-body-lg font-bold text-on-surface">Sarah Lin</h4>
                  <p className="text-label-md font-label-md text-primary mt-xs">
                    Head of Sustainability
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
