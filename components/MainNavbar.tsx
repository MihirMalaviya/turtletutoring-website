import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Image from "next/image";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const DropdownItem: React.FC<{
  options: { name: string; href: string; outbound?: boolean };
}> = ({ options }) => {
  return (
    <Link href={options.href} passHref={true}>
      <Menu.Item>
        {({ active }: any) => (
          <button
            className={`${
              active
                ? "bg-green-400 text-white font-bold"
                : "text-stone-900 font-medium"
            } group flex rounded-sm items-center w-full px-2 py-2 text-sm ease-in-out duration-100`}
          >
            {options.name}
            {options.outbound && (
              <>
                <span className="ml-auto" />
                <ArrowOutwardIcon
                  className={`${
                    active ? "text-green-100" : "text-stone-500"
                  }`}
                  // style={{ width: "1rem", height: "1rem" }}
                />
              </>
            )}
          </button>
        )}
      </Menu.Item>
    </Link>
  );
};

const Dropdown: React.FC<{
  name: string;
  options: { name: string; href: string; outbound?: boolean }[];
}> = ({ name, options }) => {
  const items = options.map((option, index) => (
    <DropdownItem options={option} key={index} />
  ));

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="schib inline-flex justify-center w-32 px-4 py-2 mx-1 text-sm font-medium text-black bg-white/[.66] rounded-sm hover:bg-orange-500/[.95] hover:!text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition-all duration-100 ease-in-out">
          {name}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-3 origin-top-right bg-white divide-y divide-stone-100 rounded shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="px-1 py-1">{items}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

const MainNavbar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar
        collapseOnSelect
        bg="light"
        variant="light"
        id="navbar"
        expand="lg"
        expanded={expanded}
        sticky="top"
      >
        <Container>
          <Link href="/" passHref={true}>
            <Navbar.Brand className="d-flex flex-row schib font-extrabold !drop-shadow-[0_0_8px_rgba(255,255,255,1)]">
              <Image
                src="/logotransparentblack.png"
                className="mx-3 !drop-shadow-[0_0_8px_rgba(255,255,255,1)]"
                width="32"
                height="32"
                alt="TurtleTutoring logo"
              />
              TurtleTutoring
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded((expanded) => !expanded)}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Dropdown
                  name="Courses"
                  options={[
                    {
                      name: "Upcoming",
                      href: "/learn/courses",
                    },
                    {
                      name: "Discord",
                      href: "https://discord.gg/srbw7UZ44G",
                      outbound: true,
                    },
                  ]}
                />
              </Nav.Link>
              <Nav.Link>
                <Dropdown
                  name="About"
                  options={[
                    {
                      name: "Team",
                      href: "/about/meet-the-team",
                    },
                    {
                      name: "Our Partners",
                      href: "/about/partners",
                    },
                  ]}
                />
              </Nav.Link>
              <Nav.Link>
                <Dropdown
                  name="Blog"
                  options={[
                    {
                      name: "Latest",
                      href: "/blogs/latest",
                    },
                  ]}
                />
              </Nav.Link>
              <Nav.Link>
                <Dropdown
                  name="Join Us"
                  options={[
                    {
                      name: "Volunteer",
                      href: "/join/volunteer",
                    },
                    {
                      name: "Discord",
                      href: "https://discord.gg/srbw7UZ44G",
                      outbound: true,
                    },
                  ]}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavbar;
