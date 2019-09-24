//Context
import { WordPressProviderContext } from './context/WordPressProviderContext'
// Connectors
import connectWordPress from './connectors/connectWordPress'
import connectPosts from './connectors/connectPosts'
import connectCategories from './connectors/connectCategories'
import connectComments from './connectors/connectComments'
import connectCustomPostType from './connectors/connectCustomPostType'

export {
    connectWordPress,
    connectPosts,
    connectCategories,
    connectComments,
    connectCustomPostType,
    WordPressProviderContext
}
