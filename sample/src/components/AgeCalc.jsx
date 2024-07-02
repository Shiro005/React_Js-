import React, { useState } from 'react'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'

const menuItems = [

]

export function AgeCalc() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const [startDate, setStartDate] = useState('')

    const calculate_age = () => {

    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <div className="relative w-full">
            <nav className="z-50">
                <div className="w-full bg-white">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                        <div className="inline-flex items-center space-x-2">
                            <span>
                                <img src="https://cdn-icons-png.flaticon.com/128/15686/15686981.png" height="35px" width="35px" alt="" />
                            </span>
                            <span className="font-bold text-2xl">Age Calculator</span>
                        </div>
                        <div className="hidden lg:block">
                            <ul className="ml-12 inline-flex space-x-8">
                                {menuItems.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                                        >
                                            {item.name}
                                            <span>
                                                <ChevronDown className="ml-2 h-4 w-4" />
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="ml-2 mt-2 hidden lg:block">
                            <span className="relative inline-block">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src="https://cdn-icons-png.flaticon.com/128/15686/15686981.png"
                                    alt="Dan_Abromov"
                                />
                                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-600 ring-2 ring-white"></span>
                            </span>
                        </div>
                        <div className="ml-2 lg:hidden">
                            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                        </div>
                        {isMenuOpen && (
                            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                                <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="px-5 pb-6 pt-5">
                                        <div className="flex items-center justify-between">
                                            <div className="inline-flex items-center space-x-2">
                                                <span>
                                                    <img
                                                        className="h-10 w-10 rounded-full"
                                                        src="https://cdn-icons-png.flaticon.com/128/15474/15474869.png"
                                                        alt="Dan_Abromov"
                                                    />
                                                </span>
                                                <span className="font-bold">Age Calculator</span>
                                            </div>
                                            <div className="-mr-2">
                                                <button
                                                    type="button"
                                                    onClick={toggleMenu}
                                                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                                >
                                                    <span className="sr-only">Close menu</span>
                                                    <X className="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <nav className="grid gap-y-4">
                                                {menuItems.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                                                    >
                                                        <span className="ml-3 text-base font-medium text-gray-900">
                                                            {item.name}
                                                        </span>
                                                        <span>
                                                            <ChevronRight className="ml-3 h-4 w-4" />
                                                        </span>
                                                    </a>
                                                ))}
                                            </nav>
                                        </div>
                                        <div className="ml-3 mt-4 flex items-center space-x-2">
                                            <img
                                                className="inline-block h-10 w-10 rounded-full"
                                                src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                                                alt="Dan_Abromov"
                                            />
                                            <span className="flex flex-col">
                                                <span className="text-sm font-medium text-gray-900">Shriyash Rulhe</span>
                                                <span className="text-sm font-medium text-gray-500">@Shiro005</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            <div className="relative isolate z-0 bg-white px-6 pt-14 lg:px-8">
                <div className="relative mx-auto max-w-2xl py-24">
                    <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
                        <svg
                            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                            viewBox="0 0 1155 678"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                                fillOpacity=".3"
                                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                            />
                            <defs>
                                <linearGradient
                                    id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                                    x1="1155.49"
                                    x2="-78.208"
                                    y1=".177"
                                    y2="474.645"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9089FC" />
                                    <stop offset={1} stopColor="#FF80B5" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            The Age Calculator
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            The Age Calculator can determine the age or interval between two dates. The calculated age will be displayed in years, months, weeks, days, hours, minutes, and seconds.
                        </p>

                        <div className="mt-10 flex items-center justify-center gap-x-2">
                            <input
                                type="date"
                                className='px-4 py-3 rounded font-semibold'
                                onChange={e => setStartDate(e.target.value)}
                            />
                        </div>

                        <div className="mt-10 flex items-center justify-center gap-x-2">
                            <button
                                type="button"
                                onClick={calculate_age}
                                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Calculate
                            </button>
                            <button
                                type="button"
                                className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Get Started
                            </button>
                        </div>
                        <p className="mt-6 text-lg leading-8 text-gray-800 font-semibold">
                            Your Current age is
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}
