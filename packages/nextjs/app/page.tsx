"use client";

import Link from "next/link";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <div className="flex flex-1 w-full flex-row gap-2">
      <Sidebar />
      <main className="flex-1">
        <Header />
      </main>
    </div>
  );
};

export default Home;
