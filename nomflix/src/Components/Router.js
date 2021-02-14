import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../Routes/Home';
import TV from '../Routes/TV';
import Search from '../Routes/Search';
import Header from './Header';
import Detail from '../Routes/Detail';

const GlobalRouter = () => (
	<Router>
		<Header />
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/tv" exact component={TV} />
			<Route path="/search" component={Search} />
			<Route path="/movie/:id" component={Detail} />
			<Route path="/tv/:id" component={Detail} />
			<Redirect from="*" to="/" />
		</Switch>
	</Router>
);

export default GlobalRouter;
