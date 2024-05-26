"use client";

import PostItem from "../components/Post/PostItem";
import { useAccount } from "wagmi";
import useProject from "~~/hooks/contract-interactions/useProjectByIdx";
import useUserProjects from "~~/hooks/contract-interactions/useUserProjects";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const ProjectLoader = ({ idx }: { idx: number }) => {
  const project = useProject(idx);
  return (
    <>
      {project && (
        <PostItem
          {...{
            projectIdx: Number(project.metadata.idx),
            address: project.metadata.createdBy.userAddress,
            accountName: project.metadata.createdBy.name,
            pitch: project.metadata.pitch,
            assetLink: project.metadata.assetLinks[0],
            likes: Number(project.data.likeCount),
            proposals: Number(project.data.proposalCount),
            askAmount: Number(project.metadata.askAmount),
            totalRemaining: Number(project.metadata.askAmount) - Number(project.data.totalFunded),
            interestRate: Number(project.metadata.interestRate),
          }}
          key={Number(project.metadata.idx)}
        />
      )}
    </>
  );
};

const page = ({}) => {
  // const { address } = useAccount();
  const myProjectsIdxs = useUserProjects("0x60b979De2c961Ac884E6a5D921cDbfA0f454EAA4");

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-full max-w-[800px] gap-4">
        {myProjectsIdxs?.map(projectIdx => {
          return <ProjectLoader idx={Number(projectIdx)} />;
        })}
      </div>
    </div>
  );
};

export default page;
