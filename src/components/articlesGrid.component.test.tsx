import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticlesGrid from './articlesGrid.component';
import { MemoryRouter } from 'react-router-dom';

describe('ArticleGrid test', () => {
  it('Test amount of rendered articles', () => {
    const articles = [
      {
        author: 'Test Author',
        content: 'Test content',
        description: 'Test description',
        source: { id: 'testSourceId', name: 'testSourceName' },
        title: 'Test Title 1',
        url: 'www.testurl.com',
        publishedAt: '01-01-2001',
        urlToImage: 'www.testurl.com/image.jpeg',
      },
      {
        author: 'Test Author',
        content: 'Test content',
        description: 'Test description',
        source: { id: 'testSourceId', name: 'testSourceName' },
        title: 'Test Title 2',
        url: 'www.testurl.com',
        publishedAt: '01-01-2001',
        urlToImage: 'www.testurl.com/image.jpeg',
      },
    ];

    render(
      <MemoryRouter initialEntries={['/']}>
        <ArticlesGrid articles={articles} />
      </MemoryRouter>
    );
    const headingItems = screen.getAllByRole('heading');
    expect(headingItems).toHaveLength(4);
  });

  it('Test if title props are rendered correctly', () => {
    const articles = [
      {
        author: 'Test Author',
        content: 'Test content',
        description: 'Test description',
        source: { id: 'testSourceId', name: 'testSourceName' },
        title: 'Test Title 1',
        url: 'www.testurl.com',
        publishedAt: '01-01-2001',
        urlToImage: 'www.testurl.com/image.jpeg',
      },
      {
        author: 'Test Author',
        content: 'Test content',
        description: 'Test description',
        source: { id: 'testSourceId', name: 'testSourceName' },
        title: 'Test Title 2',
        url: 'www.testurl.com',
        publishedAt: '01-01-2001',
        urlToImage: 'www.testurl.com/image.jpeg',
      },
    ];

    render(
      <MemoryRouter initialEntries={['/']}>
        <ArticlesGrid articles={articles} />
      </MemoryRouter>
    );

    expect(screen.getByText(/Test title 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Test title 2/i)).toBeInTheDocument();
  });
});
