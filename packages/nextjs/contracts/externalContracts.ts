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
    CRYPTOFUND: {
      address: "0xC0F012f7d60098D14bFC6A84D130c42a0975f40D",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "addressToProjectIdx",
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
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "addressToUser",
          outputs: [
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "address",
              name: "userAddress",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "projectIdx",
              type: "uint256",
            },
          ],
          name: "claimFunds",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "pitch",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "askAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "interestRate",
              type: "uint256",
            },
            {
              internalType: "string[]",
              name: "assetLinks",
              type: "string[]",
            },
            {
              internalType: "uint256",
              name: "durationInDays",
              type: "uint256",
            },
          ],
          name: "createProject",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "projectIdx",
              type: "uint256",
            },
          ],
          name: "createProposal",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "projectIdx",
              type: "uint256",
            },
          ],
          name: "getProject",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "string",
                          name: "name",
                          type: "string",
                        },
                        {
                          internalType: "address",
                          name: "userAddress",
                          type: "address",
                        },
                      ],
                      internalType: "struct CryptoFund.User",
                      name: "createdBy",
                      type: "tuple",
                    },
                    {
                      internalType: "string",
                      name: "pitch",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "askAmount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "interestRate",
                      type: "uint256",
                    },
                    {
                      internalType: "string[]",
                      name: "assetLinks",
                      type: "string[]",
                    },
                    {
                      internalType: "uint256",
                      name: "durationInDays",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct CryptoFund.ProjectMetadata",
                  name: "metadata",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "likeCount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "proposalCount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "totalFunded",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct CryptoFund.ProjectData",
                  name: "data",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "isAskFulfilled",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "isProjectCompleted",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "isAcceptingProposals",
                      type: "bool",
                    },
                    {
                      internalType: "uint256",
                      name: "suppliedBackAmount",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct CryptoFund.ProjectStatus",
                  name: "status",
                  type: "tuple",
                },
                {
                  internalType: "address[]",
                  name: "proposers",
                  type: "address[]",
                },
              ],
              internalType: "struct CryptoFund.Project",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getProjectFeed",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "string",
                          name: "name",
                          type: "string",
                        },
                        {
                          internalType: "address",
                          name: "userAddress",
                          type: "address",
                        },
                      ],
                      internalType: "struct CryptoFund.User",
                      name: "createdBy",
                      type: "tuple",
                    },
                    {
                      internalType: "string",
                      name: "pitch",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "askAmount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "interestRate",
                      type: "uint256",
                    },
                    {
                      internalType: "string[]",
                      name: "assetLinks",
                      type: "string[]",
                    },
                    {
                      internalType: "uint256",
                      name: "durationInDays",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct CryptoFund.ProjectMetadata",
                  name: "metadata",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "likeCount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "proposalCount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "totalFunded",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct CryptoFund.ProjectData",
                  name: "data",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "isAskFulfilled",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "isProjectCompleted",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "isAcceptingProposals",
                      type: "bool",
                    },
                    {
                      internalType: "uint256",
                      name: "suppliedBackAmount",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct CryptoFund.ProjectStatus",
                  name: "status",
                  type: "tuple",
                },
                {
                  internalType: "address[]",
                  name: "proposers",
                  type: "address[]",
                },
              ],
              internalType: "struct CryptoFund.Project[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "userAddress",
              type: "address",
            },
          ],
          name: "getUserData",
          outputs: [
            {
              components: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "userAddress",
                  type: "address",
                },
              ],
              internalType: "struct CryptoFund.User",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "userAddress",
              type: "address",
            },
          ],
          name: "getUserProjects",
          outputs: [
            {
              internalType: "uint256[]",
              name: "",
              type: "uint256[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "userAddress",
              type: "address",
            },
          ],
          name: "getUserProposals",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "address",
                      name: "userAddress",
                      type: "address",
                    },
                  ],
                  internalType: "struct CryptoFund.User",
                  name: "proposer",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "projectIdx",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountProposed",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "isSuppliedBack",
                  type: "bool",
                },
                {
                  internalType: "uint256",
                  name: "amountSupplied",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "bonusSupplied",
                  type: "uint256",
                },
              ],
              internalType: "struct CryptoFund.Proposal[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "projectCount",
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
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "projectToProposal",
          outputs: [
            {
              components: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "userAddress",
                  type: "address",
                },
              ],
              internalType: "struct CryptoFund.User",
              name: "proposer",
              type: "tuple",
            },
            {
              internalType: "uint256",
              name: "projectIdx",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountProposed",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "isSuppliedBack",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "amountSupplied",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "bonusSupplied",
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
              name: "projectIdx",
              type: "uint256",
            },
          ],
          name: "supplyFundsBack",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
          ],
          name: "updateUser",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "userToProposals",
          outputs: [
            {
              components: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "userAddress",
                  type: "address",
                },
              ],
              internalType: "struct CryptoFund.User",
              name: "proposer",
              type: "tuple",
            },
            {
              internalType: "uint256",
              name: "projectIdx",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountProposed",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "isSuppliedBack",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "amountSupplied",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "bonusSupplied",
              type: "uint256",
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
