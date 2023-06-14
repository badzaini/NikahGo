import apiRequest from "../../../utils/apiRequest";

export async function marriageRequest({ data }) {
    const res = await apiRequest({
        path: "/marriageReqs/request",
        method: "POST",
        body: data,
    })

    return res;
}

export async function regMarriage({ data }) {
    const res = await apiRequest({
        path: "/marriageRegs/register",
        method: "POST",
        body: data,
    })

    return res;
}

export async function marriageDetails({ ic }) {
    const res = await apiRequest({
        path: `/marriageReqs/getMarriageByIc/${ic}`,
        method: "GET",
    })

    return res;
}

export async function getMarriageRegs() {
    const res = await apiRequest({
        path: `/marriageRegs/allReg`,
        method: "GET",
    })

    return res;
}

export async function getAllMarriageReqs() {
    const res = await apiRequest({
        path: `/marriageReqs/all`,
        method: "GET",
    })

    return res;
}


export async function getMarriageReqsByIc({ ic }) {
    const res = await apiRequest({
        path: `/marriageReqs/${ic}`,
        method: "GET",
    })

    return res;
}