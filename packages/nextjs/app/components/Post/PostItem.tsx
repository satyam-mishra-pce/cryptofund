"use client";

import Link from "next/link";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { Button } from "~~/components/ui/button";

interface PostItemProps {
  address: string;
  accountName: string;
  dateTime: string;
  pitch: string;
  assetLink: string;
  likes: number;
  proposals: number;
  askAmount: number;
  totalRemaining: number;
  interestRate: number;
}

const PostItem = ({
  address,
}: // accountName,
// dateTime,
// pitch,
// assetLink,
// likes,
// proposals,
// askAmount,
// totalRemaining,
// interestRate,
PostItemProps) => {
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
          <span className="font-semibold">Account Name</span>
          <span className="text-muted-foreground text-xs">25 March 2024, 12:08 PM</span>
        </div>
      </div>
      <div className="w-full flex flex-row flex-1">
        <div className="border-r border-r-border flex flex-col">
          <div className="flex-1 border-b border-b-border p-2 flex flex-col justify-between gap-8">
            <span className="font-medium">
              Lorem ipsum dolor sat amet lorem ipsum dolor sat amet lorem ipsum dolor sat amet lorem ipsum dolor sat
              amet lorem ipsum dolor sat amet lorem ipsum dolor sat amet lorem ipsum dolor sat amet lorem ipsum dolor
              sat amet lorem ipsum dolor sat amet lorem.
            </span>
            <Link
              href=""
              className="border border-border rounded-lg w-[100px] h-[120px] p-2 flex flex-col justify-between"
            >
              <div className="w-full aspect-square bg-indigo-100 flex items-center justify-center rounded-md">
                <i className=" fa-regular fa-file-invoice text-4xl text-indigo-500"></i>
              </div>
              <span className="truncate">Document 1234</span>
            </Link>
          </div>
          <div className="px-4 py-2 flex flex-row gap-12">
            <button className="hover:text-indigo-300">
              <i className="fa-regular fa-heart mr-2 text-lg"></i>
              <span>20</span>
            </button>
            <button className="hover:text-indigo-300">
              <i className="fa-regular fa-wallet mr-2 text-lg"></i>
              <span>30</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col p-2 w-1/3 shrink-0">
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex flex-col">
              <span className="text-sm font-bold">Total Ask</span>
              <span className="text-2xl font-bold text-indigo-600">$25,000.00</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold">Total Remaining</span>
              <span className="text-2xl font-bold text-indigo-600">$20,000.00</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row w-[165px] px-1 justify-between items-center">
              <div className="flex flex-col ">
                <span className="text-sm font-bold leading-none">Interest Rate</span>
                <span className="text-muted-foreground text-xs leading-none">per 30 day</span>
              </div>
              <div>
                <span className="font-bold text-lg">8.5%</span>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div className="px-2 flex-1 flex flex-row border border-border rounded-lg focus-within:border-indigo-300">
                <input
                  size={10}
                  className="h-[30px] rounded-md bg-transparent focus:outline-none"
                  placeholder="0"
                  type="text"
                  name=""
                  id=""
                />
                <button className="text-indigo-500 font-bold leading-loose">MANTA</button>
              </div>
              <Button className="rounded-lg bg-indigo-100 p-2 shrink-0 text-sm text-indigo-500 font-bold  ">
                Place Bid
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
