import React from 'react';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createRoot} from 'react-dom/client';
import {store} from '../old-src/bll/store';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>);
// root.render(<Provider store={store}><App/></Provider>);


// const root = ReactDOM.createRoot(
//     document.getElementById('root') as HTMLElement
// );
// root.render(
//     //  <React.StrictMode>
//     <Provider store={store}><App/></Provider>
//     //   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
