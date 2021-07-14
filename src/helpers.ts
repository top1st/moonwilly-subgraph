import { BigDecimal } from "@graphprotocol/graph-ts";
import {RewardSummery, User} from "../generated/schema";

const loadUser = (id: string): User => {
    let user = User.load(id)
    if (!user) {
        user = new User(id)
        user.totalReward = BigDecimal.fromString("0");
        user.save()
    }
    return user as User
}

const loadRewardSummery = (): RewardSummery => {
    let rewardSummery = RewardSummery.load("1")
    if(!rewardSummery) {
        rewardSummery = new RewardSummery("1")
        rewardSummery.totalCount = 0
        rewardSummery.totalReward = BigDecimal.fromString("0")
        rewardSummery.save()
    }
    return rewardSummery as RewardSummery
}

export {
    loadUser, loadRewardSummery
}
