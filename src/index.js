import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { Store } from './store';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faBirthdayCake, faBriefcase, faTv, faSearch } from '@fortawesome/free-solid-svg-icons';
library.add(faUser, faBirthdayCake, faBriefcase, faTv, faSearch);

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>
, document.getElementById('root'));
