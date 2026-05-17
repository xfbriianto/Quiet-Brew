// src/pages/About.jsx
'use client';

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function About() {
  return (
    <main>
      {/* SECTION 1 — HERO */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="pt-24 pb-section-gap px-margin-mobile"
      >
        <div className="max-w-container-max mx-auto text-center">
          <h1 className="font-display-lg text-display-lg md:text-display-lg text-primary mb-6">
            A Place Designed For <br className="hidden md:block" /> Comfort &amp; Connection
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-16">
            Bloom Cafe was built to create meaningful moments through coffee and community.
            A sanctuary for slow living in the heart of the city.
          </p>
          <div className="w-full aspect-[21/9] rounded-xxl overflow-hidden soft-shadow">
            <img
              alt="Cafe interior with large windows, light wood furniture, and indoor plants in a Japandi style"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV7uOOPbsjkviVhbErfC_zQGafectCo3QZ-jH1A5sCGckB-f6KMq3BtYHkXJYaMeoXA8MHciAb5uJcVC2mNgqiY2ZPeA41r42i8IMUh9h-RQKSP2cgEwhTv4HeAeMosSybmWaaANiise4moGWixpH0bzUEtlUovp9NFlKPHOgCNB3brrojQQ72yJXRw9XeVoDygmN9Cm4XlM9WQcM6Y-2LEK9lkstHKz0mdfWiSC5EJSnBWQHSqC2oATinEuGW1g9z0Tpe3v48AA"
            />
          </div>
        </div>
      </motion.section>

      {/* SECTION 2 — OUR STORY */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="py-section-gap px-margin-mobile bg-white/40"
      >
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="rounded-xxl overflow-hidden soft-shadow aspect-[3/4]">
            <img
              alt="Barista pouring latte art in a warm-lit cafe"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRl-mW3wnm2-XKKtuACGl04KrrSctPdXdKUKI9-dg5OZQ2Jq-DAVrLrOxoCYNOUFuWUiaP3dx86yipPiDUJudrFzkzwLbESgAEcp3V7acMbrUf2UiBkHiyLApw3HADKgBlhkbdEeDpo0psCNpTIW0HxYea_e2zclvMpfG8q7sRMkX9wDNVCrOK5UX4AGJATHbVoUJKcf-lzW63F2Wbl5fdsKHosXGuFM2ra2B9DcMbYVHuNcYiJZHiDAnXNYujeNKsp-_Am274Vw"
            />
          </div>
          <div className="space-y-8 pr-12">
            <span className="font-label-md text-label-md text-primary tracking-widest uppercase">
              The Beginning
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Rooted in Simplicity
            </h2>
            <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
              <p>
                Bloom Cafe began with a simple vision: to create a digital detox sanctuary
                where the aroma of freshly roasted beans meets the tactile warmth of natural wood.
                Our founders, inspired by the Japandi philosophy, wanted to merge the functional
                minimalism of Japan with the cozy, rustic comfort of Scandinavia.
              </p>
              <p>
                Every piece of furniture in our cafe was handpicked to encourage "Ma"—the Japanese
                concept of negative space. This allows our guests to breathe, think, and connect
                without the rush of the outside world. Here, we don't just serve coffee; we serve
                a moment of stillness.
              </p>
              <p>
                Our passion for community drives everything we do, from sourcing ethically grown
                beans to hosting weekend workshops for local artisans.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 3 — VISION & MISSION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-section-gap px-margin-mobile"
      >
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-stack-md">
          <motion.div variants={cardVariant} className="bg-secondary-container/30 p-16 rounded-xxl soft-shadow flex flex-col justify-center border border-secondary-container/20">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">
              visibility
            </span>
            <h3 className="font-headline-md text-headline-md text-primary mb-4">Our Vision</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              To become the most comfortable creative cafe space in the city, where every guest
              feels inspired to create, relax, and belong.
            </p>
          </motion.div>
          <motion.div variants={cardVariant} className="bg-secondary-container/30 p-16 rounded-xxl soft-shadow flex flex-col justify-center border border-secondary-container/20">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">
              favorite
            </span>
            <h3 className="font-headline-md text-headline-md text-primary mb-4">Our Mission</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Serve quality coffee while building a warm community atmosphere that fosters human
              connection through hospitality and design.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION 4 — GALLERY */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="py-section-gap px-margin-mobile"
      >
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary">Moments at Bloom</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[250px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariant}
              className="col-span-2 row-span-2 rounded-xxl overflow-hidden soft-shadow"
            >
              <img
                className="w-full h-full object-cover"
                alt="Minimalist wooden table with coffee cup and wildflowers in soft morning light"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT5glS-WBEPLzeZZ_ueqIxNBrn6nIPA_Baw_q-AeSrufv5W_J1SWFQxwHVNza3hx7bDjCDmPr7uBVyR1xx0Wod0-fpeakyF8oV5EsawEx0kM11QblbYOpkEXsxb1-ie1-TqObshrlfB3inXVqalZKLFwgczksNke-Z_jmECHAx9DIG8yOlZ0SuXbhUKC4b7n6_FLjhuEH6YkIDsKSH1Cn7wxovny448pzGOfOflvxD908LL2LOZS0dy-TxWJOVew4LRDjICTdJvg"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariant}
              className="col-span-2 row-span-1 rounded-xxl overflow-hidden soft-shadow"
            >
              <img
                className="w-full h-full object-cover"
                alt="Coffee beans in a ceramic bowl on a light oak counter"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtSmX4il5jJAcrMii_EDRGFElsCGRmpMiainfUcBTb-H6nFKNR3JBclvLCqw32bdsanRcZ7cZNWG4PrzBYL2xv9kCwvQWDA7yHxAQoGDaeZpGaHN71CORxTwHOekWEk4yiDU1naeOwHZInbkIwsDvq2WFE1yNDGVNQIYbLqva3Uy0Z0xWdrkElvMb8uQzP7GNy1tJqAEpTuB_t4qtuoAnS5KFeFZhunyGy27BVx8iDnKbpg3jeOxsd3am9cWuGrdELYZaWnqNlJg"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariant}
              className="col-span-1 row-span-1 rounded-xxl overflow-hidden soft-shadow"
            >
              <img
                className="w-full h-full object-cover"
                alt="Laptop and cold brew on a bright minimalist workspace"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkyqCbmT12hvJPyvQY7hEXaOG_b9ibMeZIxlF8imR7bWk1D34ufgNVNtkSTG_b4tu_Pz5LnSQhJvhFEb08KFd90g2P35pYBfKcbvjzI10JEzqx_wQmJa0Zjd57M8d4IGIk9o_ROAfFzYLukYBt6uNTkQOIBy6i-3bUJFsp1La5OxgnEIUYenulx1Tc8iTaJeSNSo1dxRz_UvHokaenMnVl4d_ATOYLun44Il2PiwLTb3st6cPgyLpp3KXkoA2H5dWpLDc4qr6fmw"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariant}
              className="col-span-1 row-span-1 rounded-xxl overflow-hidden soft-shadow"
            >
              <img
                className="w-full h-full object-cover"
                alt="Artisanal cake on a ceramic dish in a cozy cafe corner"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD57U_vDRl6wpyKhVVp99yNQ1WwzfdOs7-7nM2fWCsg-gUEse1tnhXgvNT0vdNb11vyUBfXDQbdccYvx-AZQHpmPx03ug47MqQ-hoYsv5hs3R5Xlq-fyeXjwM1fERZWwYSzyHGjD7Xizi9EZPQf5VEYQ9isI2GkA8yxGZg3I4Q1T7Ws8IAhZQaglWKSvQhFvXe4JH8KBk4o0h2pHuc9tiM7A6i_VhGOlYmc-hVri3lc4akwhvXVlhhKU-_TWE-RqFcRsarJ4-F9Zw"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 5 — BARISTA TEAM */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-section-gap px-margin-mobile bg-secondary-fixed/20"
      >
        <div className="max-w-container-max mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-16">
            The People Behind the Pour
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div variants={cardVariant} className="bg-white p-8 rounded-xxl soft-shadow text-center group">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
                <img
                  alt="Head Barista Julian Reed smiling in apron"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg_9_Zg_78uOidZDu3ldUfK9JBiZjhufrsw-zXrkVK0Gk7XoRDjNb-81K6QLGv3cnOd0jBcu-UO_q6JrrJlZWAaEYBUqHA5q_1LWT-lnNP5MC6n8Is_1q_PU91JFTXYd7hqhU4uhKX80Ag29uCAf39_gtqWHGiZJ0_nIMUfuTwZf-tI6JIWQSgSoX9Lfox6jHdUo8ps73o2l8ByqrZ9HE2jhAJVDzQGao-uUOq7hXJGqB17Lbj3PMFUGUzVRkMXw-FZEheox2GEA"
                />
              </div>
              <h4 className="font-headline-md text-headline-md text-primary">Julian Reed</h4>
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mt-2">
                Head Barista
              </p>
            </motion.div>
            <motion.div variants={cardVariant} className="bg-white p-8 rounded-xxl soft-shadow text-center group">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
                <img
                  alt="Pastry Chef Elena Soto in white attire"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOZJAw6LkRZJ3DuM_rofpA7G0DVa3vk05S5AlaiIBnRYMz-0iSd31s7W5Y5L8KN895_JPh76iimySTES71Hj7HaVDqpxVzuDtvgAEC899XaIPFVHB95NSfbq8EvoGXmj2StkVXT5rBaOr9Vof6g_TxyFECTus3iHS6ay8MRZK9iZi0c-p-XNjAQoUatysyjoeJHDtibZVhD3YxwHY4YvcqqOmxriHsODjZOTSl3AyI8pQhnyR2ckboL25Fc5e3o5hvourhfZQmng"
                />
              </div>
              <h4 className="font-headline-md text-headline-md text-primary">Elena Soto</h4>
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mt-2">
                Pastry Chef
              </p>
            </motion.div>
            <motion.div variants={cardVariant} className="bg-white p-8 rounded-xxl soft-shadow text-center group">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
                <img
                  alt="Cafe Manager Marcus Chen in smart-casual attire"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQeYMWaG1KI1N0b6QiN41mHdKgr41ZvlRfVz8LXVOsjXPYwCl6VWQSnd_DAYWnt84iRLizJq30j6iMA2khF00MF_sIiLs5mvNWKnjk_3D3H1LgTU8l5v9iSNkZfwuZlMD5YVR6d1ffd7807aKiDzNe57soDezpDiMPv5sDZAB1vM63iHfeVsXwPDMtNwT2Ssr3VwuHsSVsvVAY3xGMXt2jpwgJj-dP37bquAKzgHrIX-T_Hpj4EVilhdcaFGJ30elOvCnGe0shtQ"
                />
              </div>
              <h4 className="font-headline-md text-headline-md text-primary">Marcus Chen</h4>
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mt-2">
                Cafe Manager
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}