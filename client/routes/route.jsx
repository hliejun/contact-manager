import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../views/app-view.jsx';
import ContactList from '../views/list-view.jsx';
import ContactForm from '../views/form-view.jsx';

const routes =
  <Route path="/index.html" component={App}>
    <IndexRoute component={App}/>
    // <Route path="/index.html" component={ContactList}/>
    // <Route path="/index.html/form" component={ContactForm}/>
  </Route>;

export default routes;
