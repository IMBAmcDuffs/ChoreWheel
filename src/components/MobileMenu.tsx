'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuId?: string;
  buttonId?: string;
  items: {
    label: string;
    href: string;
    icon: string;
  }[];
}

export default function MobileMenu({
  isOpen,
  onClose,
  menuId = 'mobile-menu',
  buttonId = 'mobile-menu-button',
  items,
}: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [pathname, isOpen, onClose]);

  // Handle outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // Trap focus within menu when open
  useEffect(() => {
    if (!isOpen || !menuRef.current) return;

    const focusableElements = menuRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    menuRef.current.addEventListener('keydown', handleKeyDown);
    firstElement?.focus();

    return () => {
      menuRef.current?.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <>
      {/* Menu Toggle Button */}
      <button
        ref={buttonRef}
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        onClick={() => {
          if (!isOpen) {
            // Focus the first item when opening
            setTimeout(() => {
              menuRef.current?.querySelector('a, button')?.focus();
            }, 0);
          }
          onClose();
        }}
        className="relative inline-flex items-center justify-center min-w-[44px] min-h-[44px] p-3 rounded-lg text-slate-500 hover:bg-slate-200/50 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-slate-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-95"
      >
        <span
          className={`material-symbols-outlined transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          menu
        </span>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Menu */}
      <nav
        ref={menuRef}
        id={menuId}
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 right-0 z-50 h-full w-[280px] max-w-[80vw] bg-surface shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-surface-variant">
            <h2 className="text-xl font-bold text-on-surface">Menu</h2>
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] p-2 rounded-lg text-slate-500 hover:bg-slate-200/50 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-slate-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-95"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Menu Items */}
          <ul className="flex-1 overflow-y-auto p-4 space-y-2">
            {items.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={handleLinkClick}
                  className="flex items-center gap-4 min-h-[44px] px-4 py-3 rounded-lg text-on-surface hover:bg-surface-container-low active:bg-surface-container-higher transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  tabIndex={isOpen ? 0 : -1}
                >
                  <span className="material-symbols-outlined text-on-surface-variant">
                    {item.icon}
                  </span>
                  <span className="text-base font-medium flex-1 text-left">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Footer */}
          <div className="p-4 border-t border-surface-variant">
            <div className="bg-surface-container-low rounded-lg p-4">
              <p className="text-sm text-on-surface-variant">ChoreWheel v1.0.0</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
