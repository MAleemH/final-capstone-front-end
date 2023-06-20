import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/store';
import NewAppointment from '../../pages/NewAppointment';
import specializationArr from '../../components/speciliazation';

it('NewAppointment component renders correctly', () => {
  const myTherapists = store.getState().therapy.therapists;
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <NewAppointment myTherapists={myTherapists} specializationArr={specializationArr} />
      </MemoryRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
