import axios from 'axios';
import store from '../../redux/store';
import { testFetchCharts } from '../../redux/Chart/chartSlice';

describe('Chart redux state tests', () => {
  it('Should initially set Chart store to an empty Array', () => {
    const state = store.getState().chart.charts;
    expect(state).toEqual([]);
  });

  it('fetches coin data from API', async () => {
    const url = 'https://api.coinstats.app/public/v1/charts?period=1m&coinId=bitcoin';
    const axiosSpy = jest.spyOn(axios, 'get');
    jest.setTimeout(90000);
    const dispatchSpy = jest.fn();
    await testFetchCharts(url)(dispatchSpy);
    expect(axiosSpy).toHaveBeenCalledWith(url);
  });
});
