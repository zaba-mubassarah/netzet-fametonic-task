import React from 'react';

export default function Header() {
  return (
    <>
      {/* Top Announcement Bar */}
      <div className="w-full h-[76px] md:h-[46px] bg-gradient-to-r from-[#FC004E] to-[#10CBE0] px-4 py-2 flex items-center justify-center text-center">
        <p
          className="
            text-[16px] md:text-[22px]
            font-extrabold
            leading-[100%]
            tracking-normal
            align-middle
            font-figtree
            text-white
          "
        >
          🚀 <span className="text-[#00E7F9] text-black px-1">FRESH BEGINNINGS SALE:</span> Extra 25% OFF
          <br className="block md:hidden" />
          &nbsp;Limited Spots – start your journey today!
        </p>
      </div>
    </>
  );
}
