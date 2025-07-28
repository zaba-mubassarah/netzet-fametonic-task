import React from 'react';

export default function Header() {
  return (
    <>
      {/* Top Announcement Bar */}
      <div className="w-full h-auto bg-gradient-to-r from-[#FC004E] to-[#10CBE0] text-white text-center text-[18px] md:text-[22px] py-2 font-medium px-4">
        🚀 FRESH BEGINNINGS SALE: Extra 25% OFF
        <br className="block md:hidden" />
        &nbsp;Limited Spots – start your journey today!
      </div>
    </>
  );
}