import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';
import '../styles/global.css';


const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/login" element={<Login/>} />
					<Route exact path="/recovery-password" element={<RecoveryPassword />} />
					<Route exact path="/recovery-password" element={<SendEmail />} />
					<Route exact path="/recovery-password" element={<NewPassword />} />
					<Route exact path="/recovery-password" element={<MyAccount />} />
					<Route exact path="/recovery-password" element={<CreateAccount />} />
					<Route exact path="/recovery-password" element={<Checkout />} />
					<Route exact path="/recovery-password" element={<Orders />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;