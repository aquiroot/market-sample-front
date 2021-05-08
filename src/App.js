import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Products, Cart, E404 } from './components/views';
import { Standard } from './components/layouts';

function App() {
	return (
		<Router>
			<Standard>
				<Switch>
					<Route exact path="/products">
						<Products />
					</Route>
					<Route exact path="/cart">
						<Cart />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="">
						<E404 />
					</Route>
				</Switch>
			</Standard>
		</Router>
	);
}

export default App;
