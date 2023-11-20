import React, { useState, useEffect } from 'react';

interface NavbarProps {
  // Define any props if needed
}

const Navbar: React.FC<NavbarProps> = () => {
  const [activeSection, setActiveSection] = useState('');
  const [open, setOpen] = useState(false); // State to manage the mobile sidebar

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
    setOpen(false); // Close the mobile sidebar after clicking a link
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['home', 'about', 'products', 'contact'];

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

          if (isVisible) {
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

  return (
    <section className="bg-green-800 dark:bg-gray-900 font-poppins">
      <div className="max-w-6xl px-4 mx-auto">
        <nav className="fixed top-0 left-0 right-0 bg-green-800 dark:bg-gray-900 py-4 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <a href="/" className="lg:hidden text-xl font-medium leading-none text-gray-200 dark:text-gray-300">Logo</a>
            <div className="lg:hidden">
              <button
                className="text-gray-200 dark:text-gray-300 focus:outline-none"
                onClick={handleToggle}
              >
                {/* Hamburger menu icon */}
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
            <ul className={`lg:w-auto lg:space-x-12 lg:items-center lg:flex ${open ? 'hidden' : 'block'}`}>
              <li><a href="#home" className={`text-sm text-gray-200 dark:text-gray-300 hover:text-blue-200 dark:hover:text-blue-300 ${activeSection === 'home' ? 'text-red-500' : ''}`} onClick={(e) => handleNavLinkClick('home', e)}>Home</a></li>
              <li><a href="#about" className={`text-sm text-gray-200 dark:text-gray-300 hover:text-blue-200 dark:hover:text-blue-300 ${activeSection === 'about' ? 'text-red-500' : ''}`} onClick={(e) => handleNavLinkClick('about', e)}>About</a></li>
              <li><a href="#products" className={`text-sm text-gray-200 dark:text-gray-300 hover:text-blue-200 dark:hover:text-blue-300 ${activeSection === 'products' ? 'text-red-500' : ''}`} onClick={(e) => handleNavLinkClick('products', e)}>Products</a></li>
              <li><a href="#contact" className={`text-sm text-gray-200 dark:text-gray-300 hover:text-blue-200 dark:hover:text-blue-300 ${activeSection === 'contact' ? 'text-red-500' : ''}`} onClick={(e) => handleNavLinkClick('contact', e)}>Contact</a></li>
            </ul>
          </div>
        </nav>
        {/* Mobile Sidebar */}
        <div className={`lg:hidden fixed inset-0 z-20 bg-gray-900 bg-opacity-25 dark:bg-gray-400 ${open ? 'block' : 'hidden'}`} onClick={handleToggle}></div>
        <div className={`lg:hidden fixed inset-y-0 left-0 z-30 w-64 bg-blue-50 dark:bg-gray-800 transform duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-between items-center px-5 py-2">
            <a className="text-2xl font-bold dark:text-gray-300" href="#">Logo</a>
            <button className="rounded-md hover:text-blue-300 dark:text-gray-400" onClick={handleToggle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
          <ul className="px-5 text-left mt-7">
            <li className="pb-3">
              <a href="" className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-100">Home</a>
            </li>
            <li className="pb-3">
            <li><a href="#about" className={`text-sm text-gray-200 dark:text-gray-300 hover:text-blue-200 dark:hover:text-blue-300 ${activeSection === 'about' ? 'text-red-500' : ''}`} onClick={(e) => handleNavLinkClick('about', e)}>About</a></li>
            </li>
            <li className="pb-3">
            <li><a href="#products" className={`text-sm text-gray-200 dark:text-gray-300 hover:text-blue-200 dark:hover:text-blue-300 ${activeSection === 'products' ? 'text-red-500' : ''}`} onClick={(e) => handleNavLinkClick('products', e)}>Products</a></li>
            </li>
            <li className="pb-3">
            <li><a href="#contact" className={`text-sm text-gray-200 dark:text-gray-300 hover:text-blue-200 dark:hover:text-blue-300 ${activeSection === 'contact' ? 'text-red-500' : ''}`} onClick={(e) => handleNavLinkClick('contact', e)}>Contact</a></li>
            </li>
          </ul>
          {/* Rest of the sidebar content */}
        </div>
        {/* ... Rest of your code */}
      </div>
    </section>
  );
}

export default Navbar;
