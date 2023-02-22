import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import router from './router';
import './styles/options.css';

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
