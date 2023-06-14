import apiRequest from "../../../utils/apiRequest";

//utk creaate Course
export async function createCourseAnjuran({ courseAnjuranData }) {
    const res = await apiRequest({
        path: "/courses/courseAnjuran",
        method: "POST",
        body: courseAnjuranData,
    })

    return res;
}

export async function getAllCourses() {
    const res = await apiRequest({
        path: `/courses/all`,
        method: "GET",
    })

    return res;
}

export async function getCourseDetails({ courseId }) {
    const res = await apiRequest({
        path: `/courses/${courseId}`,
        method: "GET",
    })

    return res;
}

export async function book({ data }) {
    const res = await apiRequest({
        path: '/bookings/bookCourse',
        method: "POST",
        body: data,
    });

    return res;
}

export async function getAllBookings() {
    const res = await apiRequest({
        path: `/bookings/all`,
        method: "GET",
    })

    return res;
}