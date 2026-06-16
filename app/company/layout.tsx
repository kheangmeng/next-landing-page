'use client'

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from "next-themes";

const links = [
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
  { name: 'Price', href: '#price' },
  { name: 'Career', href: '#career'},
]

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { setTheme } = useTheme()
  const [hash, setHash] = useState(window?.location?.hash || '#home');
  const initTheme = localStorage.getItem('theme') || 'system'

  const activeClass = (currHash: string) => {
    if (hash === currHash) {
      return 'text-primary border-b-2 border-primary pb-1 text-label-md font-label-md'
    }

    return 'text-on-surface-variant hover:text-primary transition-colors text-label-md font-label-md'
  }

  const handleSetTheme = (theme: string) => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-lg py-[18px] bg-surface/90 backdrop-blur-md border-b border-outline-variant shadow-sm transition-all duration-300"
        id="top-nav"
      >
        <Link
          href="#home" className="text-headline-sm font-headline-sm font-bold text-primary tracking-tight"
          onClick={() => setHash('#home')}
        >
          SpaceTech
        </Link>
        <nav className="hidden md:flex items-center gap-lg">
          {
            links.map((link, index) => (
              <Link
                key={index}
                className={activeClass(link.href)}
                href={link.href}
                onClick={() => setHash(link.href)}
              >
                {link.name}
              </Link>
            )
          )}
        </nav>
        <div className="flex items-center gap-md">
          <select value={initTheme} onChange={(e) => handleSetTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
          <button className="bg-primary text-on-primary dark:text-white px-lg py-sm rounded-full text-label-md font-label-md hover:opacity-80 transition-opacity active:scale-95 transition-transform duration-150">
            Get Started
          </button>
          <button className="md:hidden flex items-center p-xs text-on-surface">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      <main className="pt-xl overflow-x-hidden">{children}</main>

      <footer className="w-full px-lg py-xl flex flex-col md:flex-row justify-between items-start gap-lg bg-surface-container-lowest border-t border-outline-variant">
        <div className="flex flex-col gap-md">
          <div className="text-headline-sm font-headline-sm font-bold text-primary">
            SpaceTech
          </div>
          <p className="text-body-md text-on-surface-variant">
            Defining the boundaries of precision engineering for a sustainable and innovative global
            future.
          </p>
          <div className="text-label-sm font-label-sm text-on-surface-variant">
            © {new Date().getFullYear()} SpaceTech Inc. All rights reserved.
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-xl">
          <div className="flex flex-col gap-sm">
            <span className="text-label-sm font-label-sm text-on-background uppercase tracking-wider">
              Company
            </span>
            <a
              className="text-on-surface-variant hover:text-primary hover:underline transition-all text-body-md"
              href="#about"
            >
              About
            </a>
            <a
              className="text-on-surface-variant hover:text-primary hover:underline transition-all text-body-md"
              href="#contact"
            >
              Contact
            </a>
            <a
              className="text-on-surface-variant hover:text-primary hover:underline transition-all text-body-md"
              href="#career"
            >
              Career
            </a>
          </div>
          <div className="flex flex-col gap-sm">
            <span className="text-label-sm font-label-sm text-on-background uppercase tracking-wider">
              Legal
            </span>
            <a
              className="text-on-surface-variant hover:text-primary hover:underline transition-all text-body-md"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-on-surface-variant hover:text-primary hover:underline transition-all text-body-md"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-on-surface-variant hover:text-primary hover:underline transition-all text-body-md"
              href="#"
            >
              Cookie Settings
            </a>
          </div>
          <div className="flex flex-col gap-sm">
            <span className="text-label-sm font-label-sm text-on-background uppercase tracking-wider">
              Social
            </span>
            <div className="flex gap-md">
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined">public</span>
              </a>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined">share</span>
              </a>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined">mail</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
