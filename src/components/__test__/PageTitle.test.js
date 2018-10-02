import React from 'react'
import {shallow} from 'enzyme'
import PageTitle from '../PageTitle'

describe('Component [PageTitle]', () => {
    const title = 'Deu certo!'
    const component = shallow(<PageTitle title={title} />)

    it('Show title', () => {
        const wrapper = component.find('h1')
        expect(wrapper).toHaveLength(1)
        expect(wrapper.text()).toContain(title)
    })
})
