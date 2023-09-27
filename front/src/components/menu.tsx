const Menu = () => {
  return (
    <div className="flex fixed w-full z-50 bg-gray-800 text-white p-4">
      <div className="flex">
        <div className="flex items-center mr-6">
          <svg
            className="h-10 w-10 text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0zm0 480C132.48 480 32 379.52 32 256S132.48 32 256 32s224 100.48 224 224-100.48 224-224 224z" />
            <path d="M256 64c-70.692 0-128 57.308-128 128s57.308 128 128 128 128-57.308 128-128S326.692 64 256 64zm0 224c-52.935 0-96-43.065-96-96s43.065-96 96-96 96 43.065 96 96-43.065 96-96 96z" />
            <path d="M256 128c-35.346 0-64 28.654-64 64s28.654 64 64 64 64-28.654 64-64-28.654-64-64-64zm0 96c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight ml-5">
            PitchBoy - Test technique
          </span>
        </div>
        <div className="flex items-center mr-6">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
