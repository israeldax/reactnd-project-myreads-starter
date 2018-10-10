import React from 'react'
import {shallow} from 'enzyme'
import BookDropdown from '../BookDropdown'

describe('Component [BookDropdown]', () => {
    const changeShelf = jest.fn()
    
    const component = shallow(<BookDropdown shelf='none' changeShelf={changeShelf}/>)
    it('')
})