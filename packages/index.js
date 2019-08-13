import connectWordPress from './wordpress-api/connectors/connectWordPress'
import connectPosts from './wordpress-api/connectors/connectPosts'
import { WordPressProviderContext } from './wordpress-api/context/WordPressProviderContext'
import WordPressProvider from './wordpress-api/WordPressProvider'
import WordPressContext from './wordpress-context/index'

export {
    WordPressProvider,
    connectWordPress,
    connectPosts,
    WordPressContext,
    WordPressProviderContext
}

export default {
    WordPressProviderContext,
    WordPressProvider,
    connectWordPress,
    connectPosts,
    ...WordPressContext
}
