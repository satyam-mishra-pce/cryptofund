"use client";

import PostCreator from "../PostCreator";
import PostItem from "./PostItem";
import { useAccount } from "wagmi";
import useUserFeed from "~~/hooks/contract-interactions/useUserFeed";
import { getTargetNetworks } from "~~/utils/scaffold-eth";

const PostItemsList = ({}) => {
  const postItems = useUserFeed();
  const { chainId } = useAccount();
  const allowedNetworks = getTargetNetworks();
  const isNetworkAllowed = (chainId: number | undefined) => {
    if (!chainId) return false;
    for (let i = 0; i < allowedNetworks.length; i++) {
      if (allowedNetworks[i].id === chainId) return true;
    }
    return false;
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-full max-w-[800px] gap-4">
        {isNetworkAllowed(chainId) && <PostCreator />}
        {postItems?.map(postItem => {
          return (
            <PostItem
              {...{
                address: postItem.metadata.createdBy.userAddress,
                accountName: postItem.metadata.createdBy.name,
                pitch: postItem.metadata.pitch,
                assetLink: postItem.metadata.assetLinks[0],
                likes: Number(postItem.data.likeCount),
                proposals: Number(postItem.data.proposalCount),
                askAmount: Number(postItem.metadata.askAmount),
                totalRemaining: Number(postItem.metadata.askAmount) - Number(postItem.data.totalFunded),
                interestRate: Number(postItem.metadata.interestRate),
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default PostItemsList;
