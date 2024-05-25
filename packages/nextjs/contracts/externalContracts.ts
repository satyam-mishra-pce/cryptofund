import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */
const externalContracts = {
  3441006: {
    DEBTOR: {
      address: "0x60b979De2c961Ac884E6a5D921cDbfA0f454EAA4",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "projectId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "bidder",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "BidPlaced",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "projectId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "bidder",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "Payout",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "projectId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amountNeeded",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "totalInterest",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "payoutTime",
              type: "uint256",
            },
          ],
          name: "ProjectListed",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_amountNeeded",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_totalInterest",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_payoutTime",
              type: "uint256",
            },
          ],
          name: "listProject",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_projectId",
              type: "uint256",
            },
          ],
          name: "payout",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_projectId",
              type: "uint256",
            },
          ],
          name: "placeBid",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "projectBids",
          outputs: [
            {
              internalType: "address payable",
              name: "bidder",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "isPaid",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "projectCounter",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "projects",
          outputs: [
            {
              internalType: "address payable",
              name: "owner",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amountNeeded",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "totalInterest",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "payoutTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountCollected",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "isFunded",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
  },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
