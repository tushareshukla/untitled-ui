import {
    Announcement02,
    Calendar,
    Grid01,
    ImageUser,
    LayoutAlt01,
    MessageChatCircle,
    Settings01,
    Wallet04,
} from "@untitledui/icons";
import type { NavItemType } from "@/components/application/app-navigation/config";
import { SidebarNavigationSimple } from "@/components/application/app-navigation/sidebar-navigation/sidebar-simple";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { useLocation } from "react-router-dom";

const navItemsSimple: NavItemType[] = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: Grid01,
    },
    {
        label: "Events",
        href: "/events",
        icon: Calendar,
        items: [
            { label: "All Events", href: "/events" },
			{ label: "Create Event", href: "/events/create" },
        ],
    },
    {
        label: "Campaigns",
        href: "/campaigns",
        icon: Announcement02,
         items: [
            { label: "All Campaigns", href: "/campaigns/all" },
			{ label: "Create Campaign", href: "/campaigns/create" },
        ],
    },
    {
        label: "Contact Lists",
        href: "/contact-lists",
        icon: ImageUser,
    },
    {
        label: "Wallet",
        href: "/wallet",
        icon: Wallet04,
    },
];

export const SidebarNavigation = () => { 
    const location = useLocation();
     const pathname = location.pathname;
    return (
        <SidebarNavigationSimple
         activeUrl={pathname}
            items={navItemsSimple}
            footerItems={[
                {
                    label: "Settings",
                    href: "/settings",
                icon: Settings01,
            },
            {
                label: "Support",
                href: "/support",
                icon: MessageChatCircle,
                badge: (
                    <BadgeWithDot color="success" type="modern" size="sm">
                        Online
                    </BadgeWithDot>
                ),
            },
        ]}
    />
   ) };
