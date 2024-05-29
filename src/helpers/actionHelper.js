import '@testing-library/jest-dom/jest-globals';
import { screen, fireEvent, waitFor } from '@testing-library/react';

const actionHelper = {
  triggerEvent: async (elementText, event = 'click') => {
    const element = screen.getByText(elementText);
    fireEvent[event](element);
    await waitFor(() => expect(element).toBeInTheDocument());
  },
  
  fillFormField: async (placeholderText, value) => {
    const field = screen.getByPlaceholderText(placeholderText);
    fireEvent.change(field, { target: { value } });
    await waitFor(() => expect(field.value).toBe(value));
  },
  
  clickButton: async (buttonText) => {
    const button = screen.getByText(buttonText);
    await waitFor(() => expect(button).toBeInTheDocument());
    fireEvent.click(button);
  }
};

export default actionHelper;
