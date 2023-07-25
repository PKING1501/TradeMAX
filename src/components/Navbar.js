import React from "react";

export default function Navbar(props) {
    return (
        <nav
            className="relative flex w-full flex-wrap items-center justify-between bg-[/FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4"
            data-te-navbar-ref>
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <div
                    className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
                    id="navbarSupportedContent4"
                    data-te-collapse-item>
                    <ul
                        className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 text-3xl lg:flex-row"
                        data-te-navbar-nav-ref>

                        <li
                            className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
                            data-te-nav-item-ref>
                            <a
                                className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                aria-current="page"
                                href="/"
                                data-te-nav-link-ref
                            >TradeMAX</a>
                        </li>
                    </ul>

                    <div className="flex items-center">
                        <button
                            type="button"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            className="mr-3 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-s font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_/3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}