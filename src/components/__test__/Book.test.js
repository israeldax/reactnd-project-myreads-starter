import React from 'react'
import {shallow} from 'enzyme'
import Book from '../Book'


describe('Component [Book]', () => {

  const mockChangeShelf = jest.fn()
  const book = [
    {
      id: '1',
      title: '12 Rules for Life',
      authors: ['Jordan Peterson'],
      imageLinks: { thumbnail: null },
      shelf: 'read',
      rating: 4.5,
      ratingCount: 317
    }
  ]
  
  const component = shallow(
    <Book key={book.id} book={book} changeShelf={mockChangeShelf} />
  )

  it('Show title', () => {
    const title = component.find('.book-title')
    expect(title).toHaveLength(1)
    expect(title.text()).toContain(book.title)
  })

  it('Show cover', () => {
    const cover = component.find('.book-cover')
    expect(cover).toHaveLength(1)
  })

  it('Show rating', () => {
      
  })

  it('Show ratingCount', () => {
      
  })

  it('Show authors', () => {
    const authors = component.find('.book-authors')
    expect(authors).toHaveLength(2)
  })

  it('Does\'t brake without cover', () => {
    const cover = component.find('.book-cover')
    //expect(cover).
  })

  it('Does\'t brake without authors', () => {
    const authors = component.find('.book-authors')
    //expect(authors).
  })

  it('Does\'t brake without rating', () => {
      
  })

  it('Does\'t brake without rating count', () => {
      
  })
})