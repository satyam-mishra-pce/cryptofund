import React from "react";
import Hero from "./Hero";
import SidebarList from "./SidebarList";

const Sidebar = () => {
  return (
    <div className="bg-background-layer-10 border border-border rounded-md w-60 flex flex-col overflow-hidden">
      <Hero />
      <SidebarList />
    </div>
  );
};

export default Sidebar;
