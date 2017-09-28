// Polyfills
import './polyfills';

// Vendor libraries
import React from 'react';
import { render } from 'react-dom';

// Project components
import App from './App';

render(
    <App />,
    document.getElementById('app')
);
