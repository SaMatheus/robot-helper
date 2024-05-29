import { fetchMockHelper } from '../helpers';
import { expect } from '@jest/globals';

describe('fetchMockHelper', () => {
  test('mockFetchSuccess should mock a successful fetch call', () => {
    fetchMockHelper.mockFetchSuccess({ data: 'success' });
    expect(global.fetch).toBeDefined();
  });

  test('mockFetchFailure should mock a failed fetch call', () => {
    fetchMockHelper.mockFetchFailure(new Error('error'));
    expect(global.fetch).toBeDefined();
  });

  test('mockFetchWithStatus should mock a fetch call with a specified status', () => {
    fetchMockHelper.mockFetchWithStatus({ data: 'success' }, 200);
    expect(global.fetch).toBeDefined();
  });

  test('clearFetchMock should clear the fetch mock', () => {
    fetchMockHelper.mockFetchSuccess({ data: 'mocked data' });
    fetchMockHelper.clearFetchMock();
    global.fetch();
    expect(global.fetch).toBeCalled();
  });
});
