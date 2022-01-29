import React from 'react';
import ColorProvider from './hooks/ColorProvider.jsx'
import {render} from 'react-dom';
import App from './App';


render(
  <ColorProvider>
    <App />
  </ColorProvider >,
  document.getElementById('root')
);
