import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import {
    TokenDividendTracker,
    Approval,
    Claim,
    ClaimWaitUpdated,
    DividendWithdrawn,
    DividendsDistributed,
    ExcludeFromDividends,
    OwnershipTransferred,
    Transfer
} from "../generated/TokenDividendTracker/TokenDividendTracker"
import {Reward, RewardSummery, User} from "../generated/schema"
import {loadRewardSummery, loadUser} from "./helpers";

export function handleApproval(event: Approval): void {
    // Entities can be loaded from the store using a string ID; this ID
    // needs to be unique across all entities of the same type
    // let entity = ExampleEntity.load(event.transaction.from.toHex())
    //
    // // Entities only exist after they have been saved to the store;
    // // `null` checks allow to create entities on demand
    // if (entity == null) {
    //     entity = new ExampleEntity(event.transaction.from.toHex())
    //
    //     // Entity fields can be set using simple assignments
    //     entity.count = BigInt.fromI32(0)
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
    // - contract.RewordToken(...)
    // - contract.accumulativeDividendOf(...)
    // - contract.allowance(...)
    // - contract.approve(...)
    // - contract.balanceOf(...)
    // - contract.claimWait(...)
    // - contract.decimals(...)
    // - contract.decreaseAllowance(...)
    // - contract.dividendOf(...)
    // - contract.excludedFromDividends(...)
    // - contract.getAccount(...)
    // - contract.getAccountAtIndex(...)
    // - contract.getLastProcessedIndex(...)
    // - contract.getNumberOfTokenHolders(...)
    // - contract.increaseAllowance(...)
    // - contract.lastClaimTimes(...)
    // - contract.lastProcessedIndex(...)
    // - contract.minimumTokenBalanceForDividends(...)
    // - contract.name(...)
    // - contract.owner(...)
    // - contract.process(...)
    // - contract.processAccount(...)
    // - contract.symbol(...)
    // - contract.totalDividendsDistributed(...)
    // - contract.totalSupply(...)
    // - contract.transfer(...)
    // - contract.transferFrom(...)
    // - contract.withdrawableDividendOf(...)
    // - contract.withdrawnDividendOf(...)
}

export function handleClaim(event: Claim): void {
    let reward = new Reward(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
    let user = loadUser(event.params.account.toHex())
    reward.user = user.id
    reward.amount = event.params.amount.toBigDecimal() / BigDecimal.fromString('1e18')
    user.totalReward = user.totalReward + reward.amount
    user.save()
    reward.blockNumber = event.block.number
    reward.txHash = event.transaction.hash
    reward.save()
    let rewardSummery = loadRewardSummery()
    rewardSummery.totalReward = rewardSummery.totalReward + reward.amount
    rewardSummery.totalCount++
    rewardSummery.lastReward = reward.id
    rewardSummery.save()
}

export function handleClaimWaitUpdated(event: ClaimWaitUpdated): void {
}

export function handleDividendWithdrawn(event: DividendWithdrawn): void {
}

export function handleDividendsDistributed(event: DividendsDistributed): void {
}

export function handleExcludeFromDividends(event: ExcludeFromDividends): void {
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
}

export function handleTransfer(event: Transfer): void {
}
