import { useAccount } from "wagmi";
import { useSwitchChain } from "wagmi";
import { DropdownMenuItem } from "~~/components/ui/dropdown-menu";
import useTheme from "~~/contexts/ThemeContext";
import { getNetworkColor } from "~~/hooks/scaffold-eth";
import { getTargetNetworks } from "~~/utils/scaffold-eth";

const allowedNetworks = getTargetNetworks();

export const NetworkOptions = () => {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";
  const { switchChain } = useSwitchChain();
  const { chain } = useAccount();

  return (
    <>
      {allowedNetworks
        .filter(allowedNetwork => allowedNetwork.id !== chain?.id)
        .map(allowedNetwork => (
          <DropdownMenuItem
            key={allowedNetwork.id}
            onClick={() => {
              switchChain?.({ chainId: allowedNetwork.id });
            }}
            size="sm"
          >
            <span className="ml-2">
              Switch to{" "}
              <span
                style={{
                  color: getNetworkColor(allowedNetwork, isDarkMode),
                }}
              >
                {allowedNetwork.name}
              </span>
            </span>
          </DropdownMenuItem>
        ))}
    </>
  );
};
