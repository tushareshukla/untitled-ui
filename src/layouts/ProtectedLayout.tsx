import { useAuthStore } from "@/shared/state/auth.store";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedLayout() {
	const { isAuthenticated } = useAuthStore();
	if (!isAuthenticated) return <Navigate to="/login" replace />;

	return (
		<div className="flex flex-col lg:flex-row h-screen w-full overflow-hidden">
			<main className="flex-1 overflow-auto bg-white w-full">
				<div className="h-full flex flex-col pt-16 lg:pt-0">
					{/* Outlet renders the page content */}
					<Outlet />
				</div>
			</main>
		</div>
	);
}
