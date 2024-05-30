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

  describe('Error cases', () => {
    test('throws an error if element does not exist in triggerEvent', async () => {
      render(<div />);
      await expect(actionHelper.triggerEvent('Non-existent element')).rejects.toThrow('Element with text "Non-existent element" not found');
    });
  
    test('throws an error if event does not exist in triggerEvent', async () => {
      render(<button>Button</button>);
      await expect(actionHelper.triggerEvent('Button', 'nonExistentEvent')).rejects.toThrow('Event "nonExistentEvent" does not exist in fireEvent');
    });
  
    test('throws an error if field does not exist in fillFormField', async () => {
      render(<div />);
      await expect(actionHelper.fillFormField('Non-existent field', 'value')).rejects.toThrow('Field with placeholder text "Non-existent field" not found');
    });
  
    test('throws an error if field is not an HTMLInputElement in fillFormField', async () => {
      render(<div placeholder="Div field" />);
      await expect(actionHelper.fillFormField('Div field', 'value')).rejects.toThrow('Field is not an HTMLInputElement');
    });
  
    test('throws an error if button does not exist in clickButton', async () => {
      render(<div />);
      await expect(actionHelper.clickButton('Non-existent button')).rejects.toThrow('Button with text "Non-existent button" not found');
    });
  });
});
