// import { useParams } from 'react-router-dom'

function Home() {
  return (
    <div className='w-full h-full grid place-items-center'>
      <h1 className='text-4xl font-bold'>
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
          <h1 className='text-2xl text-red-500 font-bold'>
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
          <h1 className='text-4xl text-blue-500 font-bold'>
            I
          </h1>
        </div>
      </h1>
    </div>
  );
}

export default Home;
