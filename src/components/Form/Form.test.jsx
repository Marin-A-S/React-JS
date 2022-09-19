import { Form } from "./Form"
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Form', () => {

  it('button activation when text is entered', () => {
    const value = '23';
    render(<Form />);
    const inputEl = screen.getByPlaceholderText("Message");
    const inputBtn = screen.getByRole('button');
    fireEvent.change(inputEl, { target: { value: value } })

    expect(inputBtn).toBeEnabled();
    screen.debug();
  })
});
