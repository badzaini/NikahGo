import apiRequest from "../../../utils/apiRequest";

//Create Incentive
export async function createIncentive({ data }) {
    const res = await apiRequest({
        path: "/incentives/apply",
        method: "POST",
        body: data,
    })

    return res;
}

//GET incentievs
export async function getAllIncentives() {
    const res = await apiRequest({
        path: "/incentives/all",
        method: "GET",
    })

    return res;
}