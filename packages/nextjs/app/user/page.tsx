"use client";

import React from "react";
import { useAccount } from "wagmi";
import { Button } from "~~/components/ui/button";
import useUserData from "~~/hooks/contract-interactions/useUserData";
import { getTargetNetworks } from "~~/utils/scaffold-eth";

const page = () => {
  const { address, chainId } = useAccount();
  const allowedNetworks = getTargetNetworks();
  const isNetworkAllowed = (chainId: number | undefined) => {
    if (!chainId) return false;
    for (let i = 0; i < allowedNetworks.length; i++) {
      if (allowedNetworks[i].id === chainId) return true;
    }
    return false;
  };

  const userData = useUserData(address);
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      {address && chainId && isNetworkAllowed(chainId) ? (
        <div className="flex flex-col w-2/3 gap-4">
          <div className="flex flex-row gap-2">
            <img
              className="rounded-full w-24 h-24"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi3YHpBO6H4AAzdPVkor5syi5Tl8eUgkAcUA8akut98g&s"
              alt="Error"
            />
            <div className="flex flex-col">
              <div className="flex items-center px-4">
                <div className="font-semibold text-4xl outline-none bg-transparent h-14 flex gap-4 p-1">
                  <span contentEditable>{Number(userData?.userAddress) === 0 ? "" : userData?.name}</span>
                  <button className=" text-lg text-muted-foreground hover:text-foreground self-center">
                    <i className="fa-solid fa-pencil"></i>
                  </button>
                </div>
              </div>
              <div className="flex justify-between px-4 items-center h-4 gap-2">
                <span className="text-muted-foreground text-sm">0x83338c511E6A998d8fA4ed9bb92994Bfd1dC8709</span>
                <Button size={"sm"}>
                  <i className="fa-regular fa-copy"></i>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start w-full gap-2">
            {/* <span className="font-semibold text-lg border-b border-b-border">Bio</span> */}
            <textarea
              className="p-2 rounded-lg resize-none text-lg border border-b-border "
              rows={4}
              placeholder="Enter your bio"
            />
            <div className="flex w-full justify-end">
              <Button>Save</Button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default page;
