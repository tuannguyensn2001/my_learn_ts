import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {create} from "domain";
import {ICourse} from "../../../models/ICourse";
import {getAddToCart, getCart, getDeleteCart} from "../repositories";
import {fetchDeleteCart} from "../services";

export interface initCartState {
    courseList: ICourse[]
}

interface Cart {
    course_id: number | undefined;
}

export const dispatchAddToCart = createAsyncThunk<ICourse, Cart>('cart/add', async (cart, thunkAPI): Promise<ICourse> => {
    if (!cart.course_id) throw new Error();
    return await getAddToCart(cart?.course_id);
});

export const dispatchCart = createAsyncThunk<ICourse[]>('cart', async (): Promise<ICourse[]> => {
    return await getCart();
})


export const dispatchDeleteCart = createAsyncThunk<number, number>('cart/delete', async (id, thunkAPI): Promise<number> => {
    return await getDeleteCart(id);
})

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        courseList: []
    } as initCartState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(dispatchAddToCart.fulfilled, (state, {payload}) => {
            const index: number = state.courseList.findIndex(item => item.id === payload.id);
            if (index === -1) {
                state.courseList.push(payload);
            }
        });
        builder.addCase(dispatchCart.fulfilled, (state, {payload}) => {
            state.courseList = payload;
        });
        builder.addCase(dispatchDeleteCart.fulfilled, (state, {payload}) => {
            const index = state.courseList.findIndex(course => course.id === payload);
            state.courseList.splice(index, 1);
        })

    }
})

const {reducer, actions} = cartSlice;

export default reducer;