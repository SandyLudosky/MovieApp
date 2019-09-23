import React from 'react';
import renderer from 'react-test-renderer';
import MovieScreen from '../app/components/scenes/MovieScreen';

/* Movie  Screen Testing */
describe('Movie Screen', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <MovieScreen />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});