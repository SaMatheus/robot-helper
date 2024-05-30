import { screen, fireEvent, waitFor } from '@testing-library/react';

interface Event {
  target: { value: string };
}

interface ActionHelper {
  triggerEvent: (elementText: string, event?: keyof typeof fireEvent) => Promise<void>;
  fillFormField: (placeholderText: string, value: string) => Promise<void>;
  clickButton: (buttonText: string) => Promise<void>;
}

const actionHelper: ActionHelper = {
  triggerEvent: async (elementText, event = 'click') => {
    const element = screen.queryByText(elementText);
    if (!element) {
      throw new Error(`Element with text "${elementText}" not found`);
    }
    if (!(event in fireEvent)) {
      throw new Error(`Event "${event}" does not exist in fireEvent`);
    }
    fireEvent[event](element);
    await waitFor(() => expect(element).toBeInTheDocument());
  },
  fillFormField: async (placeholderText, value) => {
    const field = screen.queryByPlaceholderText(placeholderText);
    if (!field) {
      throw new Error(`Field with placeholder text "${placeholderText}" not found`);
    }
    if (!(field instanceof HTMLInputElement)) {
      throw new Error(`Field is not an HTMLInputElement`);
    }
    fireEvent.change(field, { target: { value } } as Event);
    await waitFor(() => expect(field.value).toBe(value));
  },
  clickButton: async (buttonText) => {
    const button = screen.queryByText(buttonText);
    if (!button) {
      throw new Error(`Button with text "${buttonText}" not found`);
    }
    fireEvent.click(button);
    await waitFor(() => expect(button).toBeInTheDocument());
  }
};

export default actionHelper;
