import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/index';
import App from './App';
import './index.css';

const container = document.getElementById('root');

createRoot(container).render(
  <Provider store={store}>
    <App />
  </Provider>
);