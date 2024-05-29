import React from 'react';
import { render } from '@testing-library/react';
import { assertHelper } from '../helpers';

describe('assertHelper', () => {
  test('checkIf should correctly assert based on the provided matcher', () => {
    assertHelper.checkIf(5, 5, 'toBe');
    assertHelper.checkIf(5, 4, 'toBe', 'not');
  });

  test('asyncCheckIf should correctly assert based on the provided matcher and modifier', async () => {
    const promiseResolves = Promise.resolve('resolved');
    const promiseRejects = Promise.reject(new Error('error')).catch(() => {});
  
    await assertHelper.asyncCheckIf(promiseResolves, 'resolved', 'toBe', 'resolves');  
    await assertHelper.asyncCheckIf(promiseRejects, 'error', 'toBe', 'not');
  });

  test('checkArray should correctly assert based on the provided operation', () => {
    assertHelper.checkArray([1, 2, 3], 'contains', 2);
    assertHelper.checkArray([1, 2, 3], 'length', 3);
  });

  test('checkObject should correctly assert based on the provided operation', () => {
    assertHelper.checkObject({ key: 'value' }, 'hasProperty', 'key');
    assertHelper.checkObject({ key1: 'value1', key2: 'value2' }, 'keys', ['key1', 'key2']);
  });

  test('verifyElementPresence should correctly assert that the element is present', async () => {
    render(<div>Test Element</div>);
    await assertHelper.verifyElementPresence('Test Element');
  });

  test('verifyElementAbsence should correctly assert that the element is not present', async () => {
    render(<div>Test Element</div>);
    await assertHelper.verifyElementAbsence('Nonexistent Element');
  });
});
