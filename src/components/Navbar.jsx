import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar px-5 my-2">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-y-5">
      <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/"}
          >
            <li className="font-semibold text-[#444] text-sm cursor-pointer">
              Home
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/about"}
          >
            <li className="font-semibold text-[#444] text-sm cursor-pointer">
              About
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary  decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/services"}
          >
            <li className="font-semibold text-sm text-[#444] cursor-pointer">
              Services
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/blog"}
          >
            <li className="font-semibold text-sm text-[#444] cursor-pointer">
              Blog
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/contact"}
          >
            <li className="font-semibold text-sm text-[#444] cursor-pointer">
              Contact
            </li>
          </NavLink>
      </ul>
    </div>
    <div onClick={()=>navigate('/')} className='flex flex-col items-center gap-1 cursor-pointer'>
    <img src="logo.svg" alt="logo.png" className='lg:w-20 md:w-10 w-8'/>
    <span className='font-bold text-[#444] text-lg'>Car Junction
    </span>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex items-center gap-10">
    <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/"}
          >
            <li className="font-semibold text-[#444] text-sm cursor-pointer">
              Home
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/about"}
          >
            <li className="font-semibold text-[#444] text-sm cursor-pointer">
              About
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary  decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/services"}
          >
            <li className="font-semibold text-sm text-[#444] cursor-pointer">
              Services
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/blog"}
          >
            <li className="font-semibold text-sm text-[#444] cursor-pointer">
              Blog
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/contact"}
          >
            <li className="font-semibold text-sm text-[#444] cursor-pointer">
              Contact
            </li>
          </NavLink>
    </ul>
  </div>
  <div className="navbar-end flex items-center gap-3">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M15.75 10.5V6C15.75 5.00544 15.3549 4.05161 14.6516 3.34835C13.9484 2.64509 12.9945 2.25 12 2.25C11.0054 2.25 10.0516 2.64509 9.34833 3.34835C8.64507 4.05161 8.24998 5.00544 8.24998 6V10.5M19.606 8.507L20.869 20.507C20.939 21.172 20.419 21.75 19.75 21.75H4.24998C4.09219 21.7502 3.93613 21.7171 3.79193 21.6531C3.64774 21.589 3.51863 21.4953 3.41301 21.3781C3.30738 21.2608 3.2276 21.1227 3.17884 20.9726C3.13008 20.8226 3.11343 20.6639 3.12999 20.507L4.39399 8.507C4.42314 8.23056 4.55361 7.9747 4.76024 7.78876C4.96686 7.60281 5.23501 7.49995 5.51298 7.5H18.487C19.063 7.5 19.546 7.935 19.606 8.507ZM8.62498 10.5C8.62498 10.5995 8.58548 10.6948 8.51515 10.7652C8.44482 10.8355 8.34944 10.875 8.24998 10.875C8.15053 10.875 8.05515 10.8355 7.98482 10.7652C7.91449 10.6948 7.87498 10.5995 7.87498 10.5C7.87498 10.4005 7.91449 10.3052 7.98482 10.2348C8.05515 10.1645 8.15053 10.125 8.24998 10.125C8.34944 10.125 8.44482 10.1645 8.51515 10.2348C8.58548 10.3052 8.62498 10.4005 8.62498 10.5V10.5ZM16.125 10.5C16.125 10.5995 16.0855 10.6948 16.0152 10.7652C15.9448 10.8355 15.8494 10.875 15.75 10.875C15.6505 10.875 15.5551 10.8355 15.4848 10.7652C15.4145 10.6948 15.375 10.5995 15.375 10.5C15.375 10.4005 15.4145 10.3052 15.4848 10.2348C15.5551 10.1645 15.6505 10.125 15.75 10.125C15.8494 10.125 15.9448 10.1645 16.0152 10.2348C16.0855 10.3052 16.125 10.4005 16.125 10.5V10.5Z" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M19 19L13.803 13.803M13.803 13.803C15.2096 12.3964 15.9998 10.4887 15.9998 8.49949C15.9998 6.51029 15.2096 4.60256 13.803 3.19599C12.3964 1.78941 10.4887 0.999207 8.49949 0.999207C6.51029 0.999207 4.60256 1.78941 3.19599 3.19599C1.78941 4.60256 0.999207 6.51029 0.999207 8.49949C0.999207 10.4887 1.78941 12.3964 3.19599 13.803C4.60256 15.2096 6.51029 15.9998 8.49949 15.9998C10.4887 15.9998 12.3964 15.2096 13.803 13.803V13.803Z" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
    <button className='border border-primary text-primary px-4 py-2 rounded-md font-semibold'>Appointment</button>
    
  </div>
</div>
  )
}

export default Navbar