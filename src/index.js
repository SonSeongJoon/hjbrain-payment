import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import NotFound from "./page/NotFound";
import IchatPage from "./page/IchatPage";
import PaymentPage from "./page/PaymentPage";
import TaxPage from "./page/TaxPage";
import DashboardPage from "./page/DashboardPage";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import MyList from "./component/payment/MyList";
import ReceiveList from "./component/payment/ReceiveList";
import SaveList from "./component/payment/SaveList";
import Write from "./component/payment/Write";

const router = createBrowserRouter([
	{
		path    : '/',
		element : <App/>,
		children: [
			{path: '', element: <IchatPage/>},
			{path: 'dash', element: <DashboardPage/>},
			{path: 'ichat', element: <IchatPage/>},
			{
				path    : 'payment',
				children: [
					{index: true, element: <PaymentPage/>},
					{path: 'write', element: <Write/>},
					{path: 'myList', element: <MyList/>},
					{path: 'receivelist', element: <ReceiveList/>},
					{path: 'savelist', element: <SaveList/>},
					{path: 'wait', element: <SaveList/>},
					{path: 'reject', element: <SaveList/>},
					{path: 'approval', element: <SaveList/>},
				],
			},
			{path: 'tax', element: <TaxPage/>},
			{path: '*', element: <NotFound/>},
		],
	},
	{
		path        : 'login',
		element     : <Login/>,
		errorElement: <NotFound/>,
	},
	{
		path        : 'sign',
		element     : <SignUp/>,
		errorElement: <NotFound/>,
	},
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
);
