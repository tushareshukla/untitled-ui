import axios from "axios";
import { campaigns } from "../../../services/campaign.services";

export function getCampaignById(userId: string) {
	return axios.get(campaigns.GET_CAMPAIGN_BY_ID(userId));
}
