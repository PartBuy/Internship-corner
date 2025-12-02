import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
};

function Button({ children, variant = "primary" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

  let classes = base;

  if (variant === "primary") {
    classes += " bg-green-500 text-slate-950 hover:bg-green-400";
  } else if (variant === "secondary") {
    classes += " bg-blue-500 text-white hover:bg-blue-400";
  } else if (variant === "tertiary") {
    classes +=
      " border border-slate-500 text-slate-100 hover:bg-slate-800";
  }

  return <button className={classes}>{children}</button>;
}

export default Button;
