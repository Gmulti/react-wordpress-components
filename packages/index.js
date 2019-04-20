import connectWordPress from './wordpress-api/connectors/connectWordPress'
import connectPosts from './wordpress-api/connectors/connectPosts'
import connectCustomPostType from './wordpress-api/connectors/connectCustomPostType'
import { WordPressProviderContext } from './wordpress-api/context/WordPressProviderContext'
import WordPressProvider from './wordpress-api/WordPressProvider'

import WidgetCategories from './wordpress-dom/widgets/Categories'
import connectCategories from './wordpress-api/connectors/connectCategories'

import WordPressContext from './wordpress-context/index'

export {
    WordPressProvider,
    connectWordPress,
    connectPosts,
    WordPressContext,
    WordPressProviderContext,
    connectCustomPostType,
    WidgetCategories,
    connectCategories
}

export default {
    WordPressProviderContext,
    WordPressProvider,
    connectWordPress,
    connectPosts,
    connectCustomPostType,
    ...WordPressContext
}
