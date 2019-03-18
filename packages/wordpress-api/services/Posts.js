import Endpoint from './shared/Endpoint'

class Posts extends Endpoint {
    get endpoint() {
        return '/posts'
    }
}

export default Posts
