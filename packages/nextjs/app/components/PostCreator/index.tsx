"use client";

import { useState } from "react";
import { Button } from "~~/components/ui/button";
import { Input } from "~~/components/ui/input";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const PostCreator = () => {
  const [pitchVal, setPitchVal] = useState("");
  const [askAmount, setAskAmount] = useState(100);
  const [interestRate, setInterestRate] = useState(10);
  const [durationInDays, setDurationInDays] = useState(30);
  const [assetLink, setAssetLink] = useState("");

  const { writeContractAsync: publishProjectAsync } = useScaffoldWriteContract("CRYPTOFUND");

  return (
    <div className="bg-background-layer-10 w-full border border-border rounded-lg flex flex-col gap-2">
      <span className="font-semibold border-b border-b-border p-2 flex gap-2 items-center">
        <i className="fa-regular fa-pen-line"></i>List your Project
      </span>
      <textarea
        className="px-2 outline-none resize-none text-sm border-b border-b-border h-20"
        placeholder="Descrbe your Project"
        name="pitch"
        id=""
        value={pitchVal}
        onChange={evt => setPitchVal(evt.target.value)}
      ></textarea>
      <div className="flex flex-col gap-2 p-4 text-sm">
        <div>
          <label className="flex flex-row items-center gap-2">
            <span className="font-bold">Ask Amount (USD)</span>
            <Input
              type="number"
              className="flex-1 text-sm"
              onChange={evt => {
                setAskAmount(Number(evt.target.value));
              }}
              value={askAmount}
              name="askAmount"
              placeholder="Ask Amount (USD)"
            />
          </label>
        </div>
        <div>
          <label className="flex flex-row items-center gap-2">
            <span className="font-bold">Interest Rate</span>
            <Input
              type="number"
              className="flex-1"
              onChange={evt => {
                setInterestRate(Number(evt.target.value));
              }}
              value={interestRate}
              name="interestRate"
              placeholder="Interest Rate"
            />
          </label>
        </div>
        <div>
          <label className="flex flex-row items-center gap-2">
            <span className="font-bold">Payout Duration (days)</span>
            <Input
              type="number"
              className="flex-1"
              onChange={evt => {
                setDurationInDays(Number(evt.target.value));
              }}
              value={durationInDays}
              name="durationInDays"
              placeholder="Payout Duration (days)"
            />
          </label>
        </div>
        <div>
          <label className="flex flex-row items-center gap-2">
            <span className="font-bold">Asset Link</span>
            <Input
              type="string"
              className="flex-1"
              onChange={evt => {
                setAssetLink(evt.target.value);
              }}
              value={assetLink}
              name="assetLink"
              placeholder="Asset Link"
            />
          </label>
        </div>
      </div>

      <div className="p-2 border-t border-t-border w-full flex justify-end">
        <Button
          disabled={pitchVal === "" || askAmount === 0 || interestRate === 0 || durationInDays === 0}
          className="gap-2"
          onClick={async () => {
            try {
              await publishProjectAsync({
                functionName: "createProject",
                args: [
                  pitchVal,
                  BigInt(askAmount),
                  BigInt(interestRate),
                  [assetLink],
                  BigInt(durationInDays),
                  new Date().getTime().toString(),
                ],
                // value: parseEther("0.1"),
              });
            } catch (e) {
              console.error("Error publishing the project:", e);
            }
          }}
        >
          <i className="fa-solid fa-paper-plane-top"></i>
          Publish
        </Button>
      </div>
    </div>
  );
};

export default PostCreator;
