import '@testing-library/jest-dom/jest-globals';
import { expect } from '@jest/globals';
import { screen, waitFor } from '@testing-library/react';

const assertHelper = {
  checkIf: (received, expected, matcher, modifier) => {
    modifier
      ? expect(received)[modifier][matcher](expected)
      : expect(received)[matcher](expected);
  },
  asyncCheckIf: async (received, expected, matcher, modifier) => {
    modifier
      ? await waitFor(() => expect(received)[modifier][matcher](expected))
      : await waitFor(() => expect(received)[matcher](expected));
  },
  checkArray: (array, operation, value) => {
    const operations = {
      'contains': () => expect(array).toContain(value),
      'length': () => expect(array).toHaveLength(value)
    };

    if (!operations[operation]) {
      throw new Error(`Invalid operation: ${operation}`);
    }

    operations[operation]();
  },
  checkObject: (object, operation, value) => {
    const operations = {
      'hasProperty': () => expect(object).toHaveProperty(value),
      'keys': () => expect(Object.keys(object)).toEqual(expect.arrayContaining(value))
    };

    if (!operations[operation]) {
      throw new Error(`Invalid operation: ${operation}`);
    }

    operations[operation]();
  },
  verifyElementPresence: async (elementText) => {
    const element = screen.getByText(elementText);
    await waitFor(() => expect(element).toBeInTheDocument());
  },
  
  verifyElementAbsence: async (elementText) => {
    await waitFor(() => expect(screen.queryByText(elementText)).not.toBeInTheDocument());
  }
};

export default assertHelper;
