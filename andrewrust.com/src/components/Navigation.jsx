import React, { useState, useEffect } from 'react';
import { CodeBracketSquareIcon, HomeIcon, UserIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  const navigationTabs = [
    {
        id: 1,
        name: 'Home',
        icon: <HomeIcon className="h-7 w-7" />,
        href: '#home',
        onClick: () => setActiveNav('#home'),
        active: activeNav === '#home',
    },
    {
        id: 2,
        name: 'About',
        icon: <UserIcon className="h-7 w-7" />,
        href: '#about',
        onClick: () => setActiveNav('#about'),
        active: activeNav === '#about',
    },
    {
        id: 3,
        name: 'Projects',
        icon: <CodeBracketSquareIcon className="h-7 w-7" />,
        href: '#projects',

        onClick: () => setActiveNav('#projects'),
        active: activeNav === '#projects',
    },
    {
        id: 4,
        name: 'Contact',
        icon: <EnvelopeIcon className="h-7 w-7" />,
        href: '#contact',
        onClick: () => setActiveNav('#contact'),
        active: activeNav === '#contact',
    },
    ];

    useEffect(() => {
        const handleScroll = () => {
          const sections = document.querySelectorAll('section');
          const currentSectionIndex = [...sections].findIndex((section) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            return window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom;
          });
          console.log(currentSectionIndex);
          try {
            const currentSectionHref = `#${sections[currentSectionIndex].id}`;
            console.log(currentSectionHref);
            setActiveNav(currentSectionHref);
          }
            catch (error) {
                console.log(error);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <nav className="bg-black bg-opacity-30 w-max block px-3 py-2 z-20 fixed left-1/2 transform -translate-x-1/2 bottom-12 flex gap-3 rounded-lg backdrop-filter">
        {navigationTabs.map((tab) => (
            <a
                key={tab.id}
                href={tab.href}
                onClick={tab.onClick}
                className={`flex items-center px-4 justify-center w-full h-16 rounded-lg text-white font-light transition-all duration-150 hover:bg-opacity-50 hover:font-bold ${tab.active ? 'bg-primary font-extrabold text-bg' : ''}`}
            >
                {tab.icon}
                <p className="hidden md:block ml-2 text-lg">{tab.name}</p>
            </a>
        ))}
    </nav>
  );
};

export default Nav;