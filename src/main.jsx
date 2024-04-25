import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/Register";
import Header from "./components/Header";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/Second";
import Login from "./components/Login";
import GoalPage from "./pages/GoalPage";
import Tracker from "./pages/Tracker";
import Schedule from "./pages/Schedule";

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <FirstPage />,
			},
			{
				path: "/second",
				element: <SecondPage />,
			},
			{
				path: "/signup",
				element: <Register />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/goal",
				element: <GoalPage />,
			},
			{
				path: "/tracker",
				element: <Tracker />,
			},
			{
				path: "/schedule",
				element: <Schedule />,
			},
		],
		errorElement: (
			<div>
				<Header />
				<p>Error.....</p>
			</div>
		),
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
