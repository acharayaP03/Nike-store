import React from 'react';

export default function NavLinks({ link }) {
  return (
    <li>
      <a
        href={link.href}
        className="font-montserrat text-slate-gray text-lg leading-normal"
      >
        {link.label}
      </a>
    </li>
  );
}
