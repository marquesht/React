function Button(props) {
  return (
    <button
      {...props}
      className="bg-slate-400 text-white p-3 rounded-md hover:bg-slate-500"
    >
      {props.children}
    </button>
  );
}

export default Button;
