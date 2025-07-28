import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 px-8 md:px-16 lg:px-24 bg-gray-100 text-center text-gray-600 text-sm">
      © {new Date().getFullYear()} Fametonic. All rights reserved.
    </footer>
  );
}