type Props = {
  title: string;
  checked: boolean;
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
};

const Toggle = ({ title, checked, onClick }: Props) => {
  return (
    <label className="inline-flex items-center me-5 cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onClick={onClick}
      />
      <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-500"></div>
      <span className="ms-3 text-sm font-medium text-gray-600">{title}</span>
    </label>
  );
};

export default Toggle;
