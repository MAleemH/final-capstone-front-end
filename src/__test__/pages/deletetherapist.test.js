import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/store';
import DeleteTherapist from '../../pages/DeleteTherapist';

it('Delete Therapist page renders correctly', () => {
  const myTherapists = store.getState().therapy.therapists;
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <DeleteTherapist myTherapists={myTherapists} />
      </MemoryRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
