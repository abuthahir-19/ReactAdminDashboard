import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from './context/ContextProvider';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense ('Ngo9BigBOggjHTQxAR8/V1NGaF1cVGhIfEx1RHxQdld5ZFRHallYTnNWUj0eQnxTdEZjUX5WcHRRQmFeUkJ3Xw==')
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ContextProvider>
            <App />
        </ContextProvider>
    </React.StrictMode>
);