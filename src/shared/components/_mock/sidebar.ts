// Mock data for sidebar navigation items
export const sidebarData = [
	{
		label: "Home",
		icon: "LayoutDashboard",
		parentRoute: "/dashboard",
	},
	{
		label: "Events",
		icon: "Calendar",
		title: "Events",
		description: "Manage your events",
		parentRoute: "/events",
		children: [
			{ label: "All Events", route: "/events/all" },
			{ label: "Create Event", route: "/events/create" },
		],
	},
	{
		label: "Campaigns",
		icon: "Megaphone",
		parentRoute: "/campaigns",
		children: [
			{ label: "All Campaigns", route: "/campaigns/all" },
			{ label: "Create Campaign", route: "/campaigns/create" },
		],
	},
	{
		label: "Contact Lists",
		icon: "SquareUserRound",
		parentRoute: "/contacts",
	},
	{
		label: "Playbooks",
		icon: "StickyNote",
		parentRoute: "/playbooks",
		children: [
			{ label: "All Playbooks", route: "/playbooks/all" },
			{ label: "Create Playbook", route: "/playbooks/create" },
		],
	},
	{
		label: "Delight Engage",
		icon: "MailPlus",
		parentRoute: "/delight-engage",
	},
	{
		label: "Gifting Activities",
		icon: "Gift",
		parentRoute: "/gifting-activities",
		children: [
			{ label: "Overview", route: "/gifting-activities/overview" },
			{ label: "Send Gift", route: "/gifting-activities/send" },
		],
	},
	{
		label: "Inventory",
		icon: "Container",
		parentRoute: "/inventory",
	},
	{
		label: "Warehouse Activities",
		icon: "Warehouse",
		parentRoute: "/warehouse-activities",
		children: [
			{ label: "Overview", route: "/warehouse-activities/overview" },
			{
				label: "Send Your Inventory to Delightloop",
				route: "/warehouse-activities/send",
			},
		],
	},
	{
		label: "Wallet",
		icon: "Wallet",
		parentRoute: "/wallet",
	},
];

// User profile data for sidebar
export const userProfileData = {
	name: "Rahul Chauhan",
	role: "Product Manager",
	initials: "RA",
};
