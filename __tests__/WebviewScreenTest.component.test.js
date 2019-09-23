import React from 'react';
import renderer from 'react-test-renderer';
import WebviewScreen from '../app/components/scenes/WebviewScreen';

/* Webview Screen Testing */
describe('Movie Screen', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <WebviewScreen />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});