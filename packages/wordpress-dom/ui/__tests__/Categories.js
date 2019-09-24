import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Adapter from 'enzyme-adapter-react-16'
import Categories from '../Categories'

Enzyme.configure({ adapter: new Adapter() })

describe('Categories', () => {
    it('expect to render', () => {
        const wrapper = shallow(<Categories />)

        expect(wrapper).toMatchSnapshot()
    })

    it('expect to render with props', () => {
        const instance = renderer.create(
            <Categories
                items={[
                    {
                        name: 'Category 1'
                    },
                    {
                        name: 'Category 2'
                    }
                ]}
            />
        )

        expect(instance.toJSON()).toMatchSnapshot()
    })
})
