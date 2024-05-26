import React from "react";
import { Button } from "~~/components/ui/button";

const page = () => {
  return (
    <div>
      <img src="" alt="Error" />
      <input type="text" value={"Username"} />
      <span>Public Address</span>

      <div>
        Bio
        <input type="text" placeholder="Enter your bio" />
        <Button>Save</Button>
      </div>
    </div>
  );
};

export default page;
