
  
import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/storeConfig';

import Main from './components/Main';

class App extends Component {

  render() {
    const store = ConfigureStore();
    return (
      <Provider store={store}>
          <div className="App">
            <Main />
          </div>
      </Provider>
    );
  }

}


export default App;