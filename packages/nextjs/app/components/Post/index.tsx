import PostCreator from "../PostCreator";

const PostItemsList = ({}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-full max-w-[800px] gap-4">
        <PostCreator />
        {/* <PostItem /> */}
      </div>
    </div>
  );
};
export default PostItemsList;
