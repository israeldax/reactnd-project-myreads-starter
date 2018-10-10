import React from 'react'
import {shallow} from 'enzyme'
import Book from '../Book'


describe('Component [Book]', () => {

  const mockChangeShelf = jest.fn()
  let book = {
    id: '1',
    title: '12 Rules for Life',
    authors: ['Jordan Peterson', 'Others' ],
    imageLinks: { thumbnail: null },
    shelf: 'read',
    rating: 4.5,
    ratingCount: 317
  }

  it('Show title', () => {
    const component = shallow(
      <Book key={book.id} book={book} changeShelf={mockChangeShelf} />
    )
    const wrapper = component.find('.book-title')
    expect(wrapper).toHaveLength(1)
    expect(wrapper.text()).toContain(book.title)
  })

  it('Show cover', () => {
    const component = shallow(
      <Book key={book.id} book={book} changeShelf={mockChangeShelf} />
    )
    const wrapper = component.find('.book-cover')
    expect(wrapper).toHaveLength(1)
  })

  // it('Show rating', () => {
      
  // })

  // it('Show ratingCount', () => {
      
  // })

  it('Show authors', () => {
    const component = shallow(
      <Book key={book.id} book={book} changeShelf={mockChangeShelf} />
    )
    const wrapper = component.find('.book-authors')
    expect(wrapper).toHaveLength(2)
  })

  // it('Does\'t brake without cover', () => {
  //   const cover = component.find('.book-cover')
  //   //expect(cover).
  // })

  it('Does\'t brake without authors', () => {
    book.authors = undefined
    const component = shallow(
      <Book key={book.id} book={book} changeShelf={mockChangeShelf} />
    )
    const wrapper = component.find('.book-authors')
    expect(wrapper).toHaveLength(0)
  })

  // it('Does\'t brake without rating', () => {
      
  // })

  // it('Does\'t brake without rating count', () => {
      
  // })
})