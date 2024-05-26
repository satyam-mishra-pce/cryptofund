"use client";

import { useState } from "react";
import { Button } from "~~/components/ui/button";
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
        className="px-2 outline-none resize-none text-sm"
        placeholder="Descrbe your Project"
        name="pitch"
        id=""
        value={pitchVal}
        onChange={evt => setPitchVal(evt.target.value)}
      ></textarea>
      <div className="flex p-4">
        <input
          type="number"
          onChange={evt => {
            setAskAmount(Number(evt.target.value));
          }}
          value={askAmount}
          name="askAmount"
          placeholder="Ask Amount (USD)"
        />
        <input
          type="number"
          onChange={evt => {
            setInterestRate(Number(evt.target.value));
          }}
          value={interestRate}
          name="interesetRate"
          placeholder="Interest Rate"
        />
        <input
          type="number"
          onChange={evt => {
            setDurationInDays(Number(evt.target.value));
          }}
          value={durationInDays}
          name="durationInDays"
          placeholder="Duration in Days"
        />
        <input
          type="text"
          onChange={evt => {
            setAssetLink(evt.target.value);
          }}
          value={assetLink}
          name="assetLink"
          placeholder="Asset Link"
        />
      </div>

      <div className="p-2 border-t border-t-border w-full flex justify-end">
        <Button
          disabled={pitchVal === "" || askAmount === 0 || interestRate === 0 || durationInDays === 0}
          className="gap-2"
          onClick={async () => {
            try {
              await publishProjectAsync({
                functionName: "createProject",
                args: [pitchVal, BigInt(askAmount), BigInt(interestRate), [assetLink], BigInt(durationInDays)],
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
