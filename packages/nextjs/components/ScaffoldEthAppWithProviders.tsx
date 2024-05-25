"use client";

import { useEffect, useState } from "react";
import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { WagmiProvider } from "wagmi";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { ProgressBar } from "~~/components/scaffold-eth/ProgressBar";
import useTheme, { ThemeProvider } from "~~/contexts/ThemeContext";
import { useNativeCurrencyPrice } from "~~/hooks/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  const price = useNativeCurrencyPrice();
  const setNativeCurrencyPrice = useGlobalState(state => state.setNativeCurrencyPrice);

  useEffect(() => {
    if (price > 0) {
      setNativeCurrencyPrice(price);
    }
  }, [setNativeCurrencyPrice, price]);

  return <>{children}</>;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const Web3Providers = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <html suppressHydrationWarning className={isDarkMode ? "dark" : ""}>
      <body>
        <WagmiProvider config={wagmiConfig}>
          <QueryClientProvider client={queryClient}>
            <ProgressBar />
            <RainbowKitProvider
              avatar={BlockieAvatar}
              theme={mounted ? (isDarkMode ? darkTheme() : lightTheme()) : lightTheme()}
            >
              <ScaffoldEthApp>{children}</ScaffoldEthApp>
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
};

export const ScaffoldEthAppWithProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <Web3Providers>{children}</Web3Providers>
    </ThemeProvider>
  );
};
