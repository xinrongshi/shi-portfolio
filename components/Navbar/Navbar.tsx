import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { Logo } from "@components/Logo";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  // Use useEffect to listen for window size changes
  useEffect(() => {
    const handleResize = () => {
      // Determine whether to show the navbar based on window size here
      const shouldShowNavbar = window.innerWidth < 768; // Show navbar when less than 768px

      // Update isOpen state based on shouldShowNavbar value
      setIsOpen((prevOpen) => prevOpen && shouldShowNavbar);
    };

    // Call it once during initialization to set the initial state
    handleResize();

    // Add event listener for window size changes
    window.addEventListener("resize", handleResize);

    // Clean up the event listener to prevent memory leaks
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Note that the dependency array is empty, indicating it only runs on component mount and unmount

  const list = [
    {
      name: "Home",
      id: 1,
    },
    {
      name: "Education",
      id: 2,
    },
    {
      name: "Experience",
      id: 3,
    },
    {
      name: "Others",
      id: 4,
    },
  ];

  const links = [
    {
      href: "https://github.com/xinrongshi",
      Icon: AiFillGithub,
      title: "Github",
    },
    {
      href: "https://www.linkedin.com/in/xinrong-shi/",
      Icon: AiFillLinkedin,
      title: "Linkedin",
    },
    {
      href: "mailto:sxr1207@gmail.com",
      Icon: AiFillMail,
      title: "Email",
    },
  ];

  return (
    <nav className="fixed flex flex-col justify-end p-5 bottom-0 z-50 lg:z-0 ">
      <div className="fixed flex-col justify-end bottom-0 z-50 hidden lg:flex">
        <Logo className="fixed flex flex-col top-5 z-50" />
        <div className="fixed flex-col p-6 z-50">
          <div className="-ml-4 mb-32">
            {list.map(({ name, id }) => (
              <ul key={id} className="font-mono text-md">{name}</ul>
            ))}
          </div>
          <div>
            {links.map(({ href, Icon, title }) => (
              <a key={href} href={href} target="_blank" className="mb-1 block">
                <Icon className="h-8 w-8 my-2 p-0 transform text-slate-800 transition duration-300 ease-in-out hover:scale-125 hover:text-purple" />
                <span className="sr-only">Connect with Xinrong on {title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-75 backdrop-blur-md">
          <Logo className="fixed flex flex-col top-5 p-4 z-50" />
          <div className="fixed flex-col justify-center bottom-10 p-6 z-50">
            <div className="-ml-2 mb-32">
              {list.map(({ name, id }) => (
                <ul key={id} className="font-mono text-md">{name}</ul>
              ))}
            </div>
            <div>
              {links.map(({ href, Icon, title }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  className="mb-1 block"
                >
                  <Icon className="h-8 w-8 my-2 transform text-slate-800 transition duration-300 ease-in-out hover:scale-125 hover:text-purple" />
                  <span className="sr-only">
                    Connect with Xinrong on {title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
      <button
        onClick={toggleNavbar}
        className="z-50 md:z-5 max-w-max rounded-full drop-shadow-xl p-3 bottom-10 lg:hidden transition-transform transform hover:scale-110 active:scale-100"
      >
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
    </nav>
  );
};
