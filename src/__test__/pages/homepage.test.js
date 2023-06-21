import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/store';
import HomePage from '../../pages/HomePage';

it('Home page renders correctly', () => {
  const myTherapists = store.getState().therapy.therapists;
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <HomePage myTherapists={myTherapists} />
      </MemoryRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
