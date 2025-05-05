import React from "react";

interface BackgroundProps {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
}

const Background: React.FC<BackgroundProps> = ({
  children,
  className = "",
  backgroundColor = "#e4646d",
}) => {
  return (
    <div className={`overflow-hidden relative`} style={{ backgroundColor }}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] bg-white/20 rounded-full blur-3xl opacity-60 transform rotate-12"></div>
        <div className="absolute -bottom-[40%] -left-[30%] w-[80%] h-[80%] bg-white/20 rounded-full blur-3xl opacity-40 transform -rotate-12"></div>
        <div className="absolute inset-0 bg-[url('https://arc.net/noise-light.png')] opacity-90"></div>
      </div>
      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  );
};

export default Background;
