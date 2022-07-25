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
  CogIcon,
  CursorClickIcon,
  FolderIcon,
  HomeIcon,
  MenuAlt2Icon,
  QuestionMarkCircleIcon,
  XIcon,
} from '@heroicons/react/outline';
import { Fragment, useState } from 'react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: FolderIcon, current: true },
  {
    name: 'Properties',
    href: '/properties',
    icon: HomeIcon,
    current: false,
  },
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


function classNames(...classes) {
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
                Create new Property
              </h1>
              <div className="p-3">
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-black bg-indigo-100 border border-transparent rounded-md shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <QuestionMarkCircleIcon
                    className="-ml-0.5 mr-2 h-4 w-4"
                    aria-hidden="true"
                  />
                  Help
                </button>
              </div>
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              {/* Replace with your content */}
              {
                // property
                <div
                  className="flex px-4 mx-auto"
                  style={{ flexDirection: 'column' }}
                >
                  <div>
                    <div p-3>
                      <h3 className="ml-10 text-lg font-medium leading-6 text-gray-900">
                        General
                      </h3>
                    </div>
                    <div className="p-2">
                      <div className="flex justify-between p-5 width">
                        <label
                          htmlFor="propertyCode"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Property Code
                        </label>
                        <span
                          className="text-sm text-gray-500"
                          id="email-optional"
                        ></span>
                      </div>
                      <div className="mt-1" style={{ width: '200px' }}>
                        <input
                          required
                          type="text"
                          name="propertyCode"
                          id="propertyCode"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder=""
                          aria-describedby="propertyCode-mandatory"
                        />
                      </div>
                    </div>
                    <div className="py-2">
                      <div>
                        <dl
                          className="grid grid-cols-1 gap-5 p-5 mt-5 sm:grid-cols-2 lg:grid-cols-3"
                          style={{ backgroundColor: '#f7f7f7' }}
                        >
                          <div
                            className="p-2 mx-2 -space-y-px rounded-md shadow-sm card"
                            style={{ backgroundColor: 'white' }}
                          >
                            <h6 style={{ textAlign: 'center' }}>English</h6>
                            <fieldset>
                              <legend className="block text-sm font-medium text-gray-700">
                                Name
                              </legend>
                              <div className="mt-1 -space-y-px bg-white rounded-md shadow-sm">
                                <div>
                                  <label
                                    htmlFor="card-number"
                                    className="sr-only"
                                  >
                                    Name
                                  </label>
                                  <input
                                    type="text"
                                    name="Name"
                                    id="Name"
                                    className="relative block w-full bg-transparent border-gray-300 rounded-none rounded-t-md focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Name"
                                  />
                                </div>
                              </div>
                            </fieldset>
                            <fieldset className="mt-3">
                              <legend className="block mt-5 text-sm font-medium text-gray-700">
                                Description
                              </legend>
                              <div className="mt-1 -space-y-px bg-white rounded-md shadow-sm">
                                <div>
                                  <label
                                    htmlFor="card-number"
                                    className="sr-only"
                                  >
                                    Description
                                  </label>
                                  <textarea
                                    name="Description"
                                    id="Description"
                                    rows={4}
                                    className="relative block w-full bg-transparent border-gray-300 rounded-none rounded-t-md focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Description"
                                  />
                                </div>
                              </div>
                            </fieldset>
                          </div>

                          <div
                            className="p-2 mx-2 -space-y-px rounded-md shadow-sm"
                            style={{ backgroundColor: 'white' }}
                          >
                            <h6 style={{ textAlign: 'center' }}>German</h6>
                            <fieldset>
                              <legend className="block text-sm font-medium text-gray-700">
                                Name
                              </legend>
                              <div className="mt-1 -space-y-px bg-white rounded-md shadow-sm">
                                <div>
                                  <label
                                    htmlFor="card-number"
                                    className="sr-only"
                                  >
                                    Name
                                  </label>
                                  <input
                                    type="text"
                                    name="Name"
                                    id="Name"
                                    className="relative block w-full bg-transparent border-gray-300 rounded-none rounded-t-md focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Name"
                                  />
                                </div>
                              </div>
                            </fieldset>
                            <fieldset className="mt-3">
                              <legend className="block mt-5 text-sm font-medium text-gray-700">
                                Description
                              </legend>
                              <div className="mt-1 -space-y-px bg-white rounded-md shadow-sm">
                                <div>
                                  <label
                                    htmlFor="card-number"
                                    className="sr-only"
                                  >
                                    Description
                                  </label>
                                  <textarea
                                    name="Description"
                                    id="Description"
                                    rows={4}
                                    className="relative block w-full bg-transparent border-gray-300 rounded-none rounded-t-md focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Description"
                                  />
                                </div>
                              </div>
                            </fieldset>
                          </div>

                          <div
                            className="p-2 mx-2 -space-y-px rounded-md shadow-sm"
                            style={{ backgroundColor: 'white' }}
                          >
                            <h6 style={{ textAlign: 'center' }}>Italian</h6>
                            <fieldset>
                              <legend className="block text-sm font-medium text-gray-700">
                                Name
                              </legend>
                              <div className="mt-1 -space-y-px bg-white rounded-md shadow-sm">
                                <div>
                                  <label
                                    htmlFor="card-number"
                                    className="sr-only"
                                  >
                                    Name
                                  </label>
                                  <input
                                    type="text"
                                    name="Name"
                                    id="Name"
                                    className="relative block w-full bg-transparent border-gray-300 rounded-none rounded-t-md focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Name"
                                  />
                                </div>
                              </div>
                            </fieldset>
                            <fieldset className="mt-3">
                              <legend className="block mt-5 text-sm font-medium text-gray-700">
                                Description
                              </legend>
                              <div className="mt-1 -space-y-px bg-white rounded-md shadow-sm">
                                <div>
                                  <label
                                    htmlFor="card-number"
                                    className="sr-only"
                                  >
                                    Description
                                  </label>
                                  <textarea
                                    name="Description"
                                    id="Description"
                                    rows={4}
                                    className="relative block w-full bg-transparent border-gray-300 rounded-none rounded-t-md focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Description"
                                  />
                                </div>
                              </div>
                            </fieldset>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="pt-8 ml-10">
                      <div>
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          Location
                        </h3>
                        {/* <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p> */}
                      </div>
                      <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="first_name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Address 1
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="Address1"
                              id="Address1"
                              autoComplete="given-name"
                              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="last_name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Address 2
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="Address2"
                              id="Address2"
                              autoComplete="family-name"
                              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Country / Region
                          </label>
                          <div className="mt-1">
                            <select
                              id="country"
                              name="country"
                              autoComplete="country"
                              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            >
                              <option>United States</option>
                              <option>Canada</option>
                              <option>Mexico</option>
                            </select>
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="state"
                            className="block text-sm font-medium text-gray-700"
                          >
                            State / Province
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="state"
                              id="state"
                              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                          >
                            City
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="city"
                              id="city"
                              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="zip"
                            className="block text-sm font-medium text-gray-700"
                          >
                            ZIP / Postal
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="zip"
                              id="zip"
                              autoComplete="postal-code"
                              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="timezone"
                            className="block text-sm font-medium text-gray-700"
                          >
                            TimeZone
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="timezone"
                              id="timezone"
                              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="zip"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Currency Code
                          </label>
                          <div className="mt-1">
                            <input
                              type="number"
                              name="currencycode"
                              id="currencycode"
                              autoComplete="CurrencyCode"
                              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Default Check-in Time
                          </label>
                          <div className="mt-1">
                            <input
                              type="datetime-local"
                              name="checkin"
                              id="checkin"
                              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="zip"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Default Check-out Time
                          </label>
                          <div className="mt-1">
                            <input
                              type="datetime-local"
                              name="checkout"
                              id="checkout"
                              autoComplete="check-out"
                              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="pt-8 mt-10">
                          <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                              Company Details
                            </h3>
                            {/* <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p> */}
                          </div>
                          <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div className="sm:col-span-6 ">
                              <label
                                htmlFor="first_name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Company Name
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  name="companyName"
                                  id="companyName"
                                  autoComplete="companyName"
                                  className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-2">
                              <label
                                htmlFor="last_name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Bank
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  name="bank"
                                  id="bank"
                                  autoComplete="bank"
                                  className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-2">
                              <label
                                htmlFor="state"
                                className="block text-sm font-medium text-gray-700"
                              >
                                BIC
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  name="bic"
                                  id="bic"
                                  className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-2">
                              <label
                                htmlFor="city"
                                className="block text-sm font-medium text-gray-700"
                              >
                                IBAN
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  name="iban"
                                  id="iban"
                                  className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>
                            <div className="sm:col-span-2">
                              <label
                                htmlFor="last_name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Commercial register entry
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  name="bank"
                                  id="bank"
                                  autoComplete="bank"
                                  className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-2">
                              <label
                                htmlFor="state"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Tax ID
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  name="bic"
                                  id="bic"
                                  className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-2">
                              <label
                                htmlFor="city"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Managing directories
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  name="iban"
                                  id="iban"
                                  className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="py-2">
                            <div>
                              <dl
                                className="grid grid-cols-1 gap-5 p-5 mt-5 sm:grid-cols-2 lg:grid-cols-3"
                                style={{ backgroundColor: '#f7f7f7' }}
                              >
                                <div
                                  className="p-3 mx-2 -space-y-px rounded-md shadow-sm card"
                                  style={{ backgroundColor: 'white' }}
                                >
                                  <h6 style={{ textAlign: 'center' }}>
                                    English
                                  </h6>
                                  <fieldset className="mt-3">
                                    <legend className="block mt-5 text-sm font-medium text-gray-700">
                                      Description
                                    </legend>
                                    <div className="mt-1 -space-y-px bg-white rounded-md shadow-sm">
                                      <div>
                                        <label
                                          htmlFor="card-number"
                                          className="sr-only"
                                        >
                                          Description
                                        </label>
                                        <textarea
                                          name="Description"
                                          id="Description"
                                          rows={4}
                                          className="relative block w-full bg-transparent border-gray-300 rounded-none rounded-t-md focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                          placeholder="Description"
                                        />
                                      </div>
                                    </div>
                                  </fieldset>
                                </div>

                                <div
                                  className="p-3 mx-2 -space-y-px rounded-md shadow-sm"
                                  style={{ backgroundColor: 'white' }}
                                >
                                  <h6 style={{ textAlign: 'center' }}>
                                    German
                                  </h6>
                                  <fieldset className="mt-3">
                                    <legend className="block mt-5 text-sm font-medium text-gray-700">
                                      Description
                                    </legend>
                                    <div className="mt-1 -space-y-px bg-white rounded-md shadow-sm">
                                      <div>
                                        <label
                                          htmlFor="card-number"
                                          className="sr-only"
                                        >
                                          Description
                                        </label>
                                        <textarea
                                          name="Description"
                                          id="Description"
                                          rows={4}
                                          className="relative block w-full bg-transparent border-gray-300 rounded-none rounded-t-md focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                          placeholder="Description"
                                        />
                                      </div>
                                    </div>
                                  </fieldset>
                                </div>

                                <div
                                  className="p-3 mx-2 -space-y-px rounded-md shadow-sm"
                                  style={{ backgroundColor: 'white' }}
                                >
                                  <h6 style={{ textAlign: 'center' }}>
                                    Italian
                                  </h6>
                                  <fieldset className="mt-3">
                                    <legend className="block mt-5 text-sm font-medium text-gray-700">
                                      Description
                                    </legend>
                                    <div className="mt-1 -space-y-px bg-white rounded-md shadow-sm">
                                      <div>
                                        <label
                                          htmlFor="card-number"
                                          className="sr-only"
                                        >
                                          Description
                                        </label>
                                        <textarea
                                          name="Description"
                                          id="Description"
                                          rows={4}
                                          className="relative block w-full bg-transparent border-gray-300 rounded-none rounded-t-md focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                          placeholder="Description"
                                        />
                                      </div>
                                    </div>
                                  </fieldset>
                                </div>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-5">
                      <div className="flex justify-end">
                        <button
                          type="button"
                          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              }
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
