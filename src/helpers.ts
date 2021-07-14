import { BigDecimal } from "@graphprotocol/graph-ts";
import {RewardSummery, User} from "../generated/schema";

function loadUser(id: string): User {
    let user = User.load(id)
    if (!user) {
        user = new User(id)
        user.totalReward = BigDecimal.from("0");
        user.save()
    }
    return user
}

function loadRewardSummery(): RewardSummery {
    let rewardSummery = RewardSummery.load("1")
    if(!rewardSummery) {
        rewardSummery = new RewardSummery("1")
        rewardSummery.totalCount = 0
        rewardSummery.totalReward = BigDecimal.from("0")
        rewardSummery.save()
    }
    return rewardSummery
}

export {
    loadUser, loadRewardSummery
}
