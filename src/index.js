import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
<<<<<<< HEAD
=======
import reportWebVitals from './reportWebVitals';
import { store } from './../src/store/store'; // Redux store 가져오기
import { Provider } from 'react-redux'; // Redux provider 가져오기
>>>>>>> fbf027c17944cc3357f4e76bf31be8344b886bd2

ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
=======
    <Provider store={store}> {/* Redux store를 앱에 제공 */}
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
>>>>>>> fbf027c17944cc3357f4e76bf31be8344b886bd2
