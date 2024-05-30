import { mockHelper } from '../helpers';
import { expect } from '@jest/globals';

describe('mockHelper', () => {
  test('fetchSuccess should mock a successful fetch call', async () => {
    mockHelper.fetchSuccess({ data: 'success' });
    const response = await global.fetch();
    const data = await response.json();
    expect(data).toEqual({ data: 'success' });
  });

  test('fetchFailure should mock a failed fetch call', async () => {
    mockHelper.fetchFailure(new Error('error'));
    try {
      await global.fetch();
    } catch (error) {
      expect(error).toEqual(new Error('error'));
    }
  });

  test('fetchWithStatus should mock a fetch call with a specified status', async () => {
    mockHelper.fetchWithStatus({ data: 'success' }, 200);
    const response = await global.fetch();
    expect(response.status).toEqual(200);
  });

  test('clearFetchMock should clear the fetch mock', () => {
    mockHelper.fetchSuccess({ data: 'mocked data' });
    mockHelper.clearFetchMock();
    global.fetch();
    expect(global.fetch).toBeCalled();
  });
});
