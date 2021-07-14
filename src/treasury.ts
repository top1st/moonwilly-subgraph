import { BigInt, BigDecimal, Address } from "@graphprotocol/graph-ts"
import {
    DAI,
    Approval,
    OwnershipTransferred,
    Transfer
} from "../generated/DAI/DAI"
import {DaiTransfer, Reward} from "../generated/schema";
import {loadRewardSummery, loadUser} from "./helpers";

const tresuryAddress = '0x47eb130179cd0c25f11da3476f2493b5a0eb7a6b'

export function handleTransfer(event: Transfer): void {
    if(event.params.to.toHex() === tresuryAddress
        // && event.transaction.to.toHex() === '0xd4d2abbef1b26458504e7027233d5e7f09ea476d'
    ) {
        let reward = new Reward(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
        let user = loadUser(tresuryAddress)
        reward.user = user.id
        reward.amount = event.params.value.toBigDecimal() / BigDecimal.fromString('1e18')
        user.totalReward = user.totalReward + reward.amount
        user.save()
        reward.blockNumber = event.block.number
        reward.txHash = event.transaction.hash
        reward.save()
        let rewardSummery = loadRewardSummery()
        rewardSummery.treasuryReward = rewardSummery.treasuryReward + reward.amount
        rewardSummery.totalCount++
        rewardSummery.save()
    }
    let daiTransfer = new DaiTransfer(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
    daiTransfer.from = event.params.from
    daiTransfer.to = event.params.to
    daiTransfer.value = event.params.value
    daiTransfer.contract = event.transaction.to as Address
    daiTransfer.txHash = event.transaction.hash
    daiTransfer.save()
}
