import Endpoint from './shared/Endpoint'

class CustomPostType extends Endpoint {
    constructor(shared, cpt) {
        super(shared)
        this.cpt = cpt
    }
    get endpoint() {
        return `/${this.cpt}`
    }
}

export default CustomPostType
