import React from 'react'
import {shallow} from 'enzyme'
import BookShelf from '../BookShelf'
import Book from '../Book'


describe('Component [BookShelf]', () => {
  const mockChangeShelf = jest.fn()
  const shelfTitle = 'Read'
  const books = [
    {
      id: '1',
      title: '12 Rules for Life',
      authors: ['Jordan Peterson'],
      imageLinks: { thumbnail: null },
      shelf: 'read',
      rating: 4.5,
      ratingCount: 317
    },
    {
      id: '2',
      title: '',
      authors: [''],
      imageLinks: { thumbnail: null },
      shelf: 'read',
      rating: 1,
      ratingCount: 53
    },
    {
      id: '3',
      title: '',
      authors: [''],
      imageLinks: { thumbnail: null },
      shelf: 'currentlyReading',
      rating: 3,
      ratingCount: 11
    }
  ]

  const component = shallow(
    <BookShelf
      shelfName={shelfTitle} books={books} changeShelf={mockChangeShelf}
    />
  )

  it('Show title', () => {
    const wrapper = component.find('.bookshelf-title');
    expect(wrapper).toHaveLength(1)
    expect(wrapper.text()).toContain(shelfTitle)
  })

  it('Filtering by shelf', () => {
    const wrapper = component.find(Book)
    expect(wrapper).toHaveLength(2);
  })
})