import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import './index.css';
import App from './App';

import { MobileProvider, BlogProvider } from './hooks';
import { HashRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <MobileProvider>
        <BlogProvider>
          <App />
        </BlogProvider>
      </MobileProvider>
    </Router>
  </StrictMode>,
);