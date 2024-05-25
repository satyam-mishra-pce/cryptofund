import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-32 border-b border-b-border px-4 py-1 flex items-end relative overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 opacity-40"
        style={{
          background: `url("/assets/Halo1.png")`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-85 bg-violet-500/85 blur-xl"></div>
      <img src="/block-assist-mono.svg" className="absolute top-5 right-5 h-8" />
      <div>
        <h1 className="text-xl font-bold scale-100">CryptoFund</h1>
        <h2 className="text-sm text-muted-foreground scale-100">Powered by MANTA</h2>
      </div>
    </div>
  );
};

export default Hero;
