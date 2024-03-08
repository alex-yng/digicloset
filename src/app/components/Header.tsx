export default function Header() {
  return (
    <header className='flex justify-between items-center px-8'>
      <a href='#'>
        <h1 className='text-concrete-900 text-2xl'>digi_closet</h1>
      </a>
      <nav className='flex gap-8 my-4 items-center'>
        <a
          href='#about'
          className='text-concrete-700 hover:text-concrete-900 transition-colors duration-300'
        >
          demo
        </a>
        <a
          href='#about'
          className='text-concrete-700 hover:text-concrete-900 transition-colors duration-300'
        >
          about
        </a>
        <button className='bg-sage-500 hover:bg-sage-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300'>
          join now
        </button>
      </nav>
    </header>
  );
}
