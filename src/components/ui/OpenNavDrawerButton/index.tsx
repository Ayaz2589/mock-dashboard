type Props = {
  toggleDrawer: () => void;
};

const HamburgerIconButton = ({ toggleDrawer }: Props) => {
  return (
    <button
      onClick={toggleDrawer}
      className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg text-white hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
      aria-label="Open navigation menu"
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
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  );
};

export default HamburgerIconButton;
