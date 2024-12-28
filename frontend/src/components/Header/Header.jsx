import logo from '../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { useEffect, useRef, useContext } from 'react';
import { authContext } from '../../context/AuthContext';

const navLinks = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/doctors',
    display: 'Find a Doctor',
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);
  });

  const toggleMenu = () => {
    menuRef.current.classList.toggle('show__menu');
  };

  return (
    <header
      className="header fixed top-0 left-0 w-full bg-white shadow-md z-50 flex items-center py-4"
      ref={headerRef}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://www.shutterstock.com/image-vector/click-medical-logo-design-template-600nw-1753277819.jpg"
              alt="Logo"
              className="h-20 w-auto"
            />
          </div>

          {/* Navigation Menu */}
          <nav
            className={`navigation absolute lg:static top-16 right-4 bg-white lg:bg-transparent shadow-lg lg:shadow-none rounded-lg lg:rounded-none p-4 lg:p-0 flex flex-col lg:flex-row gap-4 lg:gap-6 items-center transition-all duration-300 ease-in-out lg:translate-x-0 
              
            `}
            ref={menuRef}
          >
            <ul className="menu flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-primaryColor text-[16px] font-semibold'
                        : 'text-gray-700 text-[16px] font-medium hover:text-primaryColor'
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {user && token ? (
              <Link
                to={
                  role === 'doctor'
                    ? '/doctors/profile/me'
                    : '/users/profile/me'
                }
              >
                <figure className="w-9 h-9 rounded-full overflow-hidden">
                  <img
                    src={user?.photo}
                    alt="User Profile"
                    className="w-full h-full object-cover"
                  />
                </figure>
              </Link>
            ) : (
              <Link to="/login">
                <button>Login</button>
              </Link>
            )}
            <button
              className="block lg:hidden text-gray-700"
              onClick={toggleMenu}
            >
              <BiMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
