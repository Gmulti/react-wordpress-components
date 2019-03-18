class Endpoint {
    constructor({ baseUrl, customPath = 'wp-json/wp/v2' }) {
        this.baseUrl = baseUrl
        this.customPath = customPath
    }

    get endpoint() {
        return '/'
    }

    get headers() {
        return {
            'Content-Type': 'application/json'
        }
    }

    getPath = () => {
        return `${this.baseUrl}/${this.customPath}${this.endpoint}`
    }

    getQueryParams = (query = null) => {
        if (query) {
            const queryData = new URLSearchParams(query)
            return `?${queryData.toString()}`
        }
        return ''
    }

    all = async (query = null) => {
        const options = {
            method: 'GET',
            headers: this.headers
        }

        const path = `${this.getPath()}${this.getQueryParams(query)}`

        try {
            const response = await fetch(path, options)

            return await response.json()
        } catch (error) {
            return null
        }
    }

    get = async (key, query = null) => {
        const options = {
            method: 'GET',
            headers: this.headers
        }

        const path = `${this.getPath()}/${key}${this.getQueryParams(query)}`

        try {
            const response = await fetch(path, options)
            return await response.json()
        } catch (error) {
            return null
        }
    }
}

export default Endpoint
