import { createPublicClient, createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { mainnet } from "viem/chains";

export const EOA_ACCOUNT = privateKeyToAccount(
  process.env.EOA_PRIVATE_KEY as `0x${string}`
);

export const GAS_PAYER_EXECUTOR = privateKeyToAccount(
  process.env.GAS_PAYER_EXECUTOR as `0x${string}`
);

export const gaspayerWalletClient = createWalletClient({
  account: GAS_PAYER_EXECUTOR,
  chain: mainnet,
  transport: http(),
});

export const eoaWalletClient = createWalletClient({
  account: EOA_ACCOUNT,
  chain: mainnet,
  transport: http(),
});

export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});
