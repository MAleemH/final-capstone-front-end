import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/store';
import Navigation from '../../components/Navigation';

it('Navigation component renders correctly', () => {
  const myUser = store.getState().user.user;
  const tree = renderer
    .create(
      <Provider store={store}>
        <MemoryRouter>
          <Navigation myUser={myUser} />
        </MemoryRouter>
        ,
      </Provider>,

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
