function Label({ children, id }) {
  return (
    <label htmlFor={id} className="text-stone-500 text-sm font-semibold ">
      {children}
    </label>
  );
}

export default Label;
