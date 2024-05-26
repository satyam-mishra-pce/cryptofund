"use client";

import { useState } from "react";
import Link from "next/link";
import { parseEther } from "viem";
import { useAccount } from "wagmi";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { Button } from "~~/components/ui/button";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

interface PostItemProps {
  projectIdx: number;
  address: string;
  accountName: string;
  pitch: string;
  assetLink: string;
  likes: number;
  proposals: number;
  askAmount: number;
  totalRemaining: number;
  interestRate: number;
}

const PostItem = ({
  projectIdx,
  address,
  accountName,
  pitch,
  assetLink,
  likes,
  proposals,
  askAmount,
  totalRemaining,
  interestRate,
}: PostItemProps) => {
  const { address: myAddress } = useAccount();
  const [proposalAmount, setProposalAmount] = useState(0);
  const { writeContractAsync: proposeProjectAsync } = useScaffoldWriteContract("CRYPTOFUND");
  return (
    <div className="bg-background-layer-10 w-full min-h-[300px] border border-border rounded-lg flex flex-col">
      <div className="border-b border-b-border flex flex-row p-3 gap-4 items-center">
        <BlockieAvatar address={address} size={30} />
        {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi3YHpBO6H4AAzdPVkor5syi5Tl8eUgkAcUA8akut98g&s"
          alt="profilepic"
          className="rounded-full h-8"
        /> */}

        <div className="flex flex-col">
          <span className="font-semibold">{accountName}</span>
          <span className="text-muted-foreground text-xs">{address}</span>
        </div>
      </div>
      <div className="w-full flex flex-row flex-1">
        <div className="border-r border-r-border flex flex-col flex-1">
          <div className="flex-1 border-b border-b-border p-2 flex flex-col justify-between gap-8">
            <span className="font-medium">{pitch}</span>
            <Link
              href={assetLink}
              className="border border-border rounded-lg w-[100px] h-[120px] p-2 flex flex-col justify-between"
            >
              <div className="w-full aspect-square bg-indigo-100 flex items-center justify-center rounded-md">
                <i className=" fa-regular fa-file-invoice text-4xl text-indigo-500"></i>
              </div>
              <span className="truncate">Document</span>
            </Link>
          </div>
          <div className="px-4 py-2 flex flex-row gap-12">
            <button className="hover:text-indigo-300">
              <i className="fa-regular fa-heart mr-2 text-lg"></i>
              <span>{likes}</span>
            </button>
            <button className="hover:text-indigo-300">
              <i className="fa-regular fa-wallet mr-2 text-lg"></i>
              <span>{proposals}</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col p-2 w-[280px] shrink-0">
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex flex-col">
              <span className="text-sm font-bold">Total Ask</span>
              <span className="text-2xl font-bold text-indigo-600">${askAmount}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold">Total Remaining</span>
              <span className="text-2xl font-bold text-indigo-600">${totalRemaining}</span>
            </div>
          </div>
          {true && (
            <div className="flex flex-col gap-2">
              <div className="flex flex-row w-[165px] px-1 justify-between items-center">
                <div className="flex flex-col ">
                  <span className="text-sm font-bold leading-none">Interest Rate</span>
                  <span className="text-muted-foreground text-xs leading-none">per 30 day</span>
                </div>
                <div>
                  <span className="font-bold text-lg">{interestRate}%</span>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div className="px-2 flex-1 flex flex-row border border-border rounded-lg focus-within:border-indigo-300">
                  <input
                    size={10}
                    className="h-[30px] rounded-md bg-transparent focus:outline-none"
                    type="text"
                    value={proposalAmount}
                    placeholder="Amount"
                    onChange={evt => setProposalAmount(Number(evt.target.value))}
                  />
                  <button className="text-indigo-500 font-bold leading-loose">MANTA</button>
                </div>
                <Button
                  className="rounded-lg bg-indigo-100 p-2 shrink-0 text-sm text-indigo-500 font-bold "
                  onClick={async () => {
                    try {
                      await proposeProjectAsync({
                        functionName: "createProposal",
                        args: [BigInt(projectIdx)],
                        value: parseEther(proposalAmount.toString()),
                      });
                    } catch (e) {
                      console.error("Error proposing the project:", e);
                    }
                  }}
                >
                  Propose
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostItem;
