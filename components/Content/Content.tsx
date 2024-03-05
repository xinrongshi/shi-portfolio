import React, { useState } from "react";
import Image from "next/image";

export const Content = () => {
  const [isTextHovered, setIsTextHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // 处理点击 box 外部的事件
  const handleOutsideClick = (event) => {
    if (isExpanded && !event.target.closest('.expanded-box')) {
      setIsExpanded(false);
    }
  };

  return (
    <div className="font-mono flex flex-col px-5 min-h-screen xl:pl-60 lg:pl-44 w-full ml-16">
      <div className=" w-1/2 h-auto">
        <h3 className="text-xl pt-32">
          Developed by &nbsp;
          <u
            className={`${
              isTextHovered ? "text-blue font-bold text-2xl" : "text-stone-900 "
            }
            underline-offset-8 decoration-wavy decoration-purple transition-all`}
            onMouseEnter={() => setIsTextHovered(true)}
            onMouseLeave={() => setIsTextHovered(false)}
          >
            Xinrong Shi
          </u>
        </h3>
      </div>
      <div className="flex flex-row ">
        <div className="flex-shrink-0  w-1/2 h-auto">
          <h1 className="text-3xl pt-10 font-bold">
            Software Engineer,
            <br />
          </h1>
        </div>
        <div
          className={`flex flex-row justify-start hover-effect ${
            isImageHovered ? "scale-110 -rotate-12" : ""
          }`}
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          <img
            src="/image.png"
            alt="Your Image"
            className="w-2/5 h-auto transition-all drop-shadow-xl opacity-80"
          />
        </div>
      </div>
      <div className="flex flex-row mt-6 mb-6 ">
        <p className="text-2xl pt-10">Education</p>
      </div>
      <div className="flex h-96 ml-2 mr-20 flex-nowrap overflow-x-auto">
        <div className="relative w-72 h-72 my-10 mx-12 border-2 border-purple rounded-2xl flex-none">
          {/* Box 内容 */}
          <div className="w-full h-full p-4">
            {/* ... your content here ... */}
          </div>
          <div className="absolute bottom-0 right-0 h-10 w-10 ">
            <Image src="/expand.svg" alt="Expand Icon" width="24" height="24" />
          </div>
        </div>

        <div className="w-72 h-72 my-10 mx-12  border-2  border-purple rounded-2xl flex-none"></div>

      </div>

      <div className="flex flex-row mb-6">
        <p className="text-2xl pt-10">Experience</p>
      </div>
      <div className="flex flex-row mt-6 mb-6">
        <p className="text-2xl pt-10">Others</p>
      </div>
    </div>
  );
};

export default Content;
