import { useRoutes } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import ProtectedLayout from "../layouts/ProtectedLayout";


import Dashboard from "../modules/dashboard";
import { LoginSimple } from "@/features/auth/views/Login";
import { SignupSimple } from "@/features/auth/views/SignUp";
import { NotFound } from "@/pages/not-found";

export default function RouteTree() {
	return useRoutes([
		{
			element: <PublicLayout />,
			children: [
				// { path: "/", element: <LandingPage /> },
				{ path: "/login", element: <LoginSimple/> },
				{ path: "/signup", element: <SignupSimple/> },

			],
		},
		{
			path: "/",
			element: <ProtectedLayout />,
			children: [{ path: "dashboard", element: <Dashboard /> }],
		},
		{
		path: "*",
		element: <NotFound />,
		},
	]);
}
