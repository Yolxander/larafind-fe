"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ModeToggle } from '@/components/mode-toggle'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary cyberpunk">
              <span className="glitch neon-text z-12" data-text="LaraFind">LaraFind</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/" active={pathname === '/'}>Home</NavLink>
              <NavLink href="/discover" active={pathname.startsWith('/discover')}>Discover</NavLink>
              <NavLink href="/recommendations" active={pathname === '/recommendations'}>Recommendations</NavLink>
              <NavLink href="/about" active={pathname === '/about'}>About</NavLink>
              <NavLink href="/contact" active={pathname === '/contact'}>Contact</NavLink>
            </div>
          </div>
          <div className="flex items-center">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

const NavLink = ({ href, children, active }: { href: string; children: React.ReactNode; active: boolean }) => (
  <Link
    href={href}
    className={`px-3 py-2 rounded-md text-sm font-medium ${
      active
        ? 'bg-primary text-primary-foreground'
        : 'text-foreground hover:bg-primary/20 hover:text-primary-foreground'
    } transition-colors duration-200`}
  >
    {children}
  </Link>
)

export default Navbar

