export const blogRegistered = (data) => {

    return {
        type: 'ADD_BLOG',
        payload: data
    }
}

export const deleteBlog = (id) => {

    return {
        type: 'DELETE_BLOG',
        payload: id
    }
}

export const blogInfo = (id) => {

    return {
        type: 'BLOG_INFO',
        payload: id
    }
}

export const updateBlogInfo = (data) => {

    return {
        type: 'BLOG_UPDATE',
        payload: data
    }
}