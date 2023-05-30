import apiRequest from "../../../utils/apiRequest";

export async function registerUser({ data }) {
    const res = await apiRequest({
        path: "/users/register",
        body: data,
        method: "POST",
    })

    return res;
}