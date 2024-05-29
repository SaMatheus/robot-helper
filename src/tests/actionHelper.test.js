import React from 'react';
import { render } from '@testing-library/react';
import { actionHelper } from '../helpers';

describe('actionHelper', () => {
  test('triggerEvent should trigger the specified event', async () => {
    const TestComponent = () => <button>Test Button</button>;
    render(<TestComponent />);
    await actionHelper.triggerEvent('Test Button');
  });
  
  test('fillFormField should fill the form field with the specified value', async () => {
    const TestComponent = () => <input placeholder="Test Input" />;
    render(<TestComponent />);
    await actionHelper.fillFormField('Test Input', 'Test Value');
  });
  
  test('clickButton should click the specified button', async () => {
    const TestComponent = () => <button>Test Button</button>;
    render(<TestComponent />);
    await actionHelper.clickButton('Test Button');
  });
});
