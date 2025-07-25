import { useRoutes } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import ProtectedLayout from "../layouts/ProtectedLayout";

import LandingPage from "../features/auth/views/LandingPage";
import Dashboard from "../modules/dashboard/DashboardPage";
import { SignupSimple } from "@/components/shared-assets/auth/sign-up";

export default function RouteTree() {
	return useRoutes([
		{
			element: <PublicLayout />,
			children: [
				{ path: "/", element: <LandingPage /> },
				{ path: "/login", element: <SignupSimple/> },
				{ path: "/signup", element: <SignupSimple/> },
			],
		},
		{
			path: "/app",
			element: <ProtectedLayout />,
			children: [{ path: "", element: <Dashboard /> }],
		},
	]);
}
