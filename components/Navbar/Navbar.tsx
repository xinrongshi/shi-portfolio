import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { Logo } from "@components/Logo";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

    // 使用 useEffect 监听窗口大小变化
    useEffect(() => {
      const handleResize = () => {
        // 在这里可以根据窗口大小来决定是否显示按钮或导航栏
        const shouldShowNavbar = window.innerWidth >= 768; // 举例：大于等于 768px 显示导航栏
  
        // 根据 shouldShowNavbar 的值来更新 isOpen 状态
        setIsOpen(shouldShowNavbar);
      };
  
      // 初始化时调用一次，设置初始状态
      handleResize();
  
      // 添加窗口大小变化的事件监听
      window.addEventListener('resize', handleResize);
  
      // 清除事件监听器，防止内存泄漏
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); // 注意这里的依赖项数组是空的，表示只在组件挂载和卸载时执行

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
    <div className="fixed top-0 left-0 z-30 hidden h-full w-[130px] border-r border-slate-300 py-5 dark:border-slate-700 md:block ">
      <button onClick={toggleNavbar} className="md:hidden text-2xl p-4 focus:outline-none">
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      {isOpen && (
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
                className="mb-1 block"
              >
                <Icon className="h-6 w-6 my-1 transform text-slate-800 transition duration-300 ease-in-out hover:scale-125 hover:text-purple dark:text-slate-200" />
                <span className="sr-only">Connect with Xinrong on {title}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};