import apiRequest from "../../../utils/apiRequest";

export async function registerUser({ data }) {
    const res = await apiRequest({
        path: "/users/register",
        body: data,
        method: "POST",
    })

    return res;
}

export async function loginUser({ email }) {
    const res = await apiRequest({
        path: `/users/login/${email}`,
        method: "GET",
    })

    return res;
}