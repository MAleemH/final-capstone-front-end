import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/store';
import TherapistDetailsPage from '../../pages/TherapistDetailsPage';

it('Details page renders correctly', () => {
  const mysingleTherapist = store.getState().therapy.singleTherapist;
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <TherapistDetailsPage mysingleTherapist={mysingleTherapist} />
      </MemoryRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
