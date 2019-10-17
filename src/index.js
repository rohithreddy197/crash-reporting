import bugsnag from '@bugsnag/js'
import bugsnagReact from '@bugsnag/plugin-react'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as Sentry from '@sentry/browser';

Sentry.init({ dsn: "https://8ffad3796a224857835a94c46c5c5949@sentry.io/1782621" });
const bugsnagClient = bugsnag('aeddafd09aee218a06e5b97e844a63ed')
bugsnagClient.use(bugsnagReact, React)
const ErrorBoundary = bugsnagClient.getPlugin('react')
ReactDOM.render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
