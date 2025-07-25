import DashboardPage from "../../features/dashboard/DashboardPage";
import DashboardWrapper from "../../shared/components/DashboardWrapper";
import { useOutletContext } from "react-router-dom";
import type { SidebarTheme } from "../../shared/components/Sidebar";

type ContextType = { theme: SidebarTheme };

export default function Dashboard() {
	const { theme } = useOutletContext<ContextType>();

	return (
		<DashboardWrapper theme={theme}>
			<DashboardPage />
		</DashboardWrapper>
	);
}
