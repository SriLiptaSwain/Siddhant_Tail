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
import { Dialog, Listbox, Menu, Transition } from '@headlessui/react';
import {
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ClockIcon,
  CogIcon,
  CursorClickIcon,
  FolderIcon,
  GiftIcon,
  HomeIcon,
  MenuAlt2Icon,
  QuestionMarkCircleIcon,
  XIcon,
} from '@heroicons/react/outline';
import { Fragment, useState } from 'react';

const people = [
  { id: 1, name: 'Hotel Berlin' },
  { id: 2, name: 'Hotel London' },
  { id: 3, name: 'Hotel Munich' },
  { id: 4, name: 'Hotel Vienna' },
  // { id: 5, name: 'Tanya Fox' },
  // { id: 6, name: 'Hellen Schmidt' },
  // { id: 7, name: 'Caroline Schultz' },
  // { id: 8, name: 'Mason Heaney' },
  // { id: 9, name: 'Claudie Smitham' },
  // { id: 10, name: 'Emil Schaefer' },
];

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
  { name: 'Your Profile', href: '/underConst' },
  { name: 'Settings', href: '/underConst' },
  { name: 'Sign out', href: '/underConst' },
];

const stats = [
  {
    id: 1,
    stat: 'Properties',
    icon: HomeIcon,
    desc: 'Create new properties & Update the information of existing properties',
    d: 'View properties',
  },
  {
    id: 2,
    stat: 'Reservations',
    icon: CalendarIcon,
    desc: 'Create a new booking across properties',
    d: 'Create new booking',
  },
  {
    id: 3,
    stat: 'Product insights',
    icon: CursorClickIcon,
    desc: 'Find out about all the enhancements we have added in recent releases, see what we are working on right now and take a look at the exciting new features we are planning. You can even vote on them!',
    d: 'Go to product insights',
  },

  {
    id: 4,
    stat: 'Account settings',
    icon: CogIcon,
    desc: 'Update descriptive and address information for the account & Manage languages, set default and mandatory languages for using workflow',
    d: 'Manage settings',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selected, setSelected] = useState(people[3]);

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
            <div className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex shrink-0 items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                  alt="Workflow"
                />
              </div>
              <div className="mt-5 h-0 flex-1 overflow-y-auto">
                <nav className="space-y-1 px-2">
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
        <div className="flex w-64 flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex h-0 flex-1 flex-col  bg-gray-800 p-2">
            <div className="h-18 flex shrink-0 items-center bg-gray-800 px-4 pt-8">
              <img
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              />
            </div>
            <div className="flex h-16 shrink-0 items-center bg-gray-800 px-7">
              <label
                htmlFor="context"
                className="font-2xl block text-sm text-gray-600"
              >
                Context
              </label>
            </div>
            <div className="space-y-1 bg-gray-800 px-2 ">
              <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                  <>
                    <div>
                      <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-gray-900 py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-300 sm:text-sm">
                        <span className="block truncate text-white">
                          {selected.name}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options
                          static
                          className="absolute z-10 mt-1 max-h-60 w-60 overflow-auto rounded-md bg-gray-300 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        >
                          {people.map((person) => (
                            <Listbox.Option
                              key={person.id}
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? 'text-white bg-indigo-300'
                                    : 'text-gray-900',
                                  'cursor-default select-none relative py-2 pl-8 pr-4'
                                )
                              }
                              value={person}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={classNames(
                                      selected
                                        ? 'font-semibold'
                                        : 'font-normal',
                                      'block truncate'
                                    )}
                                  >
                                    {person.name}
                                  </span>

                                  {selected ? (
                                    <span
                                      className={classNames(
                                        active
                                          ? 'text-white'
                                          : 'text-indigo-600',
                                        'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                      )}
                                    >
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto">
              <nav className="flex-1 space-y-1 bg-gray-800 px-2 py-4">
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
      <div className="flex w-0 flex-1 flex-col overflow-hidden">
        <div className="relative z-10 flex h-16 shrink-0 bg-white shadow">
          <button
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex flex-1 justify-between px-4">
            <div className="flex flex-1">
              <form className="flex w-full md:ml-0" action="#" method="GET">
                <div className="relative w-full text-gray-800">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                    SiddCodes
                  </div>
                </div>
              </form>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              {/* <button className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button> */}
              <Menu as="div" className="relative  text-left">
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className="inline-flex  bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50  focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        English
                        <ChevronDownIcon
                          className="-mr-1 ml-2 h-5 w-5"
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
                        className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                className={classNames(
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                English
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                className={classNames(
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Spanish
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                className={classNames(
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Portugese
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>{' '}
              <Menu as="div" className="relative ml-3">
                {({ open }) => (
                  <>
                    <div className="p-1">
                      <Menu.Button className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none ">
                        <span className="sr-only">View notifications</span>
                        <QuestionMarkCircleIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    {/* <Transition
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
                        className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        {userNav.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition> */}
                  </>
                )}
              </Menu>
              <Menu as="div" className="relative ml-3">
                {({ open }) => (
                  <>
                    <div className="p-1">
                      <Menu.Button className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none ">
                        <span className="sr-only">View notifications</span>
                        <GiftIcon className="h-6 w-6" aria-hidden="true" />
                      </Menu.Button>
                    </div>
                    {/* <Transition
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
                        className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        {userNav.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition> */}
                  </>
                )}
              </Menu>
              <Menu as="div" className="relative ml-3">
                {({ open }) => (
                  <>
                    <div className="p-1">
                      <Menu.Button className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none ">
                        <span className="sr-only">View notifications</span>
                        <ClockIcon className="h-6 w-6" aria-hidden="true" />
                      </Menu.Button>
                    </div>
                    {/* <Transition
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
                        className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        {userNav.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition> */}
                  </>
                )}
              </Menu>
              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
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
                        className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                Create new Property
              </h1>
              <div className="p-3">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-3 py-2 text-sm font-medium leading-4 text-black shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <QuestionMarkCircleIcon
                    className="-ml-0.5 mr-2 h-4 w-4"
                    aria-hidden="true"
                  />
                  Help
                </button>
              </div>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              {/* Replace with your content */}
              {
                // property
                <div
                  className="mx-auto flex px-4"
                  style={{ flexDirection: 'column' }}
                >
                  <div>
                    <div className="ml-10 pt-8">
                      <div>
                        <div>
                          <h3 className="text-lg font-medium leading-6 text-gray-900">
                            General
                          </h3>
                        </div>
                        <div className="py-4">
                          <div className="width flex justify-between">
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
                          <div className="mt-1" style={{ width: '180px' }}>
                            <input
                              required
                              type="text"
                              name="propertyCode"
                              id="propertyCode"
                              className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder=""
                              aria-describedby="propertyCode-mandatory"
                            />
                          </div>
                        </div>
                        <div className="py-2">
                          <div>
                            <dl className=" grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                              <div
                                className="card -space-y-px rounded-md p-2 shadow-sm"
                                style={{ backgroundColor: 'white' }}
                              >
                                <h6
                                  className="p-2"
                                  style={{ textAlign: 'center' }}
                                >
                                  English
                                </h6>
                                <fieldset>
                                  <div>
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
                                        className="h-10 w-full rounded-md border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Name"
                                      />
                                    </div>
                                  </div>
                                </fieldset>
                                <fieldset className="mt-3 pt-4">
                                  <div>
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
                                        className="h-40 w-full rounded-md border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Description"
                                      />
                                    </div>
                                  </div>
                                </fieldset>
                              </div>

                              <div
                                className="mx-2 -space-y-px rounded-md p-2 shadow-sm"
                                style={{ backgroundColor: 'white' }}
                              >
                                <h6
                                  className="p-2"
                                  style={{ textAlign: 'center' }}
                                >
                                  German
                                </h6>
                                <fieldset>
                                  <div>
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
                                        className="h-10 w-full rounded-md border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Name"
                                      />
                                    </div>
                                  </div>
                                </fieldset>
                                <fieldset className="mt-3 pt-4">
                                  <div>
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
                                        className="h-40 w-full rounded-md border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Description"
                                      />
                                    </div>
                                  </div>
                                </fieldset>
                              </div>

                              <div
                                className="mx-2 -space-y-px rounded-md p-2 shadow-sm"
                                style={{ backgroundColor: 'white' }}
                              >
                                <h6
                                  className="p-2"
                                  style={{ textAlign: 'center' }}
                                >
                                  Italian
                                </h6>
                                <fieldset>
                                  <div>
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
                                        className="h-10 w-full rounded-md border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Name"
                                      />
                                    </div>
                                  </div>
                                </fieldset>
                                <fieldset className="mt-3 pt-4">
                                  <div>
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
                                        className="h-40 w-full rounded-md border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          Location
                        </h3>
                        {/* <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p> */}
                      </div>
                      <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
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
                              className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                              className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                              className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                              className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                              className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                              className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                              className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                              className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                              type="time"
                              name="checkin"
                              id="checkin"
                              className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                              type="time"
                              name="checkout"
                              id="checkout"
                              autoComplete="check-out"
                              className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="mt-10 pt-8">
                          <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                              Company Details
                            </h3>
                            {/* <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p> */}
                          </div>
                          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
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
                                  className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                                  className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                                  className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                                  className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                                  className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                                  className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                                  className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="py-2 pt-6">
                            <div>
                              <dl className=" grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                <div
                                  className="card -space-y-px rounded-md p-2 shadow-sm"
                                  style={{ backgroundColor: 'white' }}
                                >
                                  <h6
                                    className="p-2"
                                    style={{ textAlign: 'center' }}
                                  >
                                    English
                                  </h6>

                                  <fieldset className="mt-3 pt-4">
                                    <div>
                                      <div>
                                        <label
                                          htmlFor="card-number"
                                          className="sr-only"
                                        >
                                          Payment terms
                                        </label>
                                        <textarea
                                          name="Description"
                                          id="Description"
                                          rows={4}
                                          className="h-40 w-full rounded-md border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                          placeholder="Payment terms"
                                        />
                                      </div>
                                    </div>
                                  </fieldset>
                                </div>

                                <div
                                  className="mx-2 -space-y-px rounded-md p-2 shadow-sm"
                                  style={{ backgroundColor: 'white' }}
                                >
                                  <h6
                                    className="p-2"
                                    style={{ textAlign: 'center' }}
                                  >
                                    German
                                  </h6>

                                  <fieldset className="mt-3 pt-4">
                                    <div>
                                      <div>
                                        <label
                                          htmlFor="card-number"
                                          className="sr-only"
                                        >
                                          Payment terms
                                        </label>
                                        <textarea
                                          name="Description"
                                          id="Description"
                                          rows={4}
                                          className="h-40 w-full rounded-md border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                          placeholder="Payment terms"
                                        />
                                      </div>
                                    </div>
                                  </fieldset>
                                </div>

                                <div
                                  className="mx-2 -space-y-px rounded-md p-2 shadow-sm"
                                  style={{ backgroundColor: 'white' }}
                                >
                                  <h6
                                    className="p-2"
                                    style={{ textAlign: 'center' }}
                                  >
                                    Italian
                                  </h6>

                                  <fieldset className="mt-3 pt-4">
                                    <div>
                                      <div>
                                        <label
                                          htmlFor="card-number"
                                          className="sr-only"
                                        >
                                          Payment terms
                                        </label>
                                        <textarea
                                          name="Description"
                                          id="Description"
                                          rows={4}
                                          className="h-40 w-full rounded-md border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                          placeholder="Payment terms"
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
                          className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
