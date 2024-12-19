import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.js';
import { store } from './redux/store.js';

export function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}