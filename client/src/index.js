//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
//import Recipe from "./components/Recipe/SearchResultContainer"
import './index.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import chores from './components/chores';
import Dashboard from './components/dashboard/dashboard'

ReactDOM.render(
	<div className="App" style={{ display: 'flex', alignItems: 'stretch' }}>
		{/* <X /> */}
			<Router>
				<div>
					<Switch>
						<Route exact path="/" component={App} />
						<Route exact path="/chores" component={chores} />
						<Route exact path="/dashboard" component={Dashboard} />
          				<Route component={App} />
					</Switch>
				</div>
			</Router>
	</div>,
	document.getElementById('root')
)

