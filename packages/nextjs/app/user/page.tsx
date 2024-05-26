"use client";

import React, { useState } from "react";
import { useAccount, useWalletClient } from "wagmi";
import { Button } from "~~/components/ui/button";
import useUserData from "~~/hooks/contract-interactions/useUserData";
import { getTargetNetworks } from "~~/utils/scaffold-eth";

const page = () => {
  const [name, setName] = useState("");
  const { address, chainId } = useAccount();
  const allowedNetworks = getTargetNetworks();
  const isNetworkAllowed = (chainId: number | undefined) => {
    if (!chainId) return false;
    for (let i = 0; i < allowedNetworks.length; i++) {
      if (allowedNetworks[i].id === chainId) return true;
    }
    return false;
  };
  const userData = useUserData(address, chainId);

  return (
    <div>
      {address && chainId && isNetworkAllowed(chainId) ? (
        <>
          {Number(userData?.userAddress) === 0 ? "" : userData?.name}
          <img src="" alt="Error" />
          <input type="text" value={"Type your display name here."} />
          <span>Public Address</span>

          <div>
            Bio
            <input type="text" placeholder="Enter your bio" />
            <Button onClick={() => {}}>Save</Button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default page;
