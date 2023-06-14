import apiRequest from "../../../utils/apiRequest";

//Register
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

export async function getAll() {
    const res = await apiRequest({
        path: `/users/all`,
        method: "GET",
    })

    return res;
}

export async function updateProfile({ email, profileData }) {
    const res = await apiRequest({
        path: `/users/${email}/profile`,
        method: "PUT",
        body: profileData,
    });

    return res;
}

export async function getUserByIC({ IC }) {
    const res = await apiRequest({
        path: `/users/getUserByIC/${IC}`,
        method: "GET",
    });

    return res;
}