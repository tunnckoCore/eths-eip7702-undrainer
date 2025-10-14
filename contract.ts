export const contractAddress = "0xdbb21c21a873ffe51ec6354a2b909acbdb20f24f";
export const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "contentURI",
        type: "string",
      },
    ],
    name: "ethscriptions_protocol_CreateEthscription",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "contentURI",
        type: "string",
      },
    ],
    name: "ethscriptions_protocol_CreateEthscriptionFrom",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "ethscriptionId",
        type: "bytes32",
      },
    ],
    name: "ethscriptions_protocol_TransferEthscription",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "ethscriptionId",
        type: "bytes32",
      },
    ],
    name: "ethscriptions_protocol_TransferEthscriptionForPreviousOwner",
    type: "event",
  },
  {
    inputs: [
      { internalType: "string", name: "dataURI", type: "string" },
      { internalType: "address", name: "initialOwner", type: "address" },
    ],
    name: "createEthscription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "dataURI", type: "string" },
      { internalType: "address", name: "initialOwner", type: "address" },
    ],
    name: "createEthscriptionFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32[]", name: "ids", type: "bytes32[]" },
      { internalType: "address", name: "newOwner", type: "address" },
    ],
    name: "escapeEthscriptions",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "bytes32", name: "ethscriptionId", type: "bytes32" },
    ],
    name: "transferEthscription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "previousOwner", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "bytes32", name: "ethscriptionId", type: "bytes32" },
    ],
    name: "transferEthscriptionForPreviousOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
