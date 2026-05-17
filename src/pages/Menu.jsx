'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

// Menu data
const menuItems = [
  {
    id: 1,
    name: 'Caramel Latte',
    category: 'Coffee',
    price: '$5.50',
    description: 'Smooth espresso with steamed milk and a rich buttery caramel drizzle.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbq2cBjeakr0PmXffYJ9ccwEz4foRcjWwE2u8Y88ULqvMR4eZosh20h39wyjaBCGzqry7UIiwyIAGNPiRxJEVld5xpjb7qSFobobOXtC0q1iHUMGYIvugTuXzNNSMxF4RT27FDge_fbqFc0s-0hkE-WonXA8EKKnqOjM8eMqruzrlRD19GwunvME90ddHyVfSVzwLrVu409zyxQ9dPnYQ61ku-Bu65tsRveBsFxGrH5NZeQBYPF7iZ8UX1PvAxReqeIRv1aPF4qw',
    alt: 'Caramel latte in a clear glass with golden caramel drizzle, set in a minimalist Japanese cafe with soft sunlight',
    tag: 'Coffee'
  },
  {
    id: 2,
    name: 'Cappuccino',
    category: 'Coffee',
    price: '$4.80',
    description: 'Classic Italian style with equal parts espresso, steamed milk, and thick foam.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDviZB8m4JzQojcEc2Mxt1ho4jKH0iZrFBbAU9hawbbHlBXfI5kSQZcZx2Vl8E1H7EeG5nKuUXW9POuNsAbdnujk2oU3InRlcswSV4sRhQ2L5Dgey0RwMo7Iqz9fjKOEUoq1flXoEgcql5uQmOpQti36Sr7lxnPFO0U4GXH8TDEnJkLxXV49wvryjYu6qQm_jaAk_swIskxkhrddTP32UkiUPPPmsEvqBy3jjBGoJ1gGwLSsRuT1cREqYApfZ3xsOCqpU9bIBVdXw',
    alt: 'Classic cappuccino in white ceramic cup on wooden saucer, with heart-shaped cocoa dusting in a bright Scandinavian cafe',
    tag: 'Coffee'
  },
  {
    id: 3,
    name: 'Espresso',
    category: 'Coffee',
    price: '$3.50',
    description: 'Concentrated bold espresso shot made from our signature roasted beans.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6oe9nRj8NHQReqW26RI-Ci4MJZEaIDKm5d524ure9xu7ZJMpqBDWGHRrBA2Y02XBZb2gYwLUeFO3j3I62SZl7SvwJ9ofG4ftWobjx0HI5D9bO10vLr_rGEBEzhVPX6V4J-SvYOtiYtuGzfIlu7VaRzWAVTvV10UqrT9lMdoqWXHiMVzqtQT8_4XkMpwRnBHTNpmYnszza8SEhxwcMqxGNg-i5jtZWZMn3s4OBYNd_5ST7gcf3u8cHQiOZO1qyTAe3deGk8dB6_w',
    alt: 'Double espresso shot in a glass cup with golden crema, on a dark stone coaster, modern minimalist setting',
    tag: 'Coffee'
  },
  {
    id: 4,
    name: 'Matcha Latte',
    category: 'Non Coffee',
    price: '$5.80',
    description: 'Ceremonial grade Uji matcha whisked with your choice of velvety milk.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASzvLBx8I40sjhj9GfV1i78zygf_EoIfnNQEZb6Qcrduq3Uhqd0dmO7l6jAILMxX-UTBtiD57BhpMJudPrjnn0_YQp3EhKdP7WwXk05p8hVAH5xYuGqO_ZLnnWjon2_EolkVU0hbD4-ON8JwHAIVlL_Oo77n-fmwx1wc3rC9RSo4F3xeRiU852s25eprkXSkDjodVYpk5nYuYcPwpaV93AQflLKf-QM5O3M4rpyajtCEg3wKrVUf18YV3JNcikn6NVWoy2avWWbw',
    alt: 'Iced matcha latte in tall glass with green swirls, placed near a small plant in a bright minimalist setting',
    tag: 'Non Coffee'
  },
  {
    id: 5,
    name: 'Butter Croissant',
    category: 'Pastry',
    price: '$3.90',
    description: 'Traditional French croissant with 24 layers of rich, flaky butter dough.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApk_iYKiFfXlKOydh9cWJs_bw9dbJCuyI5erDc5p_qmk2AljKGGzSSniQQoFISQQ5QT_UG_23pcqeaewxmE33bFQeSO0D5HPFvXeAgOiec-CXqiec0bvGSegirAMIBoIp3ZL4gxRe7VRCRJNCDM0n2G0SJQ6I0hqbCG1GTO7qPdrGZf1btjJVFgIMTGgUluv8_mAsg4tImbKCH9DmXkp2xipZr1zYyroxTvg_4GCsAa_5cvlebe_F1Fatqv2Hfy14ZEUcO4VaJIg',
    alt: 'Golden-brown flaky butter croissant on a ceramic plate in a sunlit Scandinavian cafe corner',
    tag: 'Pastry'
  },
  {
    id: 6,
    name: 'Tiramisu',
    category: 'Dessert',
    price: '$6.50',
    description: 'Classic Italian dessert with espresso-soaked layers and mascarpone cream.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYB4obQ3mZYeMRytpadZFSBJub-_mH0ztZT6qH69g6n9-IdakGzdvKpz89wuhp9Czp27rFcIldHlCRY0xr0oimHbRrC3M0y7Re6O_OW7fqdzHWlHP5XxbIA2nLOCH2y926ujgFDC7CUG3L_51Z4-3eWqE2tY2IpXEhWdFaTLLWE5-wG-iqk8WjDYwkhJK90uQAx5DpKisbP3u9Z-c8SdBzPSEasU08rZyI1vnEjF0lia_LX9RKVyND8TUCZ7rVsaJUQhQQtiQrEA',
    alt: 'Elegant slice of tiramisu with cocoa powder on a white plate, minimalist cafe background',
    tag: 'Dessert'
  }
];

const categories = ['All', 'Coffee', 'Non Coffee', 'Pastry', 'Dessert'];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return menuItems;
    return menuItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <main>
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
        className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-gap text-center"
      >
        <h1 className="font-headline-lg text-headline-lg md:font-display-lg md:text-display-lg text-primary mb-stack-sm">
          Crafted Coffee &amp; Fresh Pastries
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Explore our carefully curated menu made with premium ingredients,
          designed for a slow living experience.
        </p>
      </motion.section>

      {/* Filter Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
        className="max-w-container-max mx-auto px-margin-mobile md:px-gutter mb-stack-md overflow-x-auto"
      >
        <div className="flex items-center justify-center gap-stack-sm min-w-max pb-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full font-label-md text-label-md transition-all ${
                activeCategory === category
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-low text-on-surface-variant hover:bg-secondary-container'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.section>

      {/* Menu Grid */}
      <motion.section
        key={activeCategory}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-stack-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {filteredItems.map(item => (
            <motion.article
              key={item.id}
              variants={cardVariant}
              className="bg-surface-container-lowest rounded-[20px] shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              <img
                alt={item.alt}
                className="w-full h-64 object-cover"
                src={item.image}
              />
              <div className="p-stack-md">
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-md text-[12px] uppercase mb-stack-sm inline-block">
                  {item.tag}
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">
                  {item.name}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                  {item.description}
                </p>
                <span className="font-headline-md text-headline-md text-primary">
                  {item.price}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Promo Banner */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
        className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-gap"
      >
        <div className="bg-secondary-fixed rounded-[32px] p-stack-md md:p-16 flex flex-col md:flex-row items-center justify-between gap-stack-md overflow-hidden relative">
          <div className="relative z-10 text-center md:text-left">
            <span className="font-label-md text-label-md text-on-secondary-fixed-variant uppercase tracking-widest mb-4 inline-block">
              Special Offer
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-secondary-fixed mb-4">
              Buy 2 Coffee Get 1 Pastry Free
            </h2>
            <p className="font-body-lg text-body-lg text-on-secondary-fixed-variant mb-8">
              Enjoy your favorite brew with our signature treats. Valid every
              weekday.
            </p>
            <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-md text-label-md hover:opacity-90 transition-opacity">
              Claim Offer
            </button>
          </div>
          <div className="hidden lg:block w-1/3">
            <img
              alt="Two lattes and a croissant on a white table, warm lighting, top-down view"
              className="rounded-2xl shadow-md transform rotate-3"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuANLk3tqgxi_2eLdXIqdTo3m4ptYRmaXz-KDAZSO-yN6xicl01Plgdi6gP470yeGKEzq2gfj9W1ysE2waKYq9Z7bdFUuSadXyI6K6rZQCOAVHYwIicC-Tsb2pfTGeVfZmMCLtCx6yCIerSCJMb-Wm36JpKFIKv2adhnqTTpr1R0PkkC14apNAbFOoVLwKE5Qk8W249Vl3V0WcRbe-Pg3PAePCEgxg3PZIUkoVqQyRgArjNLUoMOQf0t9hVKlyu8pP45DTesLUgGxg"
            />
          </div>
        </div>
      </motion.section>
    </main>
  );
}