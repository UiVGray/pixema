import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.js';
import { store } from './redux/store.js';
import { DarkModeProvider } from './config/contexts/darkMode.tsx';

export function App() {

  return (
    <Provider store={store}>
      <DarkModeProvider>
        <RouterProvider router={router} />
      </DarkModeProvider>
    </Provider>
  );
}