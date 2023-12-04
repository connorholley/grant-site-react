import { Outlet, Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { useState, useEffect } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Layout = () => {
  const navigation = [
    { name: "About", href: "/", section: "about" },
    { name: "Grants", href: "grants", section: "grants" },
    { name: "Cover Letter Tips", href: "coverLetter", section: "coverLetter" },
    { name: "Interview Tips", href: "interview", section: "interview" },

    {
      name: "Template Emails",
      href: "templateEmails",
      section: "templateEmails",
    },
    { name: "Contact", href: "contact", section: "contact" },
    { name: "Admin", href: "admin", section: "admin" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [selectedSection, setSelectedSection] = useState(
    localStorage.getItem("selectedSection") || "about"
  );

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  useEffect(() => {
    // Save the selected section to localStorage
    localStorage.setItem("selectedSection", selectedSection);
  }, [selectedSection]);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="bg-blue-500 font-sans">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <div class="flex items-center flex-col">
                <img
                  className="h-14  rounded-full border-orange-500 border-2"
                  src={require("../assets/logan.jpg")}
                  alt=""
                />
                <p class="text-center text-lg text-white">Grantable</p>
              </div>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.section}
                  to={item.href}
                  className={`text-sm font-semibold leading-6 text-gray-900 p-2 rounded-md  ${
                    selectedSection === item.section
                      ? "bg-orange-500"
                      : "bg-white"
                  }`}
                  onClick={() => handleSectionClick(item.section)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              {/* <a
                href="login"
                className="text-sm font-semibold leading-6 text-white"
                onClick={() => {
                  handleSectionClick("none");
                }}
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </a> */}
            </div>
          </nav>

          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-blue-500 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <div className="flex lg:flex-1">
                  <div class="flex items-center flex-col">
                    <img
                      className="h-14  rounded-full border-orange-500 border-2"
                      src={require("../assets/logan.jpg")}
                      alt=""
                    />
                    <p class="text-center text-lg text-white">Grantable</p>
                  </div>
                </div>
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
                    {navigation.map((item) => (
                      <Link
                        key={item.section}
                        to={item.href}
                        className={` -mx-3 block text-sm font-semibold leading-6 text-gray-900 p-2 rounded-md  ${
                          selectedSection === item.section
                            ? "bg-orange-500"
                            : "bg-white"
                        }`}
                        onClick={() => handleSectionClick(item.section)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
        <Outlet />
        <footer className="bg-blue-500 p-4 text-white relative bottom-0 w-full">
          <p>Grantable | Connor Holley | ENSH 401</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
