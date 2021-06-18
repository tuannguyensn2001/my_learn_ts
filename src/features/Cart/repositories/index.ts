import {AxiosResponse} from "axios";
import {ICourse} from "../../../models/ICourse";
import {fetchAddToCart, fetchCart, fetchDeleteCart} from "../services";

export const getAddToCart = async (course_id: number): Promise<ICourse> => {
    const response: AxiosResponse = await fetchAddToCart(course_id);
    return response.data.course;
}

export const getCart = async (): Promise<ICourse[]> => {
    const response: AxiosResponse = await fetchCart();
    return response.data.cart;
}

export const getDeleteCart = async (id: number): Promise<number> => {
    const response: AxiosResponse = await fetchDeleteCart(id);
    return response.data.id;
}