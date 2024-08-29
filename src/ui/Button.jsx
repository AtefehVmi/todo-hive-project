function Button({ children }) {
  const base =
    "bg-green-300 rounded-lg py-1 w-60 mt-3 mb-2 text-stone-600 shadow-md transition-all duration-300 hover:bg-green-400 hover:ease-in hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0.5 uppercase font-semibold inline-block tracking-wide";
  return <button className={base}>{children}</button>;
}

export default Button;
