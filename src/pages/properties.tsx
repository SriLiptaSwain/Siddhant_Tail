/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
import { Dialog, Menu, Transition } from '@headlessui/react';
import {
  BellIcon,
  CalendarIcon,
  ChevronRightIcon,
  CogIcon,
  CursorClickIcon,
  DotsVerticalIcon,
  FilterIcon,
  FolderIcon,
  HomeIcon,
  MenuAlt2Icon,
  PlusIcon,
  XIcon,
} from '@heroicons/react/outline';
import { Fragment, useState } from 'react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: FolderIcon, current: false },
  { name: 'Properties', href: '/properties', icon: HomeIcon, current: true },
  {
    name: 'Reservations',
    href: '/reservations',
    icon: CalendarIcon,
    current: false,
  },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];
const userNav = [{ name: 'Settings', href: '/settings' }];

const applications = [
  {
    applicant: {
      name: 'Hotel Berlin',
      email: 'ricardo.cooper@example.com',
      address1: 'Friedrichstraße 79-80, 10117 Berlin, Germany',
      imageUrl:
        'https://img.etimg.com/thumb/msid-90724647,width-300,imgsize-28786,,resizemode-4,quality-100/indian-hotels.jpg',
    },
    date: '2020-01-07',
    dateFull: 'January 7, 2020',
    stage: 'Completed phone screening',
    href: '/propDashboard',
    status: 'Test',
  },
  {
    applicant: {
      name: 'Hotel London',
      email: 'kristen.ramos@example.com',
      address1: 'James Street 5, WC2E 8NS London, United Kingdom',
      imageUrl:
        'https://img.etimg.com/thumb/msid-90724647,width-300,imgsize-28786,,resizemode-4,quality-100/indian-hotels.jpg',
    },
    date: '2020-01-07',
    dateFull: 'January 7, 2020',
    stage: 'Completed phone screening',
    href: '/propDashboard',
    status: 'Test',
  },
  {
    applicant: {
      name: 'Hotel Munich',
      email: 'ted.fox@example.com',
      address1: 'Leopoldstraße 8-10, 80802 Munich, Germany',
      imageUrl:
        'https://img.etimg.com/thumb/msid-90724647,width-300,imgsize-28786,,resizemode-4,quality-100/indian-hotels.jpg',
    },
    date: '2020-01-07',
    dateFull: 'January 7, 2020',
    stage: 'Completed phone screening',
    href: '/propDashboard',
    status: 'Test',
  },
  {
    applicant: {
      name: 'Hotel Vienna',
      email: 'ted.fox@example.com',
      address1: 'Philharmoniker Str. 4, 1010 Vienna, Austria',
      imageUrl:
        'https://img.etimg.com/thumb/msid-90724647,width-300,imgsize-28786,,resizemode-4,quality-100/indian-hotels.jpg',
    },
    date: '2020-01-07',
    dateFull: 'January 7, 2020',
    stage: 'Completed phone screening',
    href: '/propDashboard',
    status: 'Test',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 z-40 flex md:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-gray-800">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 pt-2 -mr-12">
                  <button
                    className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="w-6 h-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex items-center px-4 shrink-0">
                <img
                  className="w-auto h-8"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                  alt="Workflow"
                />
              </div>
              <div className="flex-1 h-0 mt-5 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? 'text-gray-300'
                            : 'text-gray-400 group-hover:text-gray-300',
                          'mr-4 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="w-14 shrink-0" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-1 h-0">
            <div className="flex items-center h-16 px-4 bg-gray-900 shrink-0">
              <img
                className="w-auto h-8"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              />
            </div>
            <div className="flex items-center h-16 px-4 bg-gray-900 shrink-0">
              <label
                htmlFor="context"
                className="block text-sm font-medium text-gray-700"
              >
                Context
              </label>
            </div>
            <div>
              <div className="flex items-center h-16 px-4 bg-gray-900 shrink-0">
                <select
                  id="context"
                  name="context"
                  className="block w-full px-3 py-2 mt-1 text-base border-gray-300 rounded-md focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                  defaultValue="Account 1"
                >
                  <option>Account 1</option>
                  <option>Account 2</option>
                  <option>Account 3</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col flex-1 overflow-y-auto">
              <nav className="flex-1 px-2 py-4 space-y-1 bg-gray-800">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? 'text-gray-300'
                          : 'text-gray-400 group-hover:text-gray-300',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <div className="relative z-10 flex h-16 bg-white shadow shrink-0">
          <button
            className="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="w-6 h-6" aria-hidden="true" />
          </button>
          <div className="flex justify-between flex-1 px-4">
            <div className="flex flex-1">
              <form className="flex w-full md:ml-0" action="#" method="GET">
                <div className="relative w-full text-gray-800">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    SiddCodes
                  </div>
                </div>
              </form>
            </div>
            <div className="flex items-center ml-4 md:ml-6">
              <button className="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span className="sr-only">View notifications</span>
                <BellIcon className="w-6 h-6" aria-hidden="true" />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className="flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
          </div>
        </div>

        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                Properties
              </h1>
              <div className="p-3">
                <a href="\create">
                  <span className="relative z-0 inline-flex rounded-md shadow-sm">
                    <button
                      type="button"
                      className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-700 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    >
                      <PlusIcon
                        className="w-5 h-5 mr-2 -ml-1 text-gray-400"
                        aria-hidden="true"
                      />
                      New property
                    </button>
                    <button
                      type="button"
                      className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    >
                      <FilterIcon
                        className="w-5 h-5 mr-2 -ml-1 text-gray-400"
                        aria-hidden="true"
                      />
                      Filter
                    </button>
                  </span>
                </a>
              </div>
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              {/* Replace with your content */}
              <div className="py-4">
                <div className="overflow-hidden bg-white shadow sm:rounded-md">
                  <div className="divide-y divide-gray-200">
                    <div className="flex items-center p-4 sm:px-6">
                      <div className="flex items-center flex-1 min-w-0">
                        <div className="shrink-0">
                          {/* <img className="w-12 h-12 rounded-full" alt="" /> */}
                        </div>
                        <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
                          <div>
                            <p className="text-gray-900 text-med">Property</p>
                          </div>
                          <div
                            className="hidden md:block"
                            style={{ display: 'flex', alignItems: 'center' }}
                          >
                            <div>
                              <p className="text-gray-900 text-med">Status</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <ul className="divide-y divide-gray-200">
                        {applications.map((application) => (
                          <li key={application.applicant.address1}>
                            <a
                              href={application.href}
                              className="block hover:bg-gray-50"
                            >
                              <div className="flex items-center p-4 sm:px-6">
                                <div className="flex items-center flex-1 min-w-0">
                                  <div className="shrink-0">
                                    <img
                                      className="w-12 h-12 rounded-full"
                                      src={application.applicant.imageUrl}
                                      alt=""
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
                                    <div>
                                      <p className="text-sm font-medium text-indigo-600 truncate">
                                        {application.applicant.name}
                                      </p>
                                      <p className="flex items-center mt-2 text-sm text-gray-500">
                                        {/* <MailIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                                        <span className="truncate">
                                          {application.applicant.address1}
                                        </span>
                                      </p>
                                    </div>
                                    <div
                                      className="hidden md:block"
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                      }}
                                    >
                                      <div>
                                        <p className="text-sm text-gray-900">
                                          <span className="truncate">
                                            {application.status}
                                          </span>
                                        </p>
                                        {/* <p className="flex items-center mt-2 text-sm text-gray-500">
                                        <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true" />
                                        {application.stage}
                                      </p> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center">
                                  <Menu as="div" className="relative ml-3">
                                    {({ open }) => (
                                      <>
                                        <div className="p-3">
                                          <Menu.Button className="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none ">
                                            <span className="sr-only">
                                              View notifications
                                            </span>
                                            <DotsVerticalIcon
                                              className="w-6 h-6"
                                              aria-hidden="true"
                                            />
                                          </Menu.Button>
                                        </div>
                                        <Transition
                                          show={open}
                                          as={Fragment}
                                          enter="transition ease-out duration-100"
                                          enterFrom="transform opacity-0 scale-95"
                                          enterTo="transform opacity-100 scale-100"
                                          leave="transition ease-in duration-75"
                                          leaveFrom="transform opacity-100 scale-100"
                                          leaveTo="transform opacity-0 scale-95"
                                        >
                                          <Menu.Items
                                            static
                                            className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                          >
                                            {userNav.map((item) => (
                                              <Menu.Item key={item.name}>
                                                {({ active }) => (
                                                  <a
                                                    href={item.href}
                                                    className={classNames(
                                                      active
                                                        ? 'bg-gray-100'
                                                        : '',
                                                      'block px-4 py-2 text-sm text-gray-700'
                                                    )}
                                                  >
                                                    Settings
                                                  </a>
                                                )}
                                              </Menu.Item>
                                            ))}
                                          </Menu.Items>
                                        </Transition>
                                      </>
                                    )}
                                  </Menu>
                                  <ChevronRightIcon
                                    className="w-5 h-5 text-black"
                                    aria-hidden="true"
                                  />
                                </div>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="flex items-center flex-1 min-w-0">
                  <div className="flex-shrink-0">
                    <img className="w-12 h-12 rounded-full" alt="" />
                  </div>
                  <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <p className="text-sm text-gray-900">Property</p>
                    </div>
                    <div className="hidden md:block" style={{display:'flex',alignItems:'center'}}>
                      <div >
                        <p className="text-sm text-gray-900" >
                        Status
                        </p>
                      </div>
                    </div>
                  </div>
                            
                </div> */}
                  </div>
                </div>
              </div>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
