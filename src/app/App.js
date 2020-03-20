import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import CarList from './pages/CarList/CarList';
import CarDetail from './pages/CarDetail/CarDetail';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './shared/styles/main.scss';

const Router = () => (
	<HashRouter>
		<Header />
		<Switch>
			<Route exact path="/" component={CarList} />
			<Route path="/model/:id" component={CarDetail} />
		</Switch>
		<Footer />
	</HashRouter>
);

export default Router;
