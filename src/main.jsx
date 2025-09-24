import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ProductProvider } from './context/productosContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>
);