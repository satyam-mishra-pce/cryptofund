"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SettingsDialog from "../../common/SettingsDialog";
import SidebarItem from "./SidebarItem";

const SidebarList = () => {
  const router = usePathname();
  const tabIndex: { [key: string]: number } = {
    "/home": 1,
    "/": 1,
    "/myprojects": 2,
    "/myproposals": 3,
  };
  console.log(router);
  const activeTab = tabIndex[router];
  console.log("ActiveTab:", activeTab);
  return (
    <section className="px-2 flex flex-1 flex-col justify-between py-2">
      <ul className="flex-1">
        <li>
          <Link href="/home">
            <SidebarItem isActive={router === "/home" || router === "/"}>
              <i className={`fa-regular fa-house w-4 ${activeTab === 1 ? "fa-solid" : ""} `}></i>
              Home
            </SidebarItem>
          </Link>
        </li>
        <li>
          <Link href="/myprojects">
            <SidebarItem isActive={router === "/myprojects"}>
              <i className={`fa-regular fa-folder w-4 ${activeTab === 2 ? "fa-solid" : ""}`}></i>
              My Projects
            </SidebarItem>
          </Link>
        </li>
        <li>
          <Link href="/myproposals">
            <SidebarItem isActive={router === "/myproposals"}>
              <i className={`fa-regular fa-dollar-sign w-4 ${activeTab === 3 ? "fa-solid" : ""}`}></i>
              My Proposals
            </SidebarItem>
          </Link>
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
