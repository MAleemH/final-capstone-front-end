import axios from 'axios';
import store from '../../redux/store';
import { fetchCoins } from '../../redux/Coin/coinSlice';

describe('Coin redux state tests', () => {
  it('Should initially set Coin store to an empty Array', () => {
    const state = store.getState().coin.coins;
    expect(state).toEqual([]);
  });

  it('fetches coin data from API', async () => {
    const url = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=24';
    const axiosSpy = jest.spyOn(axios, 'get');
    jest.setTimeout(90000);
    const dispatchSpy = jest.fn();
    await fetchCoins(url)(dispatchSpy);
    expect(axiosSpy).toHaveBeenCalledWith(url);
  });
});
