import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling) {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 300;

        sections.forEach((section) => {
          const typedSection = section as HTMLElement;
          const sectionTop = typedSection.offsetTop;
          const sectionBottom = sectionTop + typedSection.clientHeight;

          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            setActiveSection(typedSection.getAttribute('id'));
          }
        });
      }
    };

    const debounce = function (func: Function, delay: number) {
      let timeoutId: NodeJS.Timeout;
      return function (this: any) {
        const context = this;
        const args = arguments;
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
          func.apply(context, args);
        }, delay);
      };
    };

    const debouncedHandleScroll = debounce(handleScroll, 50);

    window.addEventListener('scroll', debouncedHandleScroll);

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, [isScrolling]);

  const handleNavLinkClick = (sectionId: string) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      setIsScrolling(true);
      const offset = targetSection.offsetTop - 80; // Adjust as needed
      window.scrollTo({ top: offset, behavior: 'smooth' });

      // Disable scrolling temporarily during smooth scrolling
      setTimeout(() => {
        setIsScrolling(false);
      }, 800);

      setActiveSection(sectionId);
    }
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/assets/logo.png" className="h-8" alt="Your Logo" />
        </a>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul
            className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <button
                onClick={() => handleNavLinkClick('home')}
                className={`py-2 px-3 md:p-0 ${
                  activeSection === 'home'
                    ? 'text-white bg-gray-900 rounded md:bg-transparent md:text-gray-900 md:dark:text-gray-900'
                    : 'text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:dark:hover:text-gray-900 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                }`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavLinkClick('about')}
                className={`py-2 px-3 md:p-0 ${
                  activeSection === 'about'
                    ? 'text-white bg-gray-900 rounded md:bg-transparent md:text-gray-900 md:dark:text-gray-900'
                    : 'text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:dark:hover:text-gray-900 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                }`}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavLinkClick('products')}
                className={`py-2 px-3 md:p-0 ${
                  activeSection === 'products'
                    ? 'text-white bg-gray-900 rounded md:bg-transparent md:text-gray-900 md:dark:text-gray-900'
                    : 'text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:dark:hover:text-gray-900 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                }`}
              >
                Products
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavLinkClick('contact')}
                className={`py-2 px-3 md:p-0 ${
                  activeSection === 'contact'
                    ? 'text-white bg-gray-900 rounded md:bg-transparent md:text-gray-900 md:dark:text-gray-900'
                    : 'text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:dark:hover:text-gray-900 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                }`}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
