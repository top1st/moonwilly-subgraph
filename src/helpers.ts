import { BigDecimal } from "@graphprotocol/graph-ts";
import {RewardSummery, User} from "../generated/schema";

function loadUser(id: string) {
    let user = User.load(id)
    if (!user) {
        user = new User(id)
        user.totalReward = 0;
        user.save()
    }
    return user
}

function loadRewardSummery() {
    let rewardSummery = RewardSummery.load("1")
    if(!rewardSummery) {
        rewardSummery = new RewardSummery("1")
        rewardSummery.totalCount = new BigDecimal(0)
        rewardSummery.totalReward = new BigDecimal(0)
        rewardSummery.save()
    }
    return rewardSummery
}

export {
    loadUser, loadRewardSummery
}
