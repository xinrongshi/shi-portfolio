import { useState, useEffect } from 'react';

export const Content = () => {
  const [hovered, setHovered] = useState(false);
  

  return (
    <div className="font-mono flex flex-col px-5 min-h-screen xl:pl-60 lg:pl-44 w-full ml-16">
      <div>
        <h3 className="text-xl pt-32">
          Developed by &nbsp;
          <u
            className={`underline-offset-8 decoration-wavy decoration-purple transition-all ${hovered ? 'text-blue' : 'text-stone-900'}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Xinrong Shi
          </u>
        </h3>
      </div>
      <div className="flex flex-row">
        <div className="flex-shrink-0">
          <h1 className="text-3xl pt-10 font-bold">
            Software Engineer,
            <br />
          </h1>
        </div>
        <div className="flex flex-row justify-center transition-transform transform-gpu hover:scale-125 hover:-rotate-12">
          <img
            src="/image.png"
            alt="Your Image"
            className="w-1/3 h-auto transition-all drop-shadow-xl opacity-80"
          />
        </div>
      </div>
      <div>
        {/* 在这里添加您的教育经历组件 */}
        <p>Education</p>
      </div>
    </div>
  );
};
