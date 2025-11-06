import React from "react";

/**
 * UserIcon — a flexible React SVG icon component.
 *
 * Props:
 * - size: number | string — sets both width & height (default 24)
 * - color: string — stroke color (default "currentColor")
 * - strokeWidth: number — stroke width (default 1.8)
 * - className: string — optional className for styling
 * - title: string — accessible title (default "User icon")
 */
export default function UserIcon({
  size = 24,
  color = "currentColor",
  strokeWidth = 1.8,
  className,
  title = "User icon",
  ...props
}) {
  const ariaProps = title ? { role: "img", "aria-label": title } : { "aria-hidden": true };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...ariaProps}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {/* Head */}
      <circle cx="12" cy="8" r="4" />
      {/* Shoulders / body */}
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

/*
Usage:

import UserIcon from "./UserIcon";

export function Example() {
  return (
    <div className="flex items-center gap-2">
      <UserIcon size={20} />
      <span>Profile</span>
    </div>
  );
}
*/
