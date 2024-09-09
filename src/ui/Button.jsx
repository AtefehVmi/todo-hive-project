function Button({ children, type }) {
  const styles = {
    primary:
      "bg-green-300 rounded-lg py-1 w-60 mt-3 mb-2 text-stone-600 shadow-md shadow-purple-300 transition-all duration-300 hover:bg-green-400 hover:ease-in hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-300 active:translate-y-0.5 uppercase font-semibold inline-block tracking-wide",
    secondary:
      "bg-purple-100 border-2 border-stone-400 rounded-lg py-1 w-60 mt-3 mb-2 text-stone-500 shadow-md transition-all duration-300 hover:bg-purple-50 hover:ease-in hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0.5 uppercase font-semibold inline-block tracking-wide",
  };

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
