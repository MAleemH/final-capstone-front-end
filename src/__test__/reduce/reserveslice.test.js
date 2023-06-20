import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  fetchReserves,
  fetchSingleReserve,
  postReserve,
  deleteReserve,
} from '../../redux/Reserve/reserveSlice';

const mockStore = configureStore([thunk]);

describe('reserveSlice', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      reserve: {
        loading: false,
        reserves: [],
        singleReserve: null,
        error: '',
      },
    });
  });

  it('should fetch reserves', async () => {
    await store.dispatch(fetchReserves());

    const actions = store.getActions();
    expect(actions[0].type).toEqual(fetchReserves.pending.type);
    expect(actions[1].type).toEqual(fetchReserves.fulfilled.type);
  });

  it('should fetch a single reserve', async () => {
    const reserveID = expect.any(Number);
    await store.dispatch(fetchSingleReserve(reserveID));

    const actions = store.getActions();
    expect(actions[0].type).toEqual(fetchSingleReserve.pending.type);
    expect(actions[1].type).toEqual(fetchSingleReserve.fulfilled.type);
  });

  it('should post a reserve', async () => {
    const reserveData = expect.any(Object);
    await store.dispatch(postReserve(reserveData));

    const actions = store.getActions();
    expect(actions[0].type).toEqual(postReserve.pending.type);
    expect(actions[1].type).toEqual(postReserve.fulfilled.type);
  });

  it('should delete a reserve', async () => {
    const deleteID = expect.any(Number);
    await store.dispatch(deleteReserve(deleteID));

    const actions = store.getActions();
    expect(actions[0].type).toEqual(deleteReserve.pending.type);
    expect(actions[1].type).toEqual(deleteReserve.fulfilled.type);
  });
});
