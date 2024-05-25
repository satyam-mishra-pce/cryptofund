import { NetworkOptions } from "./NetworkOptions";
import { useDisconnect } from "wagmi";
import { Button } from "~~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~~/components/ui/dropdown-menu";

export const WrongNetworkDropdown = () => {
  const { disconnect } = useDisconnect();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"destructiveTertiary"} size={"sm"} className="rounded-full px-2">
          <i className="fa-regular fa-circle-exclamation"></i>
          <span className="ml-1 mr-1">Wrong Network</span>
          <i className="fa-regular fa-chevron-down text-2xs"></i>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <NetworkOptions />
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => disconnect()} variant="destructive">
          <i className="w-4 fa-regular fa-xmark"></i>
          <span className="whitespace-nowrap ml-2">Disconnect</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    // <div className="dropdown dropdown-end mr-2">
    //   <label tabIndex={0} className="btn btn-error btn-sm dropdown-toggle gap-1">
    //     <span>Wrong network</span>
    //     <ChevronDownIcon className="h-6 w-4 ml-2 sm:ml-0" />
    //   </label>
    //   <ul
    //     tabIndex={0}
    //     className="dropdown-content menu p-2 mt-1 shadow-center shadow-accent bg-base-200 rounded-box gap-1"
    //   >
    //     <NetworkOptions />
    //     <li>
    //       <button
    //         className="menu-item text-error btn-sm !rounded-xl flex gap-3 py-3"
    //         type="button"
    //         onClick={() => disconnect()}
    //       >
    //         <ArrowLeftOnRectangleIcon className="h-6 w-4 ml-2 sm:ml-0" />
    //         <span>Disconnect</span>
    //       </button>
    //     </li>
    //   </ul>
    // </div>
  );
};
