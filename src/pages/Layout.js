import { Outlet, Link } from "react-router-dom";

import { useState, useEffect } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Layout = () => {
  const navigation = [
    { name: "About", href: "/", section: "about" },
    { name: "Grants", href: "grants", section: "grants" },
    { name: "Supplementary", href: "supplementary", section: "supplementary" },
    {
      name: "Template Emails",
      href: "templateEmails",
      section: "templateEmails",
    },
    { name: "Contact", href: "contact", section: "contact" },
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
      <header className="bg-blue-500">
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
                    ? "bg-orange-500   "
                    : "bg-white"
                }`}
                onClick={() => handleSectionClick(item.section)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
      </header>
      <Outlet />
      <footer className="bg-blue-500 p-4 text-white">
        <p>Grantable | Connor Holley | ENSH 401</p>
      </footer>
    </>
  );
};

export default Layout;
