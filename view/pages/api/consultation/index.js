import apiRequest from "../../../utils/apiRequest";

export async function createComplaint({ data }) {
    const res = await apiRequest({
        path: '/consultations/complaint',
        method: "POST",
        body: data,
    });

    return res;
}

export async function getAllComplaints() {
    const res = await apiRequest({
        path: `/consultations/all`,
        method: "GET",
    })

    return res;
}

export async function getComplaintDetails({ consultationId }) {
    const res = await apiRequest({
        path: `/consultations/${consultationId}`,
        method: "GET",
    })

    return res;
}

export async function createConsultation({ data }) {
    const res = await apiRequest({
        path: '/consultBooks/bookConsult',
        method: "POST",
        body: data,
    });

    return res;
}

export async function getAllConsultations() {
    const res = await apiRequest({
        path: `/consultBooks/allConsultations`,
        method: "GET",
    })

    return res;
}