import React, { useState, useRef, useEffect, ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

interface NavPopoverProps {
  logoText?: string;
  items?: NavItem[];
  acceptButtonSlot?: ReactNode; // Slot for the accept button
}

const defaultItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Location', href: '#contact' },
  { label: 'Price', href: '#price' },
  { label: 'Career', href: '#career' },
];

export function NavPopover({
  logoText = 'Brand',
  items = defaultItems,
  acceptButtonSlot,
}: NavPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Close popover when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={popoverRef}>
      {/* Popover Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Toggle navigation menu"
        className="md:hidden h-full inline-flex items-center justify-center px-.5 py-3 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      >
        {isOpen ? (
          /* Close (X) Icon */
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          /* Hamburger Menu Icon */
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Popover Card */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 rounded-2xl border dark:border-gray-600 border-gray-300 dark:bg-gray-800 bg-white shadow-xl ring-1 ring-black/5 z-50 animate-in fade-in slide-in-from-top-2 duration-150 overflow-hidden">
          {/* Header Title */}
          {/* <div className="px-4 py-3 border-b border-gray-100 font-semibold text-gray-900 bg-gray-50/50">
            {logoText} Menu
          </div> */}

          {/* Navigation Items List */}
          <div className="p-2 space-y-1">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)} // Close popover on selection
                className="block px-3 py-2 rounded-lg text-sm font-medium dark:text-gray-300 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Slot for Accept / Action Button */}
          {acceptButtonSlot && (
            <div className="p-3 border-t border-gray-100 bg-gray-50/50">
              {acceptButtonSlot}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
