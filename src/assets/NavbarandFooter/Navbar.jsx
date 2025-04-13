import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { navItems } from '../data/navitem'
import { FaBars } from 'react-icons/fa6'
import { CiDark, CiLight } from 'react-icons/ci'
import { TiKeyOutline } from 'react-icons/ti'
import { RxCross2 } from 'react-icons/rx'
import NotificationIcon from './NotificationIcon'
import { TiShoppingCart } from 'react-icons/ti'
import { Link } from 'react-router-dom'
// import { RiArrowDropDownLine } from 'react-icons/ri'
import SignUp from '../Form/signup';
import Login from '../Form/Login'
const Navbar = ({ setDarkMode, darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOpenForm, setIsOpenForm] = useState(false)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isMenuOpen)

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 shadow-md z-50 ${
        darkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-white text-black'
      }`}
    >
      <nav
        className={`px-4 py-2 max-w-6xl mx-auto flex items-center justify-between ${
          darkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-white text-black'
        }`}
      >
        {/* Logo */}
        <abbr title="Logo">
          <NavLink to="/">
            <img
              src="/image1.png"
              alt="Logo"
              className="logo h-10 w-auto object-contain"
            />
          </NavLink>
        </abbr>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-lg">
          {navItems.map(({ label, to }, i) => (
            <li
              key={i}
              className={`${
                darkMode
                  ? 'dark:bg-gray-900 dark:text-white'
                  : 'bg-white text-black'
              }`}
            >
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive ? 'border-b-2 text-blue-700' : ''
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <abbr title="Mode">
            <button onClick={() => setDarkMode(!darkMode)} className="text-xl">
              {darkMode ? (
                <CiDark className="w-7 h-7" />
              ) : (
                <CiLight className="w-7 h-7" />
              )}
            </button>
          </abbr>
          {/* Notification */}
          <abbr title="Notification">
            <NotificationIcon />
          </abbr>
          

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? (
              <RxCross2 className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>

          {/* Buttons */}
          <div className="relative">
            <button
              // aria-label="Toggle Dark Mode"
              onClick={() => setShowForm(!showForm)}
              className="px-2 py-1.5 lg:px-4 lg:py-2 bg-black text-white rounded-lg hover:bg-violet-800 transition text-xs"
            >
              Sign Up
            </button>
            {showForm && (
              <div className="absolute right-0 mt-2 z-50">
                <SignUp />
              </div>
            )}
          </div>
          {/* login form */}
          <div className="relative">
            <button
              onClick={() => setIsOpenForm(!isOpenForm)}
              className="px-2 py-1.5 lg:px-4 lg:py-2 ease-in bg-black text-white rounded-lg hover:bg-blue-800 transition flex items-center gap-2 text-xs"
            >
              <TiKeyOutline className="w-3 h-3 rotate-2" />
              Log in
            </button>
            {isOpenForm && (
              <div className="absolute right-0 mt-2 z-50">
                <Login />
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 w-full h-full bg-white dark:bg-gray-900 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-200 ease-in-out shadow-lg`}
      >
        <ul className="px-6 py-20 space-y-6 text-lg">
          {navItems.map(({ label, to }, i) => (
            <li key={i} className="nav-link">
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive ? 'border-b-2 text-blue-700' : ''
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Registration Form (conditionally shown) */}
    </header>
  )
}

export default Navbar







// import React, { useState, useEffect } from 'react'
// import { NavLink } from 'react-router-dom'
// import { navItems } from '../data/navitem'
// import { FaBars, FaChevronDown } from 'react-icons/fa6'
// import { CiDark, CiLight } from 'react-icons/ci'
// import { TiKeyOutline } from 'react-icons/ti'
// import { RxCross2 } from 'react-icons/rx'
// import NotificationIcon from './NotificationIcon'
// import SignUp from '../Form/signup'
// import Login from '../Form/Login'

// const Navbar = ({ setDarkMode, darkMode }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isOpenForm, setIsOpenForm] = useState(false)
//   const [showForm, setShowForm] = useState(false)
//   const [activeDropdown, setActiveDropdown] = useState(null)

//   useEffect(() => {
//     document.body.classList.toggle('overflow-hidden', isMenuOpen)
//     return () => {
//       document.body.classList.remove('overflow-hidden')
//     }
//   }, [isMenuOpen])

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 shadow-md z-50 ${
//         darkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-white text-black'
//       }`}
//     >
//       <nav className="px-4 py-2 max-w-6xl mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <abbr title="Logo">
//           <NavLink to="/">
//             <img src="/image1.png" alt="Logo" className="h-10 w-auto" />
//           </NavLink>
//         </abbr>

//         {/* Desktop Nav */}
//         <ul className="hidden md:flex gap-8 text-lg relative">
//           {navItems.map(({ label, to, dropdown }, i) => (
//             <li key={i} className="relative group">
//               <NavLink
//                 to={to}
//                 className={({ isActive }) =>
//                   `hover:text-blue-600 ${
//                     isActive ? 'border-b-2 text-blue-700' : ''
//                   }`
//                 }
//               >
//                 {label}
//               </NavLink>
//               {dropdown && (
//                 <ul className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 shadow-md rounded-md w-40 hidden group-hover:block z-50">
//                   {dropdown.map((item, index) => (
//                     <li key={index}>
//                       <NavLink
//                         to={item.to}
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
//                       >
//                         {item.label}
//                       </NavLink>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Right Icons */}
//         <div className="flex items-center gap-4">
//           {/* Dark Mode Toggle */}
//           <abbr title="Mode">
//             <button onClick={() => setDarkMode(!darkMode)} className="text-xl">
//               {darkMode ? (
//                 <CiDark className="w-7 h-7" />
//               ) : (
//                 <CiLight className="w-7 h-7" />
//               )}
//             </button>
//           </abbr>

//           {/* Notification */}
//           <abbr title="Notification">
//             <NotificationIcon />
//           </abbr>

//           {/* Buttons */}
//           <div className="relative">
//             <button
//               onClick={() => setShowForm(!showForm)}
//               className="px-2 py-1.5 lg:px-4 lg:py-2 bg-black text-white rounded-lg hover:bg-violet-800 transition text-xs"
//             >
//               Sign Up
//             </button>
//             {showForm && (
//               <div className="absolute right-0 mt-2 z-50">
//                 <SignUp />
//               </div>
//             )}
//           </div>

//           <div className="relative">
//             <button
//               onClick={() => setIsOpenForm(!isOpenForm)}
//               className="px-2 py-1.5 lg:px-4 lg:py-2 bg-black text-white rounded-lg hover:bg-blue-800 transition flex items-center gap-2 text-xs"
//             >
//               <TiKeyOutline className="w-3 h-3 rotate-2" />
//               Log in
//             </button>
//             {isOpenForm && (
//               <div className="absolute right-0 mt-2 z-50">
//                 <Login />
//               </div>
//             )}
//           </div>

//           {/* Mobile Menu Toggle */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden"
//           >
//             {isMenuOpen ? (
//               <RxCross2 className="w-6 h-6" />
//             ) : (
//               <FaBars className="w-6 h-6" />
//             )}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white dark:bg-gray-900 px-4 py-4 space-y-4 shadow-md">
//           {navItems.map(({ label, to, dropdown }, i) => (
//             <div key={i}>
//               <div className="flex justify-between items-center">
//                 <NavLink
//                   to={to}
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block py-2"
//                 >
//                   {label}
//                 </NavLink>
//                 {dropdown && (
//                   <button
//                     onClick={() =>
//                       setActiveDropdown(activeDropdown === i ? null : i)
//                     }
//                   >
//                     <FaChevronDown
//                       className={`transition-transform duration-200 ${
//                         activeDropdown === i ? 'rotate-180' : ''
//                       }`}
//                     />
//                   </button>
//                 )}
//               </div>
//               {dropdown && activeDropdown === i && (
//                 <ul className="pl-4 space-y-1 mt-1">
//                   {dropdown.map((item, index) => (
//                     <li key={index}>
//                       <NavLink
//                         to={item.to}
//                         onClick={() => setIsMenuOpen(false)}
//                         className="block py-1 text-sm hover:text-blue-600"
//                       >
//                         {item.label}
//                       </NavLink>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </header>
//   )
// }

// export default Navbar
