import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import logo from '../../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { NavLinks } from '../../data/Navlinks';
import DUserSection from '../usersection/index';
import { motion } from 'framer-motion';

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const SideBar: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<boolean>(true);

  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleActiveLink = (title: string) => {
    setActive(title === active ? null : title);
  };

  return (
    <motion.div
      className={`relative py-2 lg:flex hidden flex-col items-center border border-r-2 shadow-lg h-full ${
        expanded ? 'w-[20%]' : 'w-[5%]'
      }`}
      animate={{ width: expanded ? '20%' : '5%' }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-full w-full grid place-items-center">
        <div className="flex gap-2 items-center px-4">
          <figure>
            <img
              src={logo}
              alt="Logo"
              className="w-10 h-10"
            />
          </figure>
          <motion.div
            className={`transition-all duration-300 ${
              expanded ? 'w-full px-2' : 'hidden'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: expanded ? 1 : 0 }}
          >
            <Link
              to="#"
              className="text-base font-bold"
            >
              <span className="text-orange-600">R</span>ing
              <span className="text-orange-600">S</span>olutions
            </Link>
          </motion.div>
        </div>
        <button
          className="absolute -right-4 top-12 border-2 rounded-xl py-1 text-white bg-orange-600 transition-all duration-200 z-10"
          onClick={() => setExpanded((curr) => !curr)}
          aria-label={expanded ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          {expanded ? <ChevronLeft size={25} /> : <ChevronRight size={25} />}
        </button>

        <motion.div
          className="mb-5 flex flex-col text-slate-500 px-2 text-base"
          initial="hidden"
          animate="visible"
          variants={linkVariants}
        >
          {NavLinks.map((link) => (
            <motion.div
              key={link.title}
              className={`w-full py-2 px-2 mt-3 flex items-center rounded-lg cursor-pointer transition-all duration-300 group ${
                active === link.title ? 'bg-orange-600 text-white' : 'hover:bg-orange-600 hover:text-white'
              }`}
              onClick={() => handleActiveLink(link.title)}
              onMouseEnter={() => setHoveredLink(link.title)}
              onMouseLeave={() => setHoveredLink(null)}
              variants={linkVariants}
            >
              <div className="flex items-center">
                {React.createElement(link.icon, { className: 'mr-2' })}
                {!expanded && (
                  <motion.div
                    className={`absolute left-full ml-2 -translate-x-3 rounded-md px-2 py-1 bg-indigo-100 text-indigo-800 text-sm ${
                      hoveredLink === link.title ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-500 ease-in-out`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredLink === link.title ? 1 : 0 }}
                  >
                    {link.title}
                  </motion.div>
                )}
              </div>
              <Link
                to={link.path}
                className={`ml-2 transition-all duration-300 ${expanded ? 'block' : 'hidden'}`}
              >
                {link.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div>
          <DUserSection expanded={expanded} />
        </div>
      </div>
    </motion.div>
  );
};

export default SideBar;
