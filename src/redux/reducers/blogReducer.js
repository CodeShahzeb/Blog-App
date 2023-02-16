const blogReducer = (state = '', action) => {
    switch (action.type) {
        case "ADD_BLOG":
            return {
                ...state,
                items: [...state.items, action.payload]
            }

        case "DELETE_BLOG":

            return {
                ...state,
                items: state.items.filter((blog) => blog.id !== action.payload)
            }

        case "BLOG_INFO":
            let blogInfo = state.items.filter((blog) => blog.id == action.payload)
            return {
                ...state,
                blog: (blogInfo.length > 0) ? blogInfo[0] : {}
            }

        case "BLOG_UPDATE":
            return {
                ...state,
                items: state.items.filter((blog) => blog.id != action.payload ? action.payload : blog)
            }


        default:
            return state
    }
}
export default blogReducer;