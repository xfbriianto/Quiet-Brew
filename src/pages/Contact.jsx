// src/pages/Contact.jsx
'use client';

import React from "react";
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
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function Contact() {
  return (
    <main>
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="py-section-gap px-margin-mobile overflow-hidden"
      >
        <div className="max-w-container-max mx-auto text-center">
          <h1 className="font-display-lg text-display-lg md:text-display-lg text-primary mb-6">
            We’d Love To Hear From You
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-16">
            Feel free to visit, message, or follow us on social media. Experience the art of slow
            living in the heart of the city.
          </p>
          <div className="relative w-full h-[500px] rounded-20px overflow-hidden shadow-premium">
            <img
              className="w-full h-full object-cover"
              alt="Serene Japandi cafe interior with large windows, wooden furniture, and soft morning light"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGD0umFhXOkw9boravYZ1C00-9_6qq07tcVrOcLyk08JkwS1FK4V8CYiftDICX-j4GlyYmtvJUnf7yY9eC6BudkpXHbw47SCF4v8SmBT_5CJ_yryWNCifYh9MufEE7-lETK36f0JScpiuzvKUw43ng9J55395dFTsoOmAG1YLMHdMriwuQDEEfIvbtOv65EW6LZbVwROP829Zht8qC0y5ywf9X9lqAY9N43Klek8mZZkR4w5muqwHXL0CVyPs8EZudwv70ZF4J1Q"
            />
          </div>
        </div>
      </motion.section>

      {/* Contact Info Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-section-gap px-margin-mobile bg-surface-container-low"
      >
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
            {/* Address Card */}
            <motion.div
              variants={cardVariant}
              className="bg-white p-stack-md rounded-20px shadow-premium flex flex-col items-center text-center group hover:translate-y-[-4px] transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Visit Us</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Jl. Coffee Street No. 12,<br />Jakarta, Indonesia
              </p>
            </motion.div>
            {/* Phone Card */}
            <motion.div
              variants={cardVariant}
              className="bg-white p-stack-md rounded-20px shadow-premium flex flex-col items-center text-center group hover:translate-y-[-4px] transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">call</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Call Us</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                +62 812 3456 7890<br />Available 08:00 - 20:00
              </p>
            </motion.div>
            {/* Email Card */}
            <motion.div
              variants={cardVariant}
              className="bg-white p-stack-md rounded-20px shadow-premium flex flex-col items-center text-center group hover:translate-y-[-4px] transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">mail</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Email Us</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                hello@bloomcafe.com<br />Support 24/7
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="py-section-gap px-margin-mobile"
      >
        <div className="max-w-container-max mx-auto">
          <div className="w-full h-[450px] rounded-20px overflow-hidden shadow-premium grayscale hover:grayscale-0 transition-all duration-700">
            <img
              className="w-full h-full object-cover"
              alt="Stylized minimalist map of Jakarta with coffee bean icons"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKtthjl5pXt1gEL_ZEQGpfEmzUYmbA4GbyEDuLIJ4wsO_EWuyjhYqVTBtudl7vtIM9YWstF1dJXxiHI4L-e7zAwsyRlBIL8XtlEA2RKXxa8LckVQWi0zlfrLWbHew-P1t8F6TDIlFxzHT8HR4iK2EBkBOkGY8G6lCUdnR0EoErWCnMpx-41PDv7vKaiWULY8-qp06kWt9fSlQKNr35CIR0Yv04PcrE9muI_8mHkQtvGWG_T3tMltvmsVvBw0u1KuMqCVJgk-5YnQ"
            />
          </div>
        </div>
      </motion.section>

      {/* Social Media Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="py-section-gap px-margin-mobile bg-surface-container-high"
      >
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row gap-stack-md items-center">
            <div className="flex-1">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
                Connect with our community
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                Follow our journey on social media for daily brewing tips and a peek into our slow
                living philosophy.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm text-primary hover:bg-secondary-fixed transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-3xl">share</span>
                </a>
                <a
                  href="#"
                  className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm text-primary hover:bg-secondary-fixed transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-3xl">camera_alt</span>
                </a>
                <a
                  href="#"
                  className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm text-primary hover:bg-secondary-fixed transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-3xl">video_library</span>
                </a>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-20px overflow-hidden aspect-square shadow-premium">
                  <img
                    className="w-full h-full object-cover"
                    alt="Latte art close up on wooden table with succulent"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjKsVItsNpflToesAAQXD_sBrY0i9uGO2aVjGfmfrFyP-l0songlLkm93Q6VmIm-PSCOUV5rO8DCn8HaR-Ss8TRCciG7k7mRm9UDIb7K6w8xreSRdMVEwpziGZ-secyUSITsCT6bBN1r2sZwx6sjzX3lg7leNvPQfKS_UwTvX87tPQ-oiDw6-ajWThBU7uP0t_EtdgTTn1BMu3pkaTXD0M6qQ6PY8x2XH2xAFfOh5DdnBw5t0zS2gGlxaAvOAgDBCAThCtF0OWIg"
                  />
                </div>
                <div className="rounded-20px overflow-hidden aspect-[3/4] shadow-premium">
                  <img
                    className="w-full h-full object-cover"
                    alt="Pour-over coffee brewing on minimalist counter"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuASCQE7aiAWGuw7xH2rLjqJginKQZQKpd6s2HnfV8K1ID1hk7qbCFkuHkz1PoX_2as0IbkPDR_8NLEseVLXIszLeqxEGpKgnIQsPp2_6fbWKxtA75O5fWFHnZBdZUO0OO5z_Nm9nM7IFaPKD5mgN2w8D8SIjV3zG1JiWQVFwdV00pqZmfD-aD0WtqwxBzAQdcF-RyNCgXnKV6CvqaUxIdGISba-iaJThMhmNzjVZTTgASabeozUcenpqvGNGFnFvooFoVgEheWUMw"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-20px overflow-hidden aspect-[3/4] shadow-premium">
                  <img
                    className="w-full h-full object-cover"
                    alt="Flat lay of journal, espresso, and dried flowers on wooden table"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqYw4ow69zfC_NXPUlalApzbp0a2F9-SrbzdeCQiwmIBSYUVRfKzsyo3AHQyjwN0Jix1X6k5RoqL9DD_3c79tDa5UD2dGB4Cyn6L-FtglWW8iEduWHoILA0IOgRejy0Ke8mEdfJe9hPPbbZA7c426aVOWFKYKTHn0r7x8ysGb53ZvHh3jjM7bx_8VY6hBXmkFIJmdV5FtFZxl7csvXUgoibwCBDfBXlMkrjdEuHjW-qZBaCHDNwaWCdjYz8iP5a-51wdLcZXn11g"
                  />
                </div>
                <div className="rounded-20px overflow-hidden aspect-square shadow-premium">
                  <img
                    className="w-full h-full object-cover"
                    alt="Matcha latte on stone coaster with blurred cafe background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKlrKKLKUdZMSkopqArsGr4hzNgT9M0ncyw-gK29peH4_kv8SHLV3OXxd0ESZ8SLCNgTBivpJWAM7Lhz6Yl3EcceAbyFRMHS1QZsYy2mrVBtCBom0Xm2fF92Ss-mvEq2xEejU3FTagPHulZqqvrdrGrKPlCbuYfkpNRBDtnaMxZfOEU-0_HPw4l14oKSJo_nRTdADiqQjYaIQesYlyO7uqdx4cPpxR80sQeH_Bb0pV8QpYfnnsnOuRsAPa4Q6TRVC_SD7-eHutWQ"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}