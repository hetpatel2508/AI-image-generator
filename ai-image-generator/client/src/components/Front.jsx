import React, { useRef, useEffect } from "react";
import { SlMagicWand } from "react-icons/sl";
import { gsap } from 'gsap'
const Front = ({
  title = "Best text to image generator",
  subtitle = "Turn text to image, in seconds",
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const tl = gsap.timeline();

    tl.to(text.children[0], {
      duration: 1.5,
      y: -10,
      ease: "elastic",
      stagger: 0.2,
    });

    tl.to(text.children[1].children[0], {
      duration: 0.5,
      opacity: 1,
      stagger: 0.2,
    });

    tl.to(text.children[1].children[1], {
      duration: 0.5,
      opacity: 1,
      stagger: 0.2,
    });
  }, []);

  return (
    <div className=" bg-blue-500 text-white h-full w-full flex justify-center">
      <div className="w-full h-full flex flex-col items-center ">
        <p className="text-s mt-[90px]  h-[30px] flex items-center justify-center rounded-full border-2 border-black p-2">
          {title} <SlMagicWand fill="yellow" />
        </p>
        <div className='text-6xl font-bold flex flex-col items-center justify-center w-full mt-[50px] gap-5 ' style={{ wordSpacing: '5px' }} ref={textRef}>
          <div >
            Turn text to
          </div>
          <div className='mt-2'>
            <span className='text-blue-600  opacity-0'>&nbsp;image</span>
            <span className='opacity-0'>,in seconds</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Front;