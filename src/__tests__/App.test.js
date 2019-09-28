import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

import { Provider } from 'react-redux';
import { Store } from '../store';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faBirthdayCake, faBriefcase, faTv, faSearch } from '@fortawesome/free-solid-svg-icons';
library.add(faUser, faBirthdayCake, faBriefcase, faTv, faSearch);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={Store}>
      <App />
    </Provider>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});
