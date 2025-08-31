import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import TestPage from './pages/TestPage.tsx';
import './index.css';

const pathname = window.location.pathname.replace(/\/$/, '');
const isTestRoute = pathname === '/test';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isTestRoute ? <TestPage /> : <App />}
  </StrictMode>
);
