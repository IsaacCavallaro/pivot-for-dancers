import React, { useState, useEffect } from 'react';

interface NavbarProps {
  // Define any props if needed
}

const Navbar: React.FC<NavbarProps> = () => {
  const [activeSection, setActiveSection] = useState('');
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavLinkClick = (id: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToSection(id);
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['home', 'about', 'products'];
      let threshold = 0.8;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const section = document.getElementById(id);

        if (section) {
          const rect = section.getBoundingClientRect();
          const isMidpointVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
          const isInThreshold = rect.top <= window.innerHeight * threshold && rect.bottom >= window.innerHeight * threshold;

          if (isMidpointVisible || isInThreshold) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const joinUsClassName = 'text-sm px-4 py-2 rounded-full bg-purple-gray text-white opacity-80 hover:opacity-100 hover:bg-purple-gray';

  return (
    <section className="bg-dark-gray max-device-width">
      <div className="max-w-6xl px-4 mx-auto">
        <nav className="fixed top-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 py-4 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <a href="/" className="block pl-4 md:pl-6">
              <img src="/assets/logo.png" alt="Logo" className="h-8" />
            </a>

            {/* Desktop Navigation Links */}
            <ul className="hidden lg:flex lg:space-x-8 lg:items-center">
              {['home', 'products', 'about'].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className={`text-sm ${activeSection === section ? 'tan-300' : 'text-gray-200 dark:text-gray-300'
                      } hover:text-light-gray`}
                    onClick={(e) => handleNavLinkClick(section, e)}
                  >
                    {section.toUpperCase()}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#home"
                  className={joinUsClassName}
                  onClick={(e) => handleNavLinkClick('home', e)}
                >
                  JOIN US
                </a>
              </li>
            </ul>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center justify-end w-full pr-4 md:pr-6">
              <button
                className="text-gray-200 dark:text-gray-300 focus:outline-none"
                onClick={handleToggle}
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Sidebar Menu */}
          <div
            className={`lg:hidden fixed inset-0 z-40 bg-gray-900 bg-opacity-90 transition-transform duration-300 ease-in-out ${open ? 'transform translate-x-0' : 'transform translate-x-full'
              }`}
          >
            <div className="flex flex-col justify-center items-center h-full">
              <ul className="space-y-6 text-center">
                {['home', 'products', 'about'].map((section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      className={`text-2xl ${activeSection === section ? 'tan-300' : 'text-gray-200 dark:text-gray-300'
                        } hover:text-light-gray`}
                      onClick={(e) => handleNavLinkClick(section, e)}
                    >
                      {section.toUpperCase()}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#home"
                    className={joinUsClassName}
                    onClick={(e) => handleNavLinkClick('home', e)}
                  >
                    JOIN US
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
