import React from "react";
import { SettingsDialog } from "../../common/SettingsDialog";
import SidebarItem from "./SidebarItem";

const SidebarList = () => {
  return (
    <section className="px-2 flex flex-1 flex-col justify-between py-2">
      <ul className="flex-1">
        <li>
          <SidebarItem>New Chat</SidebarItem>
        </li>
        <li>
          <SidebarItem>New Chat</SidebarItem>
        </li>
        <li>
          <SidebarItem>New Chat</SidebarItem>
        </li>
        <li>
          <SidebarItem>New Chat</SidebarItem>
        </li>
      </ul>
      <hr className="my-2" />

      <ul>
        <li>
          <SidebarItem>Contacts</SidebarItem>
        </li>
        <SettingsDialog
          trigger={
            <li>
              <SidebarItem>Settings</SidebarItem>
            </li>
          }
        />
        <li>
          <SidebarItem>About</SidebarItem>
        </li>
      </ul>
    </section>
  );
};

export default SidebarList;
