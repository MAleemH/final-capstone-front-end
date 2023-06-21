import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/store';
import AppointmentPage from '../../pages/AppointmentPage';

it('Appointment page renders correctly', () => {
  const myReserves = store.getState().reserve.reserves;
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <AppointmentPage myReserves={myReserves} />
      </MemoryRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
