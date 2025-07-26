import type { FC, ReactNode } from "react";
import { cx } from "@/utils/cx";

interface DashboardWrapperProps {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

export const DashboardWrapper: FC<DashboardWrapperProps> = ({ children, className, noPadding = false }) => {
  return (
    <div
      className={cx(
        "w-full",
        noPadding ? "" : "px-4 sm:px-6 lg:px-8",               
        noPadding ? "" : "sm:py-6 lg:py-8",                
        "max-w-screen-2xl mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};
