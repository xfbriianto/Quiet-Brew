'use client';

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

const formItemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

export default function Reservation() {
  return (
    <main>
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
        className="bg-surface py-section-gap px-margin-mobile md:px-gutter"
      >
        <div className="max-w-container-max mx-auto text-center">
          <h1 className="font-display-lg text-display-lg text-on-surface mb-stack-sm">
            Reserve Your Favorite Spot
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Book your table easily and enjoy a cozy coffee experience in our
            sun-drenched cafe corners.
          </p>
        </div>
      </motion.section>

      {/* Reservation Content */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
        className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pb-section-gap"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-md items-start">
          {/* Left Column: Form */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-surface-container-lowest p-stack-md rounded-custom shadow-japandi"
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={formItemVariant} className="flex flex-col space-y-2">
                  <label className="font-label-md text-label-md text-on-surface-variant">Full Name</label>
                  <input
                    className="bg-surface-container-low border border-outline-variant rounded-lg p-4 focus:ring-primary focus:border-primary placeholder-on-surface-variant/50 outline-none"
                    placeholder="Jane Doe"
                    type="text"
                  />
                </motion.div>
                <motion.div variants={formItemVariant} className="flex flex-col space-y-2">
                  <label className="font-label-md text-label-md text-on-surface-variant">Email</label>
                  <input
                    className="bg-surface-container-low border border-outline-variant rounded-lg p-4 focus:ring-primary focus:border-primary placeholder-on-surface-variant/50 outline-none"
                    placeholder="jane@example.com"
                    type="email"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={formItemVariant} className="flex flex-col space-y-2">
                  <label className="font-label-md text-label-md text-on-surface-variant">Phone Number</label>
                  <input
                    className="bg-surface-container-low border border-outline-variant rounded-lg p-4 focus:ring-primary focus:border-primary placeholder-on-surface-variant/50 outline-none"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                  />
                </motion.div>
                <motion.div variants={formItemVariant} className="flex flex-col space-y-2">
                  <label className="font-label-md text-label-md text-on-surface-variant">Date</label>
                  <input
                    className="bg-surface-container-low border border-outline-variant rounded-lg p-4 focus:ring-primary focus:border-primary outline-none"
                    type="date"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={formItemVariant} className="flex flex-col space-y-2">
                  <label className="font-label-md text-label-md text-on-surface-variant">Time</label>
                  <select className="bg-surface-container-low border border-outline-variant rounded-lg p-4 focus:ring-primary focus:border-primary outline-none">
                    <option>09:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>01:00 PM</option>
                    <option>02:00 PM</option>
                  </select>
                </motion.div>
                <motion.div variants={formItemVariant} className="flex flex-col space-y-2">
                  <label className="font-label-md text-label-md text-on-surface-variant">Guests</label>
                  <select className="bg-surface-container-low border border-outline-variant rounded-lg p-4 focus:ring-primary focus:border-primary outline-none">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4 People</option>
                    <option>5+ People</option>
                  </select>
                </motion.div>
              </div>

              <motion.div variants={formItemVariant} className="flex flex-col space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant">Special Notes</label>
                <textarea
                  className="bg-surface-container-low border border-outline-variant rounded-lg p-4 focus:ring-primary focus:border-primary placeholder-on-surface-variant/50 outline-none resize-none"
                  placeholder="Any specific table preference or dietary requirements?"
                  rows="4"
                />
              </motion.div>

              <motion.button
                variants={formItemVariant}
                className="w-full bg-primary-container text-on-primary-container py-4 rounded-lg font-headline-md text-headline-md hover:shadow-japandi hover:-translate-y-1 transition-all duration-300"
                onClick={() => alert("Reservation submitted!")}
              >
                Reserve Now
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative h-full min-h-[500px] lg:min-h-full"
          >
            <img
              alt="Cafe atmosphere"
              className="absolute inset-0 w-full h-full object-cover rounded-custom shadow-japandi"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3T3WHE2K1vqFf1t704L8MNZZJTZmaYSQ-GxusUFP8wTv3-rYgWoCJaT2cMdTQXGqCGx417nz5BZz9fdpOemdtXh9J6hrN3RPy61au9FihiHAX7WWszTF2ZjpHskVIjgXdAxw5QmAsluRhK423gdSgjVVPXFOIqv9YYy6abkACJEwzN1teomVyesqo1QmiEYqQBxlOQEUI9q1yN2T6CVHVxbnDglb5AEWSc986MS2EWcceFWAH64c46tP9JndyCZclZaIIUqMnRA"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Opening Hours Section */}
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={fadeUp}
  className="bg-secondary-fixed py-section-gap px-margin-mobile md:px-gutter"
>
  <div className="max-w-container-max mx-auto">
    <div className="bg-surface-container-lowest rounded-custom shadow-japandi p-stack-md md:p-12 text-center max-w-2xl mx-auto transition-all duration-300 hover:shadow-xl">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container mb-6">
        <span className="material-symbols-outlined text-3xl">schedule</span>
      </div>
      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">
        Opening Hours
      </h2>
      <div className="space-y-6">
        {/* Weekdays */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 border-b border-outline-variant pb-6">
          <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
            Monday - Friday
          </span>
          <span className="font-headline-md text-headline-md text-primary">
            08:00 AM - 10:00 PM
          </span>
        </div>
        {/* Weekends */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 pt-2">
          <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
            Saturday - Sunday
          </span>
          <span className="font-headline-md text-headline-md text-primary">
            09:00 AM - 11:00 PM
          </span>
        </div>
      </div>
    </div>
  </div>
</motion.section>
    </main>
  );
}