import { Button } from "~~/components/ui/button";

const PostCreator = ({}) => {
  return (
    <div className="bg-background-layer-10 w-full border border-border rounded-lg flex flex-col gap-2">
      <span className="font-semibold border-b border-b-border p-2 flex gap-2 items-center">
        <i className="fa-regular fa-pen-line"></i>List your Project
      </span>
      <textarea
        className="px-2 outline-none resize-none text-sm"
        placeholder="Descrbe your Project"
        name=""
        id=""
      ></textarea>
      <div className="p-2 border-t border-t-border w-full flex justify-end">
        <Button disabled className="gap-2">
          <i className="fa-solid fa-paper-plane-top"></i>
          Publish
        </Button>
      </div>
    </div>
  );
};

export default PostCreator;
