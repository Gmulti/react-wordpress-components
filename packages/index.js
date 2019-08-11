import connectWordPress from './wordpress-api/connectors/connectWordPress'
import connectPosts from './wordpress-api/connectors/connectPosts'
import WordPressProvider from './wordpress-api/WordPressProvider'
import Posts from './wordpress-dom/widgets/Posts'

export { WordPressProvider, Posts, connectWordPress, connectPosts }

export default {
    WordPressProvider,
    Posts,
    connectWordPress,
    connectPosts
}
