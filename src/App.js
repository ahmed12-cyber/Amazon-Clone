/** @format */

import Header from "./component/Header/Header";
import Checkout from "./component/Checkout/Checkout.js";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Login from "./component/Authentication/Login.js";

import { auth } from '../src/component/Authentication/Firebase.js';
import { useStateValue } from './Stateprovider';
import { useEffect } from 'react';
import Payment from './component/Payment/Payment.js';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './component/Orders/Order.js';
import Footer from "./component/Footer/Footer.js";
// import Footer from './components/Footer/Footer';

const promise =loadStripe(
	"pk_test_51ONxtiAhxX6KlYPvkqPNQOklzMYeSfrY6hZMNXHRKFXPfrJs46vjsfrc8gETushF5ZGw5tlwgGdvBOpomHbPNA4V007SQz12mh"
);
function App() {
	const [{}, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			// console.log("THE USER IS >>> ", authUser);
			if (authUser) {
				// the user just logged in / the user was logged in

				dispatch({
					type: 'SET_USER',
					user: authUser,
				});
			} else {
				// the user is logged out
				dispatch({
					type: 'SET_USER',
					user: null,
				});
			}
		});
	}, []);
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/"
						element={
							<>
								<Header  />
								<Home />
								<Footer />
							</>
						}
					/>
					<Route
						path="/payment"
						element={
							<>
								<Header />
								<Elements stripe={promise}>
									<Payment />
								</Elements> 
							</>
						}
					/>

					<Route
						path="/Checkout"
						element={
							<>
								<Header />
								<Checkout />
								<Footer />
							</>
						}
					/>
					<Route
						path="/Orders"
						element={
							<>
								<Header />
                                
								<Orders />
								<Footer />
							</>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
