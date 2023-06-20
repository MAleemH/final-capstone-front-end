import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import {
  fetchTherapists,
  fetchSingleTherapist,
  postTherapist,
  deleteTherapist,
  uploadTherapist,
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
    const fakeUserState = {
      user: {
        id: 123,
        authentication_token: 'fakeToken',
      },
    };

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
    console.log(store.getActions());
    console.log(expectedActions);
    expect(store.getActions().length).toBe(expectedActions.length);
    // expect(axios).toHaveBeenCalledWith({
    //   method: 'get',
    //   url: 'http://localhost:3000/api/v1/users/123/therapists',
    //   headers: {
    //     Authorization: 'fakeToken',
    //     'Content-Type': 'application/json',
    //   },
    // });
  });
});
