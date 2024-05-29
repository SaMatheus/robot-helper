import { jest } from '@jest/globals';

const fetchMockHelper = {
  mockFetchSuccess: (data) => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(data),
      })
    );
  },

  mockFetchFailure: (error) => {
    global.fetch = jest.fn(() =>
      Promise.reject(error)
    );
  },

  mockFetchWithStatus: (data, status) => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: status >= 200 && status < 300,
        status,
        json: () => Promise.resolve(data),
      })
    );
  },

  clearFetchMock: () => {
    global.fetch.mockClear();
  }
};

export default fetchMockHelper;
