import { screen, fireEvent, waitFor, BoundFunction, GetByText } from '@testing-library/react';

interface Event {
  target: { value: string };
}

interface ActionHelper {
  triggerEvent: (elementText: string, event?: keyof typeof fireEvent) => Promise<void>;
  fillFormField: (placeholderText: string, value: string) => Promise<void>;
  clickButton: (buttonText: string) => Promise<void>;
}

const getByText: BoundFunction<GetByText> = screen.getByText;

const actionHelper: ActionHelper = {
  triggerEvent: async (elementText: string, event: keyof typeof fireEvent = 'click') => {
    const element = getByText(elementText);
    fireEvent[event](element);
    await waitFor(() => expect(element).toBeInTheDocument());
  },

  fillFormField: async (placeholderText: string, value: string) => {
    const field = screen.getByPlaceholderText(placeholderText) as HTMLInputElement;
    fireEvent.change(field, { target: { value } } as Event);
    await waitFor(() => expect(field.value).toBe(value));
  },

  clickButton: async (buttonText: string) => {
    const button = getByText(buttonText);
    await waitFor(() => expect(button).toBeInTheDocument());
    fireEvent.click(button);
  }
};

export default actionHelper;
