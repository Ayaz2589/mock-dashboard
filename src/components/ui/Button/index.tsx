const defaultStyles =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

const Button = ({ onClick, children, styles = defaultStyles }: any) => {
  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
};

export default Button;
