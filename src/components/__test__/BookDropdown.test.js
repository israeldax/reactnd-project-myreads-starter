import React from 'react'
import {shallow, mount, render} from 'enzyme'
import BookDropdown from '../BookDropdown'

describe('[Component] BookDropdown', () => {

    it('Correctly renders prop', () => {
        const changeShelf = jest.fn()
        const shelf = 'currentlyReading'
        const component = shallow(<BookDropdown shelf={shelf} changeShelf={changeShelf} />)

        const wrapper = component.find('select')
        expect(wrapper.props().value).toBe(shelf)
        expect(wrapper.find('option.chose').render().attr('value')).toBe(shelf)
    })
})