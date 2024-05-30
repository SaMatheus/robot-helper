interface FetchData {
  [key: string]: any;
}

const globalFetch = (data: FetchData, status?: number, timeout = 2000) => jest.fn(() =>
  new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error('Timeout'));
    }, timeout);

    Promise.resolve({
      ok: true,
      status: status,
      json: () => Promise.resolve(data),
    }).then(response => {
      clearTimeout(timer);
      resolve(response);
    });
  })
);

const mockHelper = {
  fetchSuccess: (data: FetchData, timeout?: number) => {
    global.fetch = globalFetch(data, 200, timeout) as unknown as typeof fetch;
  },
  fetchFailure: (error: Error, timeout = 3000) => {
    global.fetch = jest.fn(() =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(error);
        }, timeout);
      })
    );
  },
  fetchWithStatus: (data: FetchData, status: number, timeout?: number) => {
    global.fetch = globalFetch(data, status, timeout) as unknown as typeof fetch;
  },
  clearFetchMock: () => {
    global.fetch = jest.fn();
  }
};

export default mockHelper;
