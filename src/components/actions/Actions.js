export const BUY_ITEM = 'BUY_ITEM';

export const buyItem = () => item => {
    return {
        type: BUY_ITEM,
        paypload: payload
    }
}

export const REMOVE_ITEM = "REMOVE_ITEM";

export const removeItem = () => item => {
    return {
        type: REMOVE_ITEM,
        payload: payload
    }
}