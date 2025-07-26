import type { FC, HTMLAttributes } from "react";
import { useCallback, useEffect, useRef } from "react";
import type { Placement } from "@react-types/overlays";
import { ChevronSelectorVertical, LogOut01, Plus, User01 } from "@untitledui/icons";
import { useFocusManager } from "react-aria";
import type { DialogProps as AriaDialogProps } from "react-aria-components";
import { Button as AriaButton, Dialog as AriaDialog, DialogTrigger as AriaDialogTrigger, Popover as AriaPopover } from "react-aria-components";
import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";
import { Button } from "@/components/base/buttons/button";
import { RadioButtonBase } from "@/components/base/radio-buttons/radio-buttons";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cx } from "@/utils/cx";

type NavAccountType = {
    id: string;
    name: string;
    email: string;
    avatar: string;
    status: "online" | "offline";
};

type NavOrganizationType = {
    id: string;
    name: string;
    email: string;
    avatar: string;
    status: "online" | "offline";
};

const placeholderAccounts: NavAccountType[] = [
    {
        id: "olivia",
        name: "Olivia Rhye",
        email: "olivia@untitledui.com",
        avatar: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80",
        status: "online",
    },
];

const placeholderOrganizations: NavOrganizationType[] = [
    {
        id: "delightloop",
        name: "Delightloop",
        email: "https://delightloop.com",
        avatar: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80",
        status: "online",
    },
    {
        id: "acme-inc",
        name: "Acme Inc",
        email: "https://acme.com",
        avatar: "https://www.untitledui.com/images/avatars/transparent/sienna-hewitt?bg=%23E0E0E0",
        status: "online",
    },
];

export const NavAccountMenu = ({
    className,
    selectedAccountId = "olivia",
    selectedOrgId = "delightloop",
    accounts = placeholderAccounts,
    organizations = placeholderOrganizations,
    ...dialogProps
}: AriaDialogProps & {
    className?: string;
    accounts?: NavAccountType[];
    organizations?: NavOrganizationType[];
    selectedAccountId?: string;
    selectedOrgId?: string;
}) => {
    const focusManager = useFocusManager();
    const dialogRef = useRef<HTMLDivElement>(null);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            switch (e.key) {
                case "ArrowDown":
                    focusManager?.focusNext({ tabbable: true, wrap: true });
                    break;
                case "ArrowUp":
                    focusManager?.focusPrevious({ tabbable: true, wrap: true });
                    break;
            }
        },
        [focusManager],
    );

    useEffect(() => {
        const element = dialogRef.current;
        if (element) {
            element.addEventListener("keydown", onKeyDown);
        }

        return () => {
            if (element) {
                element.removeEventListener("keydown", onKeyDown);
            }
        };
    }, [onKeyDown]);

    return (
        <AriaDialog
            {...dialogProps}
            ref={dialogRef}
            className={cx("w-66 rounded-xl bg-secondary_alt shadow-lg ring ring-secondary_alt outline-hidden", className)}
        >
            <div className="rounded-xl bg-primary ring-1 ring-secondary">
                {/* Top Section: View Profile */}
                <div className="flex flex-col gap-0.5 py-1.5">
                    <NavAccountCardMenuItem label="View profile" icon={User01} shortcut="⌘K→P" />
                </div>

                {/* Organization Switch Section */}
                <div className="flex flex-col gap-0.5 border-t border-secondary py-1.5">
                    <div className="px-3 pt-1.5 pb-1 text-xs font-semibold text-tertiary">Switch organization</div>
                    <div className="flex flex-col gap-0.5 px-1.5">
                        {organizations.map((org) => (
                            <button
                                key={org.id}
                                className={cx(
                                    "relative w-full cursor-pointer rounded-md px-2 py-1.5 text-left outline-focus-ring hover:bg-primary_hover focus:z-10 focus-visible:outline-2 focus-visible:outline-offset-2",
                                    org.id === selectedOrgId && "bg-primary_hover",
                                )}
                            >
                                <AvatarLabelGroup status={org.status} size="md" src={org.avatar} title={org.name} subtitle={org.email} />
                                <RadioButtonBase isSelected={org.id === selectedOrgId} className="absolute top-2 right-2" />
                            </button>
                        ))}
                    </div>
                </div>
                {/* Add Organization */}
                <div className="flex flex-col gap-2 px-2 pt-0.5 pb-2">
                    <Button iconLeading={Plus} color="secondary" size="sm">
                        Add organization
                    </Button>
                </div>

                {/* Account Switch Section */}
                <div className="flex flex-col gap-0.5 border-t border-secondary py-1.5">
                    <div className="flex flex-col gap-0.5 px-1.5">
                        {accounts.map((account) => (
                            <button
                                key={account.id}
                                className={cx(
                                    "relative w-full cursor-pointer rounded-md px-2 py-1.5 text-left outline-focus-ring hover:bg-primary_hover focus:z-10 focus-visible:outline-2 focus-visible:outline-offset-2",
                                    account.id === selectedAccountId && "bg-primary_hover",
                                )}
                            >
                                <AvatarLabelGroup status={account.status} size="md" src={account.avatar} title={account.name} subtitle={account.email} />
                                <RadioButtonBase isSelected={account.id === selectedAccountId} className="absolute top-2 right-2" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sign Out */}
            <div className="pt-1 pb-1.5">
                <NavAccountCardMenuItem label="Sign out" icon={LogOut01} shortcut="⌥⇧Q" />
            </div>
        </AriaDialog>
    );
};

const NavAccountCardMenuItem = ({
    icon: Icon,
    label,
    shortcut,
    ...buttonProps
}: {
    icon?: FC<{ className?: string }>;
    label: string;
    shortcut?: string;
} & HTMLAttributes<HTMLButtonElement>) => {
    return (
        <button {...buttonProps} className={cx("group/item w-full cursor-pointer px-1.5 focus:outline-hidden", buttonProps.className)}>
            <div
                className={cx(
                    "flex w-full items-center justify-between gap-3 rounded-md p-2 group-hover/item:bg-primary_hover",
                    "outline-focus-ring group-focus-visible/item:outline-2 group-focus-visible/item:outline-offset-2"
                )}
            >
                <div className="flex gap-2 text-sm font-semibold text-secondary group-hover/item:text-secondary_hover">
                    {Icon && <Icon className="size-5 text-fg-quaternary" />} {label}
                </div>
                {shortcut && (
                    <kbd className="flex rounded px-1 py-px font-body text-xs font-medium text-tertiary ring-1 ring-secondary ring-inset">{shortcut}</kbd>
                )}
            </div>
        </button>
    );
};

export const NavAccountCard = ({
    popoverPlacement,
    selectedAccountId = "olivia",
    selectedOrgId = "delightloop",
    accounts = placeholderAccounts,
    organizations = placeholderOrganizations,
}: {
    popoverPlacement?: Placement;
    selectedAccountId?: string;
    selectedOrgId?: string;
    accounts?: NavAccountType[];
    organizations?: NavOrganizationType[];
}) => {
    const triggerRef = useRef<HTMLDivElement>(null);
    const isDesktop = useBreakpoint("lg");

    const selectedAccount = accounts.find((a) => a.id === selectedAccountId);

    if (!selectedAccount) {
        console.warn(`Account with ID ${selectedAccountId} not found in <NavAccountCard />`);
        return null;
    }

    return (
        <div ref={triggerRef} className="relative flex items-center gap-3 rounded-xl p-3 ring-1 ring-secondary ring-inset">
            <AvatarLabelGroup
                size="md"
                src={selectedAccount.avatar}
                title={selectedAccount.name}
                subtitle={selectedAccount.email}
                status={selectedAccount.status}
            />
            <div className="absolute top-1.5 right-1.5">
                <AriaDialogTrigger>
                    <AriaButton className="flex cursor-pointer items-center justify-center rounded-md p-1.5 text-fg-quaternary outline-focus-ring transition duration-100 ease-linear hover:bg-primary_hover hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2 pressed:bg-primary_hover pressed:text-fg-quaternary_hover">
                        <ChevronSelectorVertical className="size-4 shrink-0" />
                    </AriaButton>
                    <AriaPopover
                        placement={popoverPlacement ?? (isDesktop ? "right bottom" : "top right")}
                        triggerRef={triggerRef}
                        offset={8}
                        className={({ isEntering, isExiting }) =>
                            cx(
                                "will-change-transform",
                                isEntering &&
                                    "duration-150 ease-out animate-in fade-in placement-right:origin-left placement-right:slide-in-from-left-0.5 placement-top:origin-bottom placement-top:slide-in-from-bottom-0.5 placement-bottom:origin-top placement-bottom:slide-in-from-top-0.5",
                                isExiting &&
                                    "duration-100 ease-in animate-out fade-out placement-right:origin-left placement-right:slide-out-to-left-0.5 placement-top:origin-bottom placement-top:slide-out-to-bottom-0.5 placement-bottom:origin-top placement-bottom:slide-out-to-top-0.5"
                            )
                        }
                    >
                        <NavAccountMenu
                            selectedAccountId={selectedAccountId}
                            selectedOrgId={selectedOrgId}
                            accounts={accounts}
                            organizations={organizations}
                        />
                    </AriaPopover>
                </AriaDialogTrigger>
            </div>
        </div>
    );
};
