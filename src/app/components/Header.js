import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <>
        <div>
            <nav className="relative flex w-full flex-nowrap items-center justify-between bg-neutral-100 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4" data-te-navbar-ref>
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                    <button className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden" type="button"
                        data-te-collapse-init
                        data-te-target="#navbarSupportedContent3"
                        aria-controls="navbarSupportedContent3"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    </button>
                    {/* <img src="" alt='profile'/> */}
                    <div className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto" id="navbarSupportedContent3" data-te-collapse-item>
                        <Image className="h-auto max-w-full" src="/icon.png" width={120} height={70} alt='logo' />
                        {/* <a className="pr-2 text-xl text-black dark:text-neutral-200" href="#">Navbar</a> */}
                        <ul className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
                            data-te-navbar-nav-ref>
                            <li className="my-4 lg:my-0 lg:pr-2" data-te-nav-item-ref>
                                <Link href="/" className="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400" aria-current="page"
                                    data-te-nav-link-re>Home</Link>
                            </li>
                            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                <Link href='/village'
                                    className="p-0 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                    data-te-nav-link-ref>Villages</Link>
                            </li>
                            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                <a className="p-0 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                    href="#"
                                    data-te-nav-link-ref>Pricing</a>
                            </li>
                            <li className="lg:pr-2" data-te-nav-link-ref>
                                <a className="text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <Image src="/BG.png"  className="h-auto max-w-full" height={1000} width={1370} alt='profile'/> */}
        </div>
       
        </>
    )
}

export default Header