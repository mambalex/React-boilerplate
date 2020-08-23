import React from 'react';
import './App.scss';
import { store } from 'store/store';
import { HomePage } from 'pages';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HomePage />
      </Provider>
    </div>
  );
}

export default App;
