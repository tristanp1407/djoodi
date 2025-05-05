import React from "react";
import { HERO_SUBTITLE, HERO_TITLE } from "../utils/constants";

const Hero: React.FC = () => {
  const words = HERO_TITLE.split(" ");

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] bg-accent/20 rounded-full blur-3xl opacity-60 transform rotate-12 bg-noise"></div>
        <div className="absolute -bottom-[40%] -left-[30%] w-[80%] h-[80%] bg-primary/20 rounded-full blur-3xl opacity-40 transform -rotate-12 bg-noise"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-10 leading-[1.4] text-white">
            {words.map((word, index) => (
              <React.Fragment key={index}>
                {[0, 1, 4, 5].includes(index) ? (
                  <span
                    className={`text-secondary ${
                      index === 4 ? "font-thin" : ""
                    }`}
                  >
                    {word}
                  </span>
                ) : (
                  <span className={index === 2 ? "font-thin" : ""}>{word}</span>
                )}
                {index === 1 ? <br /> : index < words.length - 1 && " "}
              </React.Fragment>
            ))}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-[450px] mx-auto">
            {HERO_SUBTITLE}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
