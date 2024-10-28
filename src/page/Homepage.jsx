
import Navbar from '../components/Navbar'
import Fetcher from '../components/Fetcher'

export default function Homepage() {
  return (
    <div className='relative min-h-screen'>
      <nav className="sticky top-0">
        <Navbar />
      </nav>
      <div className='flex flex-col mx-14 my-5'>
        <h6 className='self-center text-[50px] mb-10 font-content text-blue-900'>Bank Overview</h6>
        <section className=''>
          <Fetcher />
        </section>
      </div>
      <footer className='flex justify-center bottom-0 left-0 right-0 items-center mt-10 bg-blue-700 h-14'>
        <h4 className='text-white font-content'>@Bank</h4>
      </footer>
    </div>
  )
}

