import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/store';
import Therapists from '../../components/Therapists';

it('Chart component renders correctly', () => {
  const myTherapists = store.getState().therapist.therapists;
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <Therapists myTherapists={myTherapists} />
      </MemoryRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
