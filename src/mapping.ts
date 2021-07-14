import { BigInt } from "@graphprotocol/graph-ts"
import {
  MoonWilly,
  Approval,
  OwnershipTransferred,
  ProcessedDividendTracker,
  SetAutomatedMarketMakerPair,
  SwapAndLiquify,
  Transfer
} from "../generated/MoonWilly/MoonWilly"
// import { ExampleEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  // let entity = ExampleEntity.load(event.transaction.from.toHex())
  //
  // // Entities only exist after they have been saved to the store;
  // // `null` checks allow to create entities on demand
  // if (entity == null) {
  //   entity = new ExampleEntity(event.transaction.from.toHex())
  //
  //   // Entity fields can be set using simple assignments
  //   entity.count = BigInt.fromI32(0)
  // }
  //
  // // BigInt and BigDecimal math are supported
  // entity.count = entity.count + BigInt.fromI32(1)
  //
  // // Entity fields can be set based on event parameters
  // entity.owner = event.params.owner
  // entity.spender = event.params.spender
  //
  // // Entities can be written to the store with `.save()`
  // entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.DAIRewardFee(...)
  // - contract.DAIToken(...)
  // - contract.airdrop(...)
  // - contract.allowance(...)
  // - contract.antiDumpBurn(...)
  // - contract.antiDumpFee(...)
  // - contract.antiDumpLiquidity(...)
  // - contract.antiDumpMarket(...)
  // - contract.approve(...)
  // - contract.automatedMarketMakerPairs(...)
  // - contract.balanceOf(...)
  // - contract.burnFee(...)
  // - contract.burnWallet(...)
  // - contract.decimals(...)
  // - contract.decreaseAllowance(...)
  // - contract.dividendTracker(...)
  // - contract.gasForProcessing(...)
  // - contract.increaseAllowance(...)
  // - contract.liquidityFee(...)
  // - contract.liquidityWallet(...)
  // - contract.marketing(...)
  // - contract.marketingFee(...)
  // - contract.maxSellTransactionAmount(...)
  // - contract.name(...)
  // - contract.owner(...)
  // - contract.standardFee(...)
  // - contract.swapTokensAtAmount(...)
  // - contract.symbol(...)
  // - contract.teamwallet(...)
  // - contract.totalSupply(...)
  // - contract.tradingEnabledTimestamp(...)
  // - contract.transfer(...)
  // - contract.transferFrom(...)
  // - contract.treasury(...)
  // - contract.uniswapV2Pair(...)
  // - contract.uniswapV2Router(...)
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleProcessedDividendTracker(
  event: ProcessedDividendTracker
): void {}

export function handleSetAutomatedMarketMakerPair(
  event: SetAutomatedMarketMakerPair
): void {}

export function handleSwapAndLiquify(event: SwapAndLiquify): void {}

export function handleTransfer(event: Transfer): void {}
