import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import {
  registerUser,
  loginUser,
  forgotPassword,
  logoutUser,
} from '../../redux/User/userSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('axios');

describe('User redux state tests', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      user: {
        loading: false,
        user: [],
        error: '',
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('registers a user successfully', async () => {
    const registerData = { /* provide registration data */ };
    const responseData = { /* provide response data */ };
    axios.post.mockResolvedValue({ data: responseData });

    await store.dispatch(registerUser(registerData));

    const actions = store.getActions();
    expect(actions[0].type).toBe('user/registerUser/pending');
    expect(actions[1].type).toBe('user/registerUser/fulfilled');
  });

  it('logs in a user successfully', async () => {
    const loginData = { /* provide login data */ };
    const responseData = { /* provide response data */ };
    axios.post.mockResolvedValue({ data: responseData });

    await store.dispatch(loginUser(loginData));

    const actions = store.getActions();
    expect(actions[0].type).toBe('user/loginUser/pending');
    expect(actions[1].type).toBe('user/loginUser/fulfilled');
  });

  it('sends a forgot password request successfully', async () => {
    const userData = { /* provide user data */ };
    const responseData = { /* provide response data */ };
    axios.put.mockResolvedValue({ data: responseData });

    await store.dispatch(forgotPassword(userData));

    const actions = store.getActions();
    expect(actions[0].type).toBe('user/forgotPassword/pending');
    expect(actions[1].type).toBe('user/forgotPassword/fulfilled');
  });

  it('logs out a user successfully', async () => {
    const responseData = { /* provide response data */ };
    axios.delete.mockResolvedValue({ data: responseData });

    await store.dispatch(logoutUser());

    const actions = store.getActions();
    expect(actions[0].type).toBe('user/logoutUser/pending');
    expect(actions[1].type).toBe('user/logoutUser/fulfilled');
  });
});
