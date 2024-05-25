import React from "react";

type SidebarItem = {
  children: React.ReactNode;
  isActive?: boolean;
};

const SidebarItem = ({ children, isActive }: SidebarItem) => {
  return (
    <button
      className={`w-full text-left rounded-md font-medium px-2 py-1 flex gap-2 items-center  ${
        isActive ? "text-indigo-500 bg-indigo-100 font-semibold" : "hover:bg-foreground/10 active:bg-foreground/15"
      }`}
    >
      {children}
    </button>
  );
};

export default SidebarItem;
