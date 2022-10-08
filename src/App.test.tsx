import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { App } from './App';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

describe('App', () => {
  it('render main page', () => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    render(
      <MemoryRouter initialEntries={['/main']}>
        <App />
      </MemoryRouter>
    );
  });

  it('wrong url', () => {
    render(
      <MemoryRouter initialEntries={['/wrong-url']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('404 page')).toBeInTheDocument();
  });

  it('send user message', async () => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/chats/first']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    // Ввод логина с паролем
    const loginIn = screen.getByTestId<HTMLInputElement>('login');
    await userEvent.type(loginIn, 'GeekBrains');

    const passwordIn = screen.getByTestId<HTMLInputElement>('password');
    await userEvent.type(passwordIn, 'Student');

    const btnLogin = screen.getByTestId('btn-login');
    await userEvent.click(btnLogin);

    //
    const input = screen.getByTestId<HTMLInputElement>('input');
    await userEvent.type(input, 'Hello, world!');

    const button = screen.getByTestId('button');
    await userEvent.click(button);

    expect(screen.getByText(/Hello, world!/)).toBeInTheDocument();
    expect(screen.getAllByTestId('li').length).toBe(2);
  });

  it('bot answer', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/chats/first']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    const input = screen.getByTestId<HTMLInputElement>('input');
    await userEvent.type(input, 'Hello, world!');

    const button = screen.getByTestId('button');
    await userEvent.click(button);

    expect(
      await screen.findByText(/Im Bot/, undefined, { timeout: 1600 })
    ).toBeInTheDocument();
  });
});
