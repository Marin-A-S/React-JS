import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { App } from 'src/App';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'src/store';

describe('SingIn', () => {
  it('render SingIn page', async () => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/signin']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    const loginIn = screen.getByTestId<HTMLInputElement>('login');
    await userEvent.type(loginIn, 'GeekBrains');

    const passwordIn = screen.getByTestId<HTMLInputElement>('password');
    await userEvent.type(passwordIn, 'Student');

    const btnLogin = screen.getByTestId('btn-login');
    await userEvent.click(btnLogin);
  });
});
