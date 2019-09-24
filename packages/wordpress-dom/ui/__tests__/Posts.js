import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Adapter from 'enzyme-adapter-react-16'
import Posts from '../Posts'

Enzyme.configure({ adapter: new Adapter() })

describe('Posts', () => {
    it('expect to render', () => {
        const wrapper = shallow(<Posts />)

        expect(wrapper).toMatchSnapshot()
    })

    it('expect to render with props', () => {
        const instance = renderer.create(
            <Posts
                items={[
                    {
                        title: {
                            rendered: 'Hello World'
                        }
                    },
                    {
                        title: {
                            rendered: 'Foo Bar'
                        }
                    }
                ]}
            />
        )

        expect(instance.toJSON()).toMatchSnapshot()
    })
})
