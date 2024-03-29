import { BigInt, BigDecimal, Address } from "@graphprotocol/graph-ts"
import {
    DAI,
    Approval,
    OwnershipTransferred,
    Transfer
} from "../generated/DAI/DAI"
import {Reward} from "../generated/schema";
import {loadRewardSummery, loadUser} from "./helpers";


export function handleTransfer(event: Transfer): void {
    if(event.params.to.toHex() == '0x47eb130179cd0c25f11da3476f2493b5a0eb7a6b'
        && event.params.from.toHex() == '0xc7c3ccce4fa25700fd5574da7e200ae28bbd36a3'
    ) {
        // let reward = new Reward(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
        // let user = loadUser(event.params.to.toHex())
        // reward.user = user.id
        // reward.amount = event.params.value.toBigDecimal() / BigDecimal.fromString('1e18')
        // user.totalReward = user.totalReward + reward.amount
        // user.save()
        // reward.blockNumber = event.block.number
        // reward.txHash = event.transaction.hash
        // reward.save()
        let amount = event.params.value.toBigDecimal() / BigDecimal.fromString('1e18')
        let rewardSummery = loadRewardSummery()
        rewardSummery.treasuryReward = rewardSummery.treasuryReward + amount
        rewardSummery.totalReward = rewardSummery.totalReward + amount
        rewardSummery.totalCount++
        rewardSummery.save()
    }
}
