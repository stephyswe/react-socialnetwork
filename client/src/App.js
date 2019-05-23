import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Main from './Router';
import Footer from './components/layout/Footer';

//Redux - combine react with redux
import { Provider } from 'react-redux';

// Redux - redux store
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />
        <content className="main ui Site-content">
          <Main />
        </content>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
