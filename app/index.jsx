import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
//import Main from './components/main';
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

ReactDOM.render(
	<div>
	{/*Router maintains the routes in the url*/}
	<Router history = {hashHistory}>
		{/*this route is the main component the nested routes will render
		depending on which path is active. if there is no valid path,
		then IndexRoute will be the default page.
		*/}
		<Route path = "/" component={Main}>
			<Route path = "about" component={About}/>
			<Route path = "examples" component={Examples}/>
			<IndexRoute component = {Weather}/>	
		</Route>
	</Router>
	</div>
	, 
	document.getElementById("element")
);
