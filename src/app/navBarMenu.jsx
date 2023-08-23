/* eslint-disable @next/next/no-img-element */
'use client'
import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { scroller, Link as LinkScroller } from "react-scroll";
import ImageManagerHome from "@/components/ImageManagerHome";
import classNames from "classnames";
import globalFuntions from "@/components/functions/globalFunctions";
import { useRouter } from "next/navigation";

import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  PaperAirplaneIcon,
  HeartIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PlayCircleIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";

const globalFunctions = new globalFuntions();

const products = [
  {
    name: "Seguro Viagem",
    description: "Contratação 100% Online",
    href: "/primetravel",
    icon: PaperAirplaneIcon,
  },
  {
    name: "Seguro Residencial",
    description: "Planos de Proteção Para a Sua Residencia.",
    href: "/seguro-residencial-porto-2",
    icon: HomeIcon,
  },
  {
    name: "Seguro Pet",
    description: "Planos de Proteção Seu Pet.",
    href: "/seguro-pet-porto",
    icon: HomeIcon,
  },
  {
    name: "Odonto",
    description: "Planos de Proteção Odonto.",
    href: "/sulamerica-odonto",
    icon: HomeIcon,
  },
  {
    name: "Vida",
    description: "Planos de Proteção Para Sua Vida",
    href: "/seguro-de-vida",
    icon: HeartIcon,
  },
  {
    name: "Celular",
    description: "Planos de Proteção Para o Seu Celular",
    href: "/equipamentos-portateis-3",
    icon: DevicePhoneMobileIcon,
  },
];
const callsToAction = [
  { name: "Conheça a Prime", href: "/sobre", icon: PlayCircleIcon },
  { name: "Fale Conosco", href: "/contato", icon: PhoneIcon },
];

const menu = [
  {
    name: "Sobre a Prime",
    href: "/sobre",
  },
  {
    name: "Contato",
    href: "/contato",
  },
];

function NavBarMenu() {
  const router = useRouter();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMenuFixed, setIsMenuFixed] = useState(false);
  const [pageSlug, setPageSlug] = useState('');
  const [productName, setProductName] = useState('');
  const [productList, setProductList] = useState(products);
  
  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const handleNavigation = (path) => {
    router.push(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 200;

      if (scrollPosition > scrollThreshold && !isMenuFixed) {
        setIsMenuFixed(true);
      } else if (scrollPosition <= scrollThreshold && isMenuFixed) {
        setIsMenuFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuFixed]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const slug = globalFunctions.getPageSlug();
      const name = globalFunctions.getPageName(slug);
      const filteredProducts = products.filter((product) => product.name !== name);

      setPageSlug(slug);
      setProductName(name);
      setProductList(filteredProducts);

      console.log(slug);
      console.log(name);
      console.log(filteredProducts);
    }
  }, []);

  const [linkClicked, setLinkClicked] = useState(false);

  return (
    <header
      className={`bg-white font-montserrat z-1 ${
        isMenuFixed
          ? "fixed top-0 w-full z-50 transition-all duration-300 fade-in-out"
          : ""
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Prime Secure</span>
            <img
              className="h-5 w-auto"
              src={ImageManagerHome.brand.LogoPrimeSecure}
              alt="Logo Prime Secure"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir Menu Principal</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button
              id="option-produtos"
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
            >
              Produtos
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {productList.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-bluePrime"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        {item.href.startsWith("http") ? (
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.name}
                          </a>
                        ) : (
                          <a
                            to={item.href}
                            className="block font-semibold text-gray-900"
                            onClick={() => {
                              setLinkClicked(!linkClicked);
                              setMobileMenuOpen(false);
                              if (!item.href.startsWith("/")) {
                                window.scrollTo(0, 0); // Scroll to top
                              }
                              // Close the Popover
                              if (document.getElementById("option-produtos")) {
                                document
                                  .getElementById("option-produtos")
                                  .click();
                              }
                            }}
                          >
                            {item.name}
                          </a>
                        )}
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      to={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {menu.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                item.href.startsWith("/")
                  ? handleNavigation(item.href)
                  : scrollToSection(item.href);
                window.scrollTo(0, 0); // Rola para o topo da página
              }}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </Popover.Group>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button>
            <a
              to="/login"
              onClick={(event) => {
                event.preventDefault();
                handleNavigation("/login");
                setMobileMenuOpen(false);
              }}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Login <span aria-hidden="true">&rarr;</span>
            </a>
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#Home" className="-m-1.5 p-1.5">
              <span className="sr-only">Prime Secure</span>
              <img
                className="h-8 w-auto"
                src={ImageManagerHome.brand.logoPrimeSecure}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Seguros
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...productList, ...callsToAction].map((item) =>
                          item.href.startsWith("/") ? (
                            <a
                              to={item.href}
                              key={item.name}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </a>
                          ) : (
                            <LinkScroller
                              key={item.name}
                              to={item.href.substring(1)}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              onClick={() => {
                                scrollToSection(item.href);
                                setMobileMenuOpen(false);
                              }}
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                            >
                              {item.name}
                            </LinkScroller>
                          )
                        )}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                {menu.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                      setMobileMenuOpen(false);
                    }}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <button>
                  <a
                    to="/login"
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavigation("/login");
                      setMobileMenuOpen(false);
                    }}
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Login <span aria-hidden="true">&rarr;</span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default NavBarMenu;