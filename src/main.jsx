// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { HistoryRouter } from './routes/HistoryRouter';
import { history } from './routes/history';
import './styles/main.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </StrictMode>
);
