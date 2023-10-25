import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './../src/store/store'; // Redux store 가져오기
import { Provider } from 'react-redux'; // Redux provider 가져오기

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Redux store를 앱에 제공 */}
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
