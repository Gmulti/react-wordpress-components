import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { connectWordPress } from '../connectWordPress'
import WordPressProvider from '../../WordPressProvider'

Enzyme.configure({ adapter: new Adapter() })

const BASE_URL = 'https://example.com'

describe('connectWordPress', () => {
    it('provides the correct props to the component', () => {
        const Fake = () => null

        const ComponentConnected = connectWordPress(Fake)

        const ProviderConnected = () => (
            <WordPressProvider baseUrl={{ value: BASE_URL }}>
                <ComponentConnected />
            </WordPressProvider>
        )

        const wrapper = mount(<ProviderConnected />)

        expect(wrapper.find(Fake).prop('baseUrl').value).toEqual(BASE_URL)
    })
})
