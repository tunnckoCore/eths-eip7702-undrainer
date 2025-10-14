import { eoaWalletClient, gaspayerWalletClient, publicClient } from "./config";
import { abi, contractAddress } from "./contract";

const RECIPIENT = process.env.RECIPIENT || gaspayerWalletClient.account.address;

const ETHSCRIPTIONS = (process.env.ETHSCRIPTIONS || "").split(",");

if (
	!ETHSCRIPTIONS ||
	!RECIPIENT ||
	!process.env.EOA_PRIVATE_KEY ||
	!process.env.GAS_PAYER_EXECUTOR
) {
	console.error("Env vars not set");
	process.exit(1);
}

// 1. Authorize designation of the Contract onto the EOA.
const authorization = await eoaWalletClient.signAuthorization({
	contractAddress,
});

// 2. Designate the Contract on the EOA, and invoke the
//    `initialize` function.
const hash = await gaspayerWalletClient.writeContract({
	abi,
	address: eoaWalletClient.account.address,
	// address: GAS_PAYER_EXECUTOR.address,
	authorizationList: [authorization],
	//                  ↑ 3. Pass the Authorization as a parameter.
	functionName: "escapeEthscriptions",
	args: [
		ETHSCRIPTIONS as `0x${string}`[],
		// Receiver of saved ethscriptions
		RECIPIENT as `0x${string}`,
	],
	value: 0n,
});

console.log("Transaction hash:", hash);

const result = await publicClient.waitForTransactionReceipt({ hash });

console.log("result >>>", result);
