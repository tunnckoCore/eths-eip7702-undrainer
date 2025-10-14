## Ethscriptions Undrainer & EIP-7702 Wallet

To save struck Ethscriptions in a wallet that has attached drainer, you should

1. Make sure to have https://bun.com installed
2. Then populate env variables in `.env`

```.env
EOA_PRIVATE_KEY=0x_private_key
GAS_PAYER_EXECUTOR=0x_private_key
RECIPIENT=0x_address
ETHSCRIPTIONS=0xTransactionHash1,0xTransactionHash2,0xTransactionHash3
```

then run the script and wait until it finishes

```
bun run ./cli.ts

# or

bunx
```

### How it works.

Using EIP-7702, new type of Ethereum transaction, we can "install" contract on EOA wallets, meaning that for the time of one transaction, we can execute any arbitrary code on the EOA wallet as if that address was a contract. This allows us to bypass the limitations of EOA wallets and execute complex operations that would otherwise be impossible - like batching, sponsored transactions, and on-chain signing with Passkeys and more.

The `EOA_PRIVATE_KEY` should be the private key of the EOA wallet that has the attached drainer (eg. someone is draining it immediately when it receives funds). We use the private key to sign a EIP-7702 Authorization, that then we pass to the `GAS_PAYER_EXECUTOR` to execute the transaction on behalf of the EOA wallet.

The `GAS_PAYER_EXECUTOR` then sends transaction to the EOA address with the EIP-7702 Authorization, and with a method call as if the EOA is a contract. The method call `escapeEthscriptions` is a function that when executed it would move out the given `ETHSCRIPTIONS` to the `RECIPIENT` address.

---

Overall, it's a pretty neat trick. We can use the same exact contract as just a regular "Ethscriptions Creator" - eg. sending transactions to `createEthscription` method ethscribing the data to the caller. On the Ethscriptions Indexer, the contract `0xdbb21...20f24f` would be assigned "creator" and the caller would be assigned "initial_owner".

We can also the contract as "Ethscriptions Wallet", meaning that when you have it attached, you're EOA wallet becomes contract.
