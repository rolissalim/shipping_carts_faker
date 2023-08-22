import { createSlice, current } from '@reduxjs/toolkit';
import { getItem, setItem } from '../../helper/localstorage.helper';
import { TotalPriceCart, sortArrayObject } from '../../helper/data';

const initialState = {
    totalPrice: getItem("totalPrice", 0) || 0,
    totalCart: getItem("totalCart", 0) || 0,
    totalProduct: getItem("totalProduct", 0) || 0,
    products: getItem("products", []) || [],
    carts: getItem("carts", []) || [],
    wishList: getItem("wishList", []) || [],
    totalWishList: getItem("totalWishList", 0) || 0,
    titlePage: getItem("titlePage", "Products")
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setAddCart: (state, { payload }) => {
            // let carts = []
            // carts = current(state)?.carts || []
            let carts = getItem("carts") || []
            let objIndex = carts?.findIndex((obj => obj.id === payload.id));

            if (objIndex > -1) {
                let total = Number(carts[objIndex].total) + 1 || 0
                carts[objIndex].total = total
                carts[objIndex].subTotal = total * carts[objIndex].price
                carts[objIndex].update = Math.floor(Date.now() / 1000)
            } else
                carts.push({
                    ...payload,
                    total: 1,
                    subTotal: 1 * Number(payload.price),
                    update: Math.floor(Date.now() / 1000)
                })

            let totalCart = Number(state.totalCart) + 1 || 0
            carts = sortArrayObject(carts, "update")
            state.carts = carts;
            state.totalCart = totalCart || 0;

            let totalPrice = TotalPriceCart(carts)
            state.totalPrice = totalPrice;
            setItem("totalPrice", totalPrice)
            setItem("totalCart", totalCart)
            setItem("carts", carts)
        },
        setPlusCart: (state, { payload }) => {
            // let carts = []
            // carts = current(state)?.carts || []
            let carts = getItem("carts") || []
            let objIndex = carts?.findIndex((obj => obj.id === payload.id));

            if (objIndex > -1) {
                let total = Number(carts[objIndex].total) + 1 || 0
                carts[objIndex].total = total
                carts[objIndex].subTotal = total * carts[objIndex].price
            } else
                carts.push({
                    ...payload,
                    total: 1,
                    subTotal: 1 * payload.price,
                })

            let totalCart = Number(state.totalCart) + 1 || 0
            state.carts = carts;
            state.totalCart = totalCart || 0;

            let totalPrice = TotalPriceCart(carts)
            state.totalPrice = totalPrice;
            setItem("totalPrice", Number(totalPrice))
            setItem("totalCart", Number(totalCart))
            setItem("carts", carts)
        },
        setMinusCart: (state, { payload }) => {
            console.log("state", state);
            // state.charts = payload;
            state.totalCart = (Number(state.totalCart) - 1) || 0;
            let carts = getItem("carts") || []
            let objIndex = carts?.findIndex((obj => obj.id === payload.id));

            if (objIndex > -1) {
                let total = Number(carts[objIndex].total) > 0 ? Number(carts[objIndex].total) - 1 : 0
                carts[objIndex].total = total
                carts[objIndex].subTotal = total * Number(carts[objIndex].price)
                let totalCart = (Number(state.totalCart) > 0) ? Number(state.totalCart) - 1 : 0

                state.carts = carts;
                state.totalCart = totalCart || 0;

                let totalPrice = TotalPriceCart(carts)
                state.totalPrice = totalPrice;
                setItem("totalPrice", Number(totalPrice))
                setItem("totalCart", Number(totalCart))
                setItem("carts", carts)
            }
        },
        setCheckout: (state) => {
            state.totalPrice = 0;
            state.totalCart = 0;
            state.carts = [];
            setItem("totalPrice", 0)
            setItem("totalCart", 0)
            setItem("carts", [])
        },
        setWishList: (state, { payload }) => {
            let carts = getItem("carts") || []
            let wishList = getItem("wishlist") || []
            wishList.push(payload)
            carts = carts?.filter((obj => obj.id !== payload.id));
            let totalCart = Number(state.totalCart) - Number(payload.total)
            state.carts = carts;
            state.totalCart = totalCart;

            let totalPrice = TotalPriceCart(carts)
            state.totalPrice = Number(totalPrice) - Number(payload.price * payload.total);
            state.totalWishList = wishList?.length || 0
            state.wishList = wishList

            setItem("wishList", wishList)
            setItem("totalWishList", wishList?.length || 0)
            setItem("totalPrice", Number(totalPrice))
            setItem("totalCart", Number(totalCart))
            setItem("carts", carts)
        },
        setRemoveWishlist: (state, { payload }) => {
            let wishLists = getItem("wishList") || []
            wishLists = wishLists?.filter((obj => obj.id !== payload.id));
            let totalWishList = Number(state.totalWishList) - 1
            state.wishList = wishLists || [];
            state.totalWishList = totalWishList;
            setItem("wishList", wishLists || [])
            setItem("totalWishList", totalWishList)
        },
        setRemoveCart: (state, { payload }) => {
            let carts = getItem("carts") || []
            carts = carts?.filter((obj => obj.id !== payload.id));
            let totalCart = Number(state.totalCart) - Number(payload.total)
            state.carts = carts;
            state.totalCart = totalCart;

            let totalPrice = TotalPriceCart(carts)
            state.totalPrice = totalPrice;
            setItem("totalPrice", Number(totalPrice))
            setItem("totalCart", Number(totalCart))
            setItem("carts", carts)
        },
        setProducts: (state, { payload }) => {
            state.products = payload;
            state.totalProduct = payload.length;
            setItem("totalProduct", payload.length)
            setItem("products", payload)
        },
        setTitlePage: (state, { payload }) => {
            state.titlePage = payload;
            setItem("titlePage", payload)
        }
    }
});

export const {
    setPlusCart,
    setMinusCart,
    setProducts,
    setWishList,
    setRemoveCart,
    setCheckout,
    setAddCart,
    setTitlePage,
    setRemoveWishlist
} = uiSlice.actions;

export default uiSlice.reducer;
