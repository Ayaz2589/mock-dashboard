type Props = {
  toggleDrawer: () => void;
};

const OpenNavDrawerButton = ({ toggleDrawer }: Props) => {
  return (
    <button
      onClick={toggleDrawer}
      className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
};

export default OpenNavDrawerButton;
