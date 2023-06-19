import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/store';
import LoginPage from '../../pages/LoginPage';

it('LoginPage component renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
