// Generic utility icons used across the Vvon site (Header, footer,
// inline buttons). All inherit `currentColor` so they tint with their
// parent text color.

type IconProps = { className?: string };

const props = {
  fill: "none" as const,
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export function ArrowIcon({ className = "h-4 w-4 stroke-current" }: IconProps) {
  return (
    <svg className={className} {...props}>
      <path d="M5 12 H19 M13 6 L19 12 L13 18" />
    </svg>
  );
}

export function PlusIcon({ className = "h-4 w-4 stroke-current" }: IconProps) {
  return (
    <svg className={className} {...props}>
      <path d="M12 5 V19 M5 12 H19" />
    </svg>
  );
}

export function CheckIcon({ className = "h-4 w-4 stroke-current" }: IconProps) {
  return (
    <svg className={className} {...props}>
      <path d="M5 12 L10 17 L19 8" />
    </svg>
  );
}
