import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

import { Logo } from "@components/Logo";

export const SideBar = () => {
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
    <div className="fixed top-0 left-0 z-30 hidden h-full w-[150px] border-r border-slate-300 py-5 dark:border-slate-700 md:block ">
      <div className="flex h-full flex-col items-center justify-between">
        <Logo />
        <div className="w-64 -rotate-90 transform text-center">
          <p className="uppercase text-xl font-meidum font-mono mb-1 hover:scale-125 hover: text-icon duration-500 hover:text-icon">
            Software Engineer
          </p>
        </div>

        <div>
          {links.map(({ href, Icon, title }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              className="mb-5 block dark:hover:text-rose-500"
            >
              <Icon className="h-8 w-8 my-4 transform text-slate-800 transition duration-300 ease-in-out hover:scale-125 hover:text-purple dark:text-slate-200 dark:hover:text-rose-500" />
              <span className="sr-only">Connect with Xinrong on {title}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
