import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/spotlight-new";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/magic-button";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        {/* <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        /> */}
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-black-100 absolute top-0 left-0">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:100px_100px]",
            "[background-image:linear-gradient(to_right,#d4d4d8_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d8_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#161A31_1px,transparent_1px),linear-gradient(to_bottom,#161A31_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Fullstack Developer
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Crafting Code with Purpose, Design with Logic"
          />
          <p className="text-center md:tracking-wider my-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Vour a Fullstack Developer based in Indonesia
          </p>
          <a href="#about">
            <MagicButton title={"Show My Work"} icon={<FaLocationArrow />} position="right" otherClasses=""/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
