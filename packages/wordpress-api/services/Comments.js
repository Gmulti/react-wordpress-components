import Endpoint from './shared/Endpoint'

class Comments extends Endpoint {
    get endpoint() {
        return '/comments'
    }

    getCommentsByPostID = async (postId, query = null) => {
        return await this.all({
            post: postId,
            ...query
        })
    }
}

export default Comments
