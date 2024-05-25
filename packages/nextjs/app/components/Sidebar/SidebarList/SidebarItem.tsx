import React from "react";

type SidebarItem = {
  children: React.ReactNode;
};

const SidebarItem = ({ children }: SidebarItem) => {
  return (
    <button className="w-full hover:bg-foreground/10 active:bg-foreground/15 text-left rounded-md px-2 py-1">
      {children}
    </button>
  );
};

export default SidebarItem;
