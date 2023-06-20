import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import {
  fetchTherapists,
} from '../../redux/Therapy/therapySlice';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('therapySlice async actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  afterEach(() => {
    jest.clearAllMocks();
    store.clearActions();
  });

  it('should dispatch the correct actions when fetching therapists is successful', async () => {
    const fakeResponse = {
      data: [
        { id: 1, name: 'Therapist 1' },
        { id: 2, name: 'Therapist 2' },
      ],
    };

    axios.mockResolvedValueOnce(fakeResponse);

    await store.dispatch(fetchTherapists());

    const expectedActions = [
      { type: fetchTherapists.pending.type },
      { type: fetchTherapists.fulfilled.type, payload: fakeResponse },
    ];

    expect(store.getActions().length).toBe(expectedActions.length);
  });
});
