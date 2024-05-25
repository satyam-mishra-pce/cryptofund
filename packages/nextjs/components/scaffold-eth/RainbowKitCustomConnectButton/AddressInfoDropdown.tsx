import { useState } from "react";
import { Address } from "../Address";
import { BlockieAvatar } from "../BlockieAvatar";
import { NetworkOptions } from "./NetworkOptions";
import { QRCodeSVG } from "qrcode.react";
import { type Address as walletAddress } from "viem";
import { useDisconnect } from "wagmi";
import { Button, ButtonProps } from "~~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~~/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "~~/components/ui/dropdown-menu";
import { getTargetNetworks } from "~~/utils/scaffold-eth";

// import { Address } from "../Address";

const allowedNetworks = getTargetNetworks();

type AddressInfoDropdownProps = {
  address: walletAddress;
  blockExplorerAddressLink: string | undefined;
  displayName: React.ReactNode;
  ensAvatar?: string;
  safeNetworkShortName?: string | undefined;
} & ButtonProps;

export const AddressInfoDropdown = ({
  address,
  ensAvatar,
  displayName,
  blockExplorerAddressLink,
  ...props
}: AddressInfoDropdownProps) => {
  const { disconnect } = useDisconnect();

  const [addressCopied, setAddressCopied] = useState(false);
  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"tertiary"} size={"sm"} className="px-1" {...props}>
              <BlockieAvatar address={address} size={15} ensImage={ensAvatar} />
              <span className="ml-1">{displayName}</span>
              {/* <i className="fa-regular fa-chevron-down"></i> */}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() => {
                copy(address);
                setAddressCopied(true);
                setTimeout(() => setAddressCopied(false), 800);
              }}
              size="sm"
            >
              {addressCopied ? (
                <i className="w-4 fa-regular fa-check-circle"></i>
              ) : (
                <i className="w-4 fa-regular fa-copy"></i>
              )}
              <span className="whitespace-nowrap ml-2">{addressCopied ? "Copied" : "Copy Address"}</span>
            </DropdownMenuItem>
            <DialogTrigger asChild>
              <DropdownMenuItem size="sm">
                <i className="w-4 fa-regular fa-qrcode"></i>
                <span className="whitespace-nowrap ml-2">View QR Code</span>
              </DropdownMenuItem>
            </DialogTrigger>

            <DropdownMenuItem size="sm">
              <i className="w-4 fa-regular fa-arrow-up-right-from-square"></i>
              <a
                target="_blank"
                href={blockExplorerAddressLink}
                rel="noopener noreferrer"
                className="whitespace-nowrap ml-2"
              >
                View on Block Explorer
              </a>
            </DropdownMenuItem>

            {allowedNetworks.length > 1 && (
              <DropdownMenuSub>
                <DropdownMenuSubTrigger size="sm">
                  <i className="w-4 fa-regular fa-right-left"></i>
                  <span className="whitespace-nowrap ml-2">Switch Network</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <NetworkOptions />
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => disconnect()} variant="destructive" size="sm">
              <i className="w-4 fa-regular fa-xmark"></i>
              <span className="whitespace-nowrap ml-2">Disconnect</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>QR Code</DialogTitle>
            <DialogDescription>
              <div className="flex flex-col items-center gap-4 pt-10">
                <QRCodeSVG value={address} size={256} />
                <Address address={address} format="long" disableAddressLink />
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
