import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { CarritoProvider } from './context/CarritoContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <CarritoProvider>
      <App />
    </CarritoProvider>
  </React.StrictMode>
);