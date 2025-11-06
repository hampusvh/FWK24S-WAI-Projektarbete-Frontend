import React from "react";

/**
 * OpenBookIcon — a flexible React SVG icon component.
 *
 * Props:
 * - size: number | string — sets both width & height (default 24)
 * - color: string — stroke color (default "currentColor")
 * - strokeWidth: number — stroke width (default 1.8)
 * - className: string — optional className for styling
 * - title: string — accessible title (default "Open book icon")
 */
export default function OpenBookIcon({
  size = 24,
  color = "currentColor",
  strokeWidth = 1.8,
  className,
  title = "Open book icon",
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
      {/* Covers / pages outline */}
      <path d="M12 6c-2.4-1.6-6-1.6-9 0v12c3-1.6 6.6-1.6 9 0M12 6c2.4-1.6 6-1.6 9 0v12c-3-1.6-6.6-1.6-9 0" />
      {/* Center spine */}
      <path d="M12 6v12" />
      {/* Page lines (left) */}
      <path d="M7.25 9.25H10M7.25 12H10M7.25 14.75H10" />
      {/* Page lines (right) */}
      <path d="M14 9.25h2.75M14 12h2.75M14 14.75h2.75" />
    </svg>
  );
}

/*
Usage:

import OpenBookIcon from "./OpenBookIcon";

export function Example() {
  return (
    <div className="flex items-center gap-2">
      <OpenBookIcon size={20} />
      <span>Library</span>
    </div>
  );
}
*/
