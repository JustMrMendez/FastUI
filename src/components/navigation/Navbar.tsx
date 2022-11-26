import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    console.log("isOpened: ", isOpened);
  }, [isOpened]);

  return (
    <nav className='w-full flex justify-around items-center bg-indigo-200 p-2'>
      <div className='flex gap-2 items-end group transition-all duration-300'>
        <svg
          className='h-10 text-red-500'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 320 512'>
          <path
            fill='currentColor'
            d='M80 32C62.3 32 48 46.3 48 64V224v96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H48v64c0 17.7 14.3 32 32 32s32-14.3 32-32V384h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H112V256H256c17.7 0 32-14.3 32-32s-14.3-32-32-32H112V96H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z'
          />
        </svg>
        <h1 className='text-2xl text-red-500 hidden group-hover:block font-bold'>
          AST
        </h1>
        <svg
          className='h-10 text-blue-500'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 384 512'>
          <path
            fill='currentColor'
            d='M32 32c17.7 0 32 14.3 32 32V288c0 70.7 57.3 128 128 128s128-57.3 128-128V64c0-17.7 14.3-32 32-32s32 14.3 32 32V288c0 106-86 192-192 192S0 394 0 288V64C0 46.3 14.3 32 32 32z'
          />
        </svg>
        <h1 className='text-4xl text-blue-500 hidden group-hover:block font-bold'>
          I
        </h1>
      </div>
      <div className='items-center gap-5 hidden md:flex'>
        <Link to='/'>Home</Link>
        <Link to='/'>Home</Link>
        <Link to='/'>Home</Link>
      </div>
      <button
        onClick={() => setIsOpened(!isOpened)}
        className='flex flex-col gap-2 items-end w-8 h-8'>
        <div
          className={`h-1 w-full bg-slate-700 transition-all duration-200 rounded-sm ${
            isOpened ? "rotate-45 translate-y-3" : ""
          }`}></div>
        <div
          className={`h-1 w-2/3 bg-slate-700 rounded-sm transition-all duration-200 ${
            isOpened ? "opacity-0" : ""
          }`}></div>
        <div
          className={`h-1 w-full bg-slate-700 transition-all duration-200 rounded-sm ${
            isOpened ? "-rotate-45 -translate-y-3" : ""
          }`}></div>
      </button>
    </nav>
  );
}

export default Navbar;
