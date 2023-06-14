import apiRequest from "../../../utils/apiRequest";

export async function createRequest({ data }) {
    const res = await apiRequest({
        path: "/kadNikahs/request",
        method: "POST",
        body: data,
    })

    return res;
}

export async function getAllRequest() {
    const res = await apiRequest({
        path: "/kadNikahs/all",
        method: "GET",
    })

    return res;
}