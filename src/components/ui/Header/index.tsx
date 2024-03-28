const Header = ({ title }: { title: string }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mt-[1.2rem] w-full text-center md:text-left">
        {title}
      </h1>
    </div>
  );
};

export default Header;
