import myLearnAPI from "../../../config/network";

export const fetchAddToCart = (course_id: number) => {
    return myLearnAPI.post('/api/v1/cart', {
        courseId: course_id
    })
}

export const fetchCart = () => {
    return myLearnAPI.get('/api/v1/cart');
}

export const fetchDeleteCart = (id: number) => {
    return myLearnAPI.delete(`/api/v1/cart/${id}`);
}