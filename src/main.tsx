import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import TestPage from './pages/TestPage.tsx';
import './index.css';
import './i18n'; // Initialize i18n
import './i18n/types'; // Import TypeScript type definitions

const pathname = window.location.pathname.replace(/\/$/, '') || '/';
const isTestRoute = pathname === '/test';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isTestRoute ? <TestPage /> : <App />}
  </StrictMode>
);
