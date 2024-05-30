import { screen, waitFor } from '@testing-library/react';

type Modifier = 'not' | 'resolves' | 'rejects';
type Matcher = 'toBe' | 'toEqual' | 'toBeGreaterThan' | 'toBeLessThan' | 'toBeCloseTo' | 'toMatch' | 'toBeDefined' | 'toBeUndefined' | 'toBeNull' | 'toBeTruthy' | 'toBeFalsy';
type ArrayOperation = 'contains' | 'length';
type Objperation = 'hasProperty' | 'keys';
type ValueForArray = number | string;
type ValueForObject = string | string[];
type MatcherType = (arg: any) => void;

interface AssertHelper {
  checkIf: (received: unknown, expected: unknown, matcher: Matcher, modifier?: Modifier) => void;
  asyncCheckIf: (received: unknown, expected: unknown, matcher: Matcher, modifier?: Modifier) => Promise<void>;
  checkArray: (array: unknown[], operation: ArrayOperation, value: ValueForArray) => void;
  checkObject: (object: Record<string, unknown>, operation: Objperation, value: ValueForObject) => void;
  verifyElementPresence: (elementText: string) => Promise<void>;
  verifyElementAbsence: (elementText: string) => Promise<void>;
}

const assertHelper: AssertHelper = {
  checkIf: (received, expected, matcher, modifier) => {
    if (modifier && !['not', 'resolves', 'rejects'].includes(modifier)) {
      throw new Error(`Invalid modifier: ${modifier}`);
    }
    modifier
      ? (expect(received)[modifier][matcher] as MatcherType)(expected)
      : (expect(received)[matcher] as MatcherType)(expected);
  },
  asyncCheckIf: async (received, expected, matcher, modifier) => {
    if (modifier && !['not', 'resolves', 'rejects'].includes(modifier)) {
      throw new Error(`Invalid modifier: ${modifier}`);
    }
    modifier
      ? await waitFor(() => (expect(received)[modifier][matcher] as MatcherType)(expected))
      : await waitFor(() => (expect(received)[matcher] as MatcherType)(expected));
  },
  checkArray: (array, operation, value) => {
    if (typeof value !== 'number' && typeof value !== 'string') {
      throw new Error('Invalid value for array operation: must be a number or string');
    }
    const operations = {
      'contains': () => expect(array).toContain(value),
      'length': () => expect(array).toHaveLength(Number(value))
    };

    if (!operations[operation]) {
      throw new Error(`Invalid operation: ${operation}`);
    }

    operations[operation]();
  },
  checkObject: (object, operation, value) => {
    if (typeof value !== 'string' && !Array.isArray(value)) {
      throw new Error('Invalid value for object operation: must be a string or array of strings');
    }
    const operations = {
      'hasProperty': () => expect(object).toHaveProperty(value),
      'keys': () => expect(Object.keys(object)).toEqual(value)
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
