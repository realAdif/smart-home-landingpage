import { useState } from 'react';
import MenuIcon from '../assets/MenuIcon.svg';
import Facebook from '../assets/Facebook.svg';
import Instagram from '../assets/Instagram.svg';
import Twitter from '../assets/Twitter.svg';
import LinkedIn from '../assets/LinkedIn.svg';
import CrossIcon from '../assets/CrossIcon.svg';
const navList = [
  {
    p: 'Home',
    href: '#home',
  },
  {
    p: 'About',
    href: '#about',
  },
  {
    p: 'Testimonials',
    href: '#testimonials',
  },
  {
    p: 'Contact',
    href: '#contact',
  },
];
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(true);
  const handleNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <nav className={navOpen ? 'bg-primary p-3 ' : 'bg-primary h-screen p-3 '}>
      {/* lg */}
      <div className="lg:flex justify-between items-center hidden">
        {/* list */}
        <ul className="flex gap-x-9 z-50">
          {navList.map((nav, index) => (
            <li
              key={index}
              className="text-sm text-white cursor-pointer hover:underline"
            >
              <a href={nav.href}>{nav.p}</a>
            </li>
          ))}
        </ul>
        {/* title */}
        <span className="text-lg text-white font-bold">smartHome</span>
        {/* button */}
        <div>
          <button className="text-white">Login</button>
          <button className="bg-white text-neutral-black px-6 py-2 rounded-sm ml-4 drop-shadow-md">
            Sign up
          </button>
        </div>
      </div>
      {/* sm */}
      <div className="lg:hidden">
        {/* title */}
        <div className="flex justify-between">
          <span className="text-lg text-white font-bold">smartHome</span>
          <button onClick={handleNav}>
            <img src={navOpen ? MenuIcon : CrossIcon} alt="Menu Icon" />
          </button>
        </div>
        {/* list */}
        <div
          className={
            navOpen ? 'hidden' : 'flex flex-col justify-between h-screen'
          }
        >
          {/* list */}
          <div>
            <ul>
              {navList.map((nav, index) => (
                <li
                  key={index}
                  className="text-md my-2 p-3 font-semibold text-white hover:text-black hover:bg-white rounded-lg cursor-pointer"
                >
                  {nav.p}
                </li>
              ))}
              <li className="text-md my-2 p-3 font-semibold text-white hover:text-black hover:bg-white rounded-lg cursor-pointer">
                Login
              </li>
              <li className="text-md my-2 p-3 font-semibold text-white hover:text-black hover:bg-white rounded-lg cursor-pointer">
                Sign up
              </li>
            </ul>
          </div>
          {/* social */}
          <div className="flex justify-center gap-x-10  mb-36">
            <img src={Facebook} alt="Facebook Icon" />
            <img src={Instagram} alt="Instagram Icon" />
            <img src={Twitter} alt="Twitter Icon" />
            <img src={LinkedIn} alt="LinkedIn Icon" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
