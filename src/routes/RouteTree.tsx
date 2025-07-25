import { useRoutes } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import ProtectedLayout from "../layouts/ProtectedLayout";
import LoginPage from "../features/auth/views/LoginPage";
import SignupPage from "../features/auth/views/SignupPage";
import LandingPage from "../features/auth/views/LandingPage";
import Dashboard from "../modules/dashboard/DashboardPage";

export default function RouteTree() {
	return useRoutes([
		{
			element: <PublicLayout />,
			children: [
				{ path: "/", element: <LandingPage /> },
				{ path: "/login", element: <LoginPage /> },
				{ path: "/signup", element: <SignupPage /> },
			],
		},
		{
			path: "/app",
			element: <ProtectedLayout />,
			children: [{ path: "", element: <Dashboard /> }],
		},
	]);
}
