import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import { hashHistory } from 'react-router'

import FlickrView from './FlickrView.jsx';
import PhotoView from './PhotoView.jsx';
import NotFound from './NotFound.jsx';

const routes = {
  path: '/',
  indexRoute: {component: FlickrView},
  childRoutes: [
    {path: 'photo/:farm/:server/:id/:secret', component: PhotoView},
    {path: '*', component: NotFound}
  ]
};

ReactDOM.render(
    <Router routes={routes} history={hashHistory}/>,
    document.getElementById('main'));

