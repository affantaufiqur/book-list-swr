interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  state: "primary" | "secondary";
}

export default function Button({ children, state, ...props }: ButtonProps) {
  const defaultClassName =
    "rounded-md px-4 py-2 text-lg font-medium tracking-tight";
  const primaryClassName = "bg-purple-primary text-white";
  const secondaryClassName =
    "bg-white border-2 border-purple-primary text-purple-primary";

  return (
    <button
      className={`${defaultClassName} ${
        state === "primary" ? primaryClassName : secondaryClassName
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
