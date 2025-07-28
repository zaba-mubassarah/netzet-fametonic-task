import React from 'react';
import Logo from './logo';
import NavLogo from './navLogo';
import Vector from './vector';

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white overflow-hidden">
      {/* Mobile Top Bar */}
      <div className="relative flex justify-center items-center px-6 py-4 md:hidden">
        {/* Centered Logo */}
        <Logo />

        {/* Right-aligned hamburger icon */}
        <button className="absolute right-6 text-white">
          <NavLogo />
        </button>
      </div>

      {/* Hero content */}
      <div className="ml-0 lg:ml-20">
        <div className="mb-[50px] px-8 md:px-16 lg:px-24 flex flex-col-reverse lg:flex-row items-top max-w-[1440px] mx-auto py-3">
          {/* Left text section */}
          <div className="lg:w-1/2 space-y-6 relative z-10 mt-10">
            {/* Desktop Logo */}
            <div className="hidden md:flex items-center">
              <Logo />
            </div>

            <h1 className="text-[25px] md:text-[35px] lg:text-[35px] font-heading font-bold leading-tight text-center md:text-left">
              <span className="inline-block">
                Want to Turn Social Media Into a <br className="block" />
                Profitable Career?
              </span>
            </h1>
            <h1
              className="text-[25px] md:text-[35px] lg:text-[35px] font-heading font-bold leading-tight text-center md:text-left"
              style={{
                color: '#00E7F9',
                textShadow: '0 2px 4px #FC004E'
              }}
            >
              <span className="inline-block">
                Discover your way to success <br className="block" />
                with Fametonic:
              </span>
            </h1>
            <ul className="space-y-2 text-base md:text-[16px] font-normal">
              <li>✨ Start growing your influence right away—no waiting required!</li>
              <li>✨ Create viral TikToks and Reels step by step with easy-to-follow lessons</li>
              <li>✨ Use a Personal AI Worker to boost your content</li>
              <li>✨ Learn from expert-led courses designed for aspiring influencers</li>
            </ul>

            <div className="mt-4 w-full flex flex-col items-center md:items-start">
              {/* Disclaimers (shown above button on mobile, below on desktop) */}
              <div className="order-1 md:order-2 text-center md:text-left">
                <h6 className="font-figtree font-medium text-[#ABABAB] text-[12px] leading-[100%] align-middle mt-2 mb-4 lg:mt-8">
                  By clicking "Get Started", you agree with Terms and
                  <br className="block md:hidden" />
                  Conditions, Privacy Policy, Subscription Terms
                </h6>
                <h6 className="font-figtree font-medium text-[#ABABAB] text-[12px] leading-[100%] align-middle mb-4 mt-4 mb-10">
                  Fametonic 2025 © All Rights Reserved.
                </h6>
              </div>

              {/* Button and quiz info */}
              <div className="order-2 md:order-1 flex flex-col items-center">
                <button
                  className="w-[313px] h-[40px] rounded-[10px] bg-[#FC004E] text-white text-[20px] font-bold leading-[100%] tracking-normal align-middle font-urbanist shadow-[0_0_8px_#00E7F9] flex items-center justify-center"
                >
                  Get Started <span className='ml-3'><Vector></Vector></span>
                </button>

                <h6 className="text-[12px] text-white text-center md:text-left leading-none lg:ml-10 mt-2">
                  1-minute quiz for personalized Insights
                </h6>
              </div>
            </div>
          </div>

          {/* Right image section */}
          <div className="mt-10 lg:w-1/2 lg:mb-0 flex flex-col items-center relative lg:-ml-[80px] space-y-4">
            {/* Desktop Nav Links */}
            <div className="space-x-6 hidden md:flex pr-4">
              <a
                href="#about"
                className="text-[#A9A9A9] hover:text-primary transition font-figtree font-semibold text-[18px] leading-[100%] tracking-normal text-center align-middle"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="text-[#A9A9A9] hover:text-primary transition font-figtree font-semibold text-[18px] leading-[100%] tracking-normal text-center align-middle"
              >
                Contact
              </a>
            </div>

            {/* Image */}
            <img
              src="/images/hero-graphic.png"
              alt="Hero graphic"
              className="w-full max-w-md lg:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
