import React from "react";
import Hero from "./Hero";
import SidebarList from "./SidebarList";

const Sidebar = () => {
  return (
    <div className="bg-background-layer-10 border-r border-r-border w-60 flex flex-col overflow-hidden sticky top-0 h-screen">
      <Hero />
      <SidebarList />
    </div>
  );
};

export default Sidebar;
