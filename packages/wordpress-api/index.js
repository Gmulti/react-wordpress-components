//Context
import { WordPressProviderContext } from './context/WordPressProviderContext'
// Connectors
import connectWordPress from './connectors/connectWordPress'
import connectPosts from './connectors/connectPosts'
import connectCustomPostType from './connectors/connectCustomPostType'

export {
    connectWordPress,
    connectPosts,
    WordPressProviderContext,
    connectCustomPostType
}
