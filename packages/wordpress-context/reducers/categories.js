export const initialState = { categories: [], offset: 0 }

export const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'addMany':
            return {
                ...state,
                categories: [...state.categories, ...payload],
                offset: state.offset + payload.length
            }
        case 'add':
            return {
                ...state,
                categories: [...state.categories, payload],
                offset: state.offset++
            }
    }
}

export default {
    reducer,
    initialState
}
