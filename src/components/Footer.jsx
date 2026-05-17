import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-secondary-fixed dark:bg-surface-container-highest">
      {/* Thin top border for separation */}
      <div className="border-t border-outline-variant/30" />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Column 1: Brand */}
          <div className="flex flex-col gap-3">
            <span className="font-headline-md text-headline-md text-primary tracking-tight">
              Quiet Brew
            </span>
            <p className="font-body-md text-[13px] text-on-secondary-fixed-variant/70 leading-relaxed">
              © 2024 Quiet Brew.<br />Slow living in every sip.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-on-secondary-fixed/50">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-[10px]">
              {[
                { label: "Home", active: false },
                { label: "Menu", active: false },
                { label: "About", active: false },
                { label: "Contact", active: true },
              ].map(({ label, active }) => (
                <a
                  key={label}
                  href="#"
                  className={
                    active
                      ? "text-[14px] text-primary font-semibold tracking-wide w-fit border-b border-primary/40 pb-px"
                      : "text-[14px] text-on-secondary-fixed-variant/80 hover:text-primary transition-all duration-200 hover:translate-x-1 w-fit"
                  }
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Support */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-on-secondary-fixed/50">
              Support
            </h4>
            <nav className="flex flex-col gap-[10px]">
              {["Privacy Policy", "Terms", "FAQ"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[14px] text-on-secondary-fixed-variant/80 hover:text-primary transition-all duration-200 hover:translate-x-1 w-fit"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-on-secondary-fixed/50">
              Newsletter
            </h4>
            <p className="text-[13px] text-on-secondary-fixed-variant/70 leading-relaxed">
              Join our community for brew guides and event updates.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="
                  flex-1 min-w-0
                  bg-surface-container-lowest/60
                  border border-outline-variant/50
                  rounded-lg px-3 py-[9px]
                  text-[13px] text-on-surface
                  placeholder:text-on-surface-variant/40
                  focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20
                  transition-all duration-200
                "
              />
              <button
                onClick={() => setEmail("")}
                className="
                  bg-primary text-on-primary
                  text-[12px] font-semibold tracking-wide
                  px-4 py-[9px] rounded-lg
                  hover:opacity-85 active:scale-95
                  transition-all duration-150
                  whitespace-nowrap shrink-0
                "
              >
                Send
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;