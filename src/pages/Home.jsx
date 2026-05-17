'use client';

import { motion } from 'framer-motion';
import { Link } from "react-router-dom";


// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
        className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-gap grid grid-cols-1 md:grid-cols-2 gap-stack-md items-center"
      >
        <div className="flex flex-col gap-stack-sm">
          <h1 className="font-display-lg text-display-lg text-primary leading-tight">
            Your Cozy Place For Coffee & Conversations
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-stack-sm">
            Experience the art of slow living. Bloom Cafe combines artisanal
            coffee with a serene atmosphere designed for deep connection and
            quiet reflection.
          </p>
          <div className="flex flex-wrap gap-4">
  <Link to="/menu">
    <button className="bg-primary text-on-primary font-label-md text-label-md px-10 py-4 rounded-20px hover:translate-y-[-4px] transition-transform duration-200 premium-shadow">
      View Menu
    </button>
  </Link>
  <Link to="/reservation">
    <button className="border-2 border-primary text-primary font-label-md text-label-md px-10 py-4 rounded-20px hover:bg-primary/5 transition-colors duration-200">
      Reserve Table
    </button>
  </Link>
          </div>
        </div>
        <div className="relative h-[600px] rounded-20px overflow-hidden premium-shadow">
          <img
            alt="Bloom Cafe Interior"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_4tJ4mzNOpCWQTzYEKg8svyQJhcSL1yRjGrOhRxPNCV9MKv9A5hNq8Tz_fAsmZoyaPNZEy7W9DoDVaqq0M46GcLrsWJ_XvaX5jfAPHm04PnmFy5oQqrLTXuktqzsYWmAZaKIH8OqtpE4R12yQwXVT83_LYLm2pyxqGSrKO1vscL8kJ8a1VmiNdgxSqes7V_LHGDl1wVXLShYLCOGaJsdxd5W822RZ_4R7pPA14CHpML_yYMwKwz93fH_k4sWEQYDDG8Lt2uWGYg"
          />
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
        className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-gap grid grid-cols-1 md:grid-cols-2 gap-section-gap items-center"
      >
        <div className="order-2 md:order-1 relative h-[500px] rounded-20px overflow-hidden premium-shadow">
          <img
            alt="Our Story"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSCH-4Rpx0Q-CyvcdwZd5CVgMhEtnVuum--G0YCkeqzU9feunDeZufpTJrcq4StxeWuPMNE2WGO0tKF9n1THipnQo8dY5rdQN7D9mGy_I0Lrq75deApwdF4_QXOSQeoiNB9vnTujWHvh3dnEDASa3GFF7iBHvoJ_xbY6VWWQ6GMWIOgPkPNV3dB4cjebO-fXYUzws7sX3U37dTmRAnGfhYTEZttoP_Fin_xCwKZT3zpEPEbAokow80fhXAnSeJieNc_iC5n8lncw"
          />
        </div>
        <div className="order-1 md:order-2 flex flex-col gap-stack-sm">
          <span className="font-label-md text-label-md text-primary tracking-widest uppercase">
            Our Story
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Slow Living in Every Sip
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Founded on the principle of 'Ma'—the beauty of empty space—Bloom
            Cafe is more than just a coffee shop. It is a sanctuary for the
            neighborhood, a place where community flourishes and the rush of the
            world fades away. We source every bean with intention and craft
            every pastry with care.
          </p>
          <div>
            <button className="text-primary font-label-md text-label-md flex items-center gap-2 group transition-all duration-300">
              Learn More{" "}
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </motion.section>

      {/* Menu Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
        className="bg-surface-container-low py-section-gap"
      >
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="text-center mb-section-gap flex flex-col gap-stack-sm items-center">
            <span className="font-label-md text-label-md text-primary tracking-widest uppercase">
              The Menu
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Signature Selections
            </h2>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-stack-md"
          >
            {/* Card 1 */}
            <motion.div variants={cardVariant} className="bg-white rounded-20px overflow-hidden premium-shadow hover:translate-y-[-8px] transition-transform duration-300">
              <div className="h-64 overflow-hidden">
                <img
                  alt="Caramel Latte"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr7ykbRgdoCApL4v36i28a_ntNBA-cuib5EiMQADKvYS-kiQ6BL3oJgMo92zUTfrxqpB6SM5JfF2Py94dQDpS247NEiiXkU0IYdEyJrpnpeDkb56QqcoTZy8cDQ_C9hrV-_-1uYCJkYTNXK4ONQjWqUyh0fLuZSaCy0Gf70ttyA_qe5CzUSMoc3NuRPOqXdqnFsoAKBXy1R9oxTbGj2p5uDvYOePkmDvn_vgc8lz8sN4enPct7ej1NwcjKOelpCXk66V1iiAvwdA"
                />
              </div>
              <div className="p-stack-md flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-headline-md text-headline-md text-primary">Caramel Latte</h3>
                  <span className="font-label-md text-label-md text-primary">$6.50</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Espresso with steamed milk and a signature house-made salted caramel swirl.
                </p>
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-semibold w-fit">
                  Popular
                </span>
              </div>
            </motion.div>
            {/* Card 2 */}
            <motion.div variants={cardVariant} className="bg-white rounded-20px overflow-hidden premium-shadow hover:translate-y-[-8px] transition-transform duration-300">
              <div className="h-64 overflow-hidden">
                <img
                  alt="Matcha Croissant"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCHa_MrnD7Iltwm9dXqDKSGx-zB_EkNkIv6vV39PLc2IagvVJpFN6rhzUY3-P9up-HjlbX07tXJHQW4m0c9WF7IdAFdprvMDhpifAaKc5QHP4XhaFZtkZQN1plp-DNv3ymXf7HlTkEPtZEOyXuMXcxz8p2XN4kECfMVaViy8jlCurmeaERkSTR5vVcyFf5f4QOOc7ze0gtfxi6QJdWmn8AZRFG-CoZ0QIf8KNXX2HoAizShlK_owMwn1DjZx58pIuZVl8sGIg2lQ"
                />
              </div>
              <div className="p-stack-md flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-headline-md text-headline-md text-primary">Matcha Croissant</h3>
                  <span className="font-label-md text-label-md text-primary">$5.75</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Twice-baked buttery pastry with premium ceremonial grade matcha cream.
                </p>
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-semibold w-fit">
                  Vegan Option
                </span>
              </div>
            </motion.div>
            {/* Card 3 */}
            <motion.div variants={cardVariant} className="bg-white rounded-20px overflow-hidden premium-shadow hover:translate-y-[-8px] transition-transform duration-300">
              <div className="h-64 overflow-hidden">
                <img
                  alt="Cold Brew Signature"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNjbV8xcYJMZqcm3H7JK0h4TQ4QbzrqoMH3w-pt0Mj7xfV9HjxBeR05L7apxNlJ62ktPEkyMW_vl43f4a6NkmpgiaQ1WWQC-uaGZa3T7It1G9NW-WRlo8LEMBgmKcXAFyt2-o3DMms3JTqOljfiokADTf8GYWh4we2V2jrg5eJy7n_3P-KryjU3DFRX4yUGHIZ5GmGdjjZwY_e65ruxK1Gg8SSjm_IrNcpr1FTCfbfU7Tan5kBCvuBYGfTN0yrzOBDmB8BJ4KC0Q"
                />
              </div>
              <div className="p-stack-md flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-headline-md text-headline-md text-primary">Cold Brew</h3>
                  <span className="font-label-md text-label-md text-primary">$5.25</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  24-hour slow-steeped single origin beans with floral and chocolate notes.
                </p>
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-semibold w-fit">
                  Refreshing
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
        className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-gap"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
          <div className="p-stack-md flex flex-col items-center text-center gap-stack-sm bg-white rounded-20px premium-shadow border border-surface-container">
            <div className="w-16 h-16 rounded-full bg-secondary-fixed flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-4xl">eco</span>
            </div>
            <h4 className="font-headline-md text-headline-md text-primary">Premium Ingredients</h4>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Ethically sourced, single-origin beans and local organic dairy for the purest flavors.
            </p>
          </div>
          <div className="p-stack-md flex flex-col items-center text-center gap-stack-sm bg-white rounded-20px premium-shadow border border-surface-container">
            <div className="w-16 h-16 rounded-full bg-secondary-fixed flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-4xl">laptop_mac</span>
            </div>
            <h4 className="font-headline-md text-headline-md text-primary">Cozy Workspace</h4>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Thoughtfully designed corners with high-speed fiber and quiet ambient music.
            </p>
          </div>
          <div className="p-stack-md flex flex-col items-center text-center gap-stack-sm bg-white rounded-20px premium-shadow border border-surface-container">
            <div className="w-16 h-16 rounded-full bg-secondary-fixed flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-4xl">sentiment_satisfied</span>
            </div>
            <h4 className="font-headline-md text-headline-md text-primary">Friendly Service</h4>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Our baristas are curators of experience, dedicated to making your visit perfect.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
        className="bg-surface-container-high py-section-gap"
      >
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <h2 className="font-headline-lg text-headline-lg text-primary text-center mb-section-gap">
            Echoes from our Guests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
            <div className="bg-surface p-stack-md rounded-20px premium-shadow flex flex-col gap-4">
              <div className="flex gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="font-body-lg text-body-lg italic text-on-surface">
                "The most peaceful cafe in the city. The Matcha Croissant is a literal masterpiece, and the staff remembers my name every time."
              </p>
              <div className="flex items-center gap-4 mt-2">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed overflow-hidden">
                  <img
                    alt="Elena Rodriguez"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6HeeoLKj1oZj8M4Vw0PDXRv0u5YbjLbV8ELN8_n2QnhS7PNOLlPIlWVuSGmSuPgnwk6BAcPX-43h_p26uG-VaU7-gX49t_2eKHhid_PSst9bUhIt7QN2ZTgmdhcms8BCks2LS6p6XhO2Z4rfbT6hIpeoQYRVUWVkBBFtsgqq0DQDAu0yS-1hFQuOV_fbc7jfuWIdstRxf75Dd3k4fftALe9dQaXSkVvECfkRS-cSolJPNc-lH_5GFPT6YjxaJDJVz7walPF-Fiw"
                  />
                </div>
                <div>
                  <p className="font-label-md text-label-md text-primary">Elena Rodriguez</p>
                  <p className="text-xs text-on-surface-variant">Graphic Designer</p>
                </div>
              </div>
            </div>
            <div className="bg-surface p-stack-md rounded-20px premium-shadow flex flex-col gap-4">
              <div className="flex gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="font-body-lg text-body-lg italic text-on-surface">
                "Bloom Cafe has become my second office. The lighting is perfect for focus, and the coffee quality is consistently incredible."
              </p>
              <div className="flex items-center gap-4 mt-2">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed overflow-hidden">
                  <img
                    alt="James Chen"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzVcVcYkNIh3Hl3_GywGGlmavRN0Mq-NbGrNByWQMHY_ZY99dAoEj7X242GthkuWhFPP5zjt9w5i7HUWYPub-79mO-GAAY9zRA6FEXaE8yhgscrlmXqlnLI9wiqrgcps4Cc06iw9QG-LGR7rjN5uthrJ70Rw3MV81FAt7NhFRVJQkRoAM1ud_AuGPiX54CQObByr0-blbASAJAJSBZmPOkn4Cz3qWtUvYI2OYBVRGl1AEC75t09Ad1pibveXRsHe1S4CXROZTVcw"
                  />
                </div>
                <div>
                  <p className="font-label-md text-label-md text-primary">James Chen</p>
                  <p className="text-xs text-on-surface-variant">Software Architect</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
        className="bg-primary text-on-primary py-section-gap"
      >
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center flex flex-col items-center gap-stack-sm">
          <h2 className="font-display-lg text-display-lg text-on-primary-container">
            Ready To Enjoy Your Next Coffee Break?
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary-container/80 max-w-2xl">
            Reserve your table today and experience the tranquility of our curated space. Whether it's
            a morning meeting or a quiet afternoon with a book, we have the perfect spot for you.
          </p>
          <button className="mt-stack-md bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md px-12 py-5 rounded-20px hover:scale-105 transition-transform duration-300 shadow-lg">
            Reserve Now
          </button>
        </div>
      </motion.section>
    </main>
  );
}