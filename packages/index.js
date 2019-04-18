import connectWordPress from './wordpress-api/connectors/connectWordPress'
import WordPressProvider from './wordpress-api/WordPressProvider'
import Posts from './wordpress-dom/widgets/Posts'

export { WordPressProvider, Posts, connectWordPress }
export default {
    WordPressProvider,
    Posts,
    connectWordPress
}
