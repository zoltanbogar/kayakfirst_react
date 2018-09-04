import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurderBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Landing from './containers/Landing/Landing';

class App extends Component {
	render() {
		return (
			<Layout>
				<Switch>
					<Route path="/checkout" component={Checkout} />
					<Route path="/" exact component={Landing} />
				</Switch>
			</Layout>
		);
	}
}

export default App;
