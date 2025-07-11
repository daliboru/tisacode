'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

const Menu: React.FC = () => {
  const [showWorkshopsMenu, setShowWorkshopsMenu] = useState(false)
  const workshopsMenuRef = useRef<HTMLLIElement>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  // Close workshops dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (workshopsMenuRef.current && !workshopsMenuRef.current.contains(event.target as Node)) {
        setShowWorkshopsMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()

    // Close mobile menu after navigation
    setMobileMenuOpen(false)

    // Remove the '#' if it exists in the sectionId
    const cleanSectionId = sectionId.replace('#', '')

    // If we're not on the homepage, navigate to homepage with the hash
    if (window.location.pathname !== '/') {
      router.push(`/?section=${cleanSectionId}`)
      return
    }

    // Handle scrolling on the homepage
    const section = document.getElementById(cleanSectionId)
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })

      // Update URL without causing a page reload
      window.history.pushState({}, '', `#${cleanSectionId}`)

      // Add a highlight animation to the section
      section.classList.add('section-highlight')
      setTimeout(() => {
        section.classList.remove('section-highlight')
      }, 1000)
    }
  }

  return (
    <nav className="relative">
      {/* Hamburger menu button (mobile only) */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
            mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
            mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></span>
      </button>

      {/* Desktop menu */}
      <ul
        className={`
        md:flex md:space-x-4 md:static md:bg-transparent md:shadow-none md:border-none md:p-0 md:w-auto md:opacity-100 md:translate-y-0 md:pointer-events-auto
        absolute right-0 top-10 bg-white shadow-lg rounded-lg border border-gray-200 p-4 w-48 z-20
        transition-all duration-300 ease-in-out
        ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none md:pointer-events-auto'
        }
      `}
      >
        <li className="relative mb-3 md:mb-0" ref={workshopsMenuRef}>
          <button
            className="hover:text-orange-dark transition w-full text-left"
            onClick={() => setShowWorkshopsMenu(!showWorkshopsMenu)}
          >
            Workshops
          </button>
          {showWorkshopsMenu && (
            <ul
              className="md:absolute md:right-0 md:mt-2 md:py-2 md:w-48 md:bg-white md:shadow-lg md:rounded-lg md:z-10 md:border md:border-gray-200
                           mt-2 px-4 border-l border-gray-200"
            >
              <li>
                <Link
                  href="/startup-workshop"
                  className="block px-4 py-2 hover:bg-gray-100 transition"
                >
                  AI-Era Startup Workshop
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="mb-3 md:mb-0">
          <a
            href="#services"
            className="hover:text-orange-dark transition block"
            onClick={e => scrollToSection(e, 'services')}
          >
            Services
          </a>
        </li>
        <li className="mb-3 md:mb-0">
          <a
            href="#contact"
            className="hover:text-orange-dark transition block"
            onClick={e => scrollToSection(e, 'contact')}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
