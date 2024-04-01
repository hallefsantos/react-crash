import { Link, NavLink } from 'react-router-dom'
import clsx from 'clsx'

export default function Navbar() {
  const menuItems = [
    {
      to: '/',
      label: 'Home',
    },
    {
      to: '/jobs',
      label: 'Jobs',
    },
    {
      to: '/jobs/create',
      label: 'Add Job',
    }
  ]

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            <Link className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-10 w-auto"
                src="/images/logo.png"
                alt="React Jobs"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2"
                >React Jobs</span
              >
            </Link>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                {menuItems.map(item => (
                  <NavLink
                    end
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) => clsx(
                      'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2', {
                        'bg-black': isActive === true,
                      }
                    )}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}