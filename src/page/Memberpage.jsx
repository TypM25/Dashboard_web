import Navbar from '../components/Navbar'

function Memberpage() {
  return (
    <div className='min-h-screen'>
      <nav className="sticky top-0">
        <Navbar />
      </nav>
      <div className='flex justify-center w-full mt-10'>
        <h6 className='self-center text-5xl font-content font-bold'>Members</h6>
      </div>
      <div className='grid md:grid-cols-2 md:grid-rows-1 h-screen '>
        <div className='flex flex-col justify-center items-center font-content'>
          <img src="" alt="" />
          <img className="h-1/2 mb-20 rounded-3xl" src="./image/mem1.jpg" alt="" />
          <h6 className='font-bold text-2xl mb-8 text-yellow-600'>Nutnicha Chaikitthai</h6>
          <h5 className='text-xl text-yellow-700'>65361502</h5>
        </div>
        <div className='flex flex-col justify-center items-center font-content '>
          <img src="" alt="" />
          <img className="h-1/2 mb-20 rounded-3xl" src="./image/mem2.jpg" alt="" />
          <h6 className='font-bold text-2xl mb-8 text-yellow-600'>Thanyaporn Musikpodok</h6>
          <h5 className='text-xl text-yellow-700'>65362141</h5>
        </div>
      </div>

      <footer className='bottom-0 left-0 right-0 flex justify-center items-center mt-10 bg-blue-700 h-14'>
        <h4 className='text-white font-content'>@Bank</h4>
      </footer>
    </div>
  );
}

export default Memberpage