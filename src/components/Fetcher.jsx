import BarGraph from './BarGraph';
import PieGraph from './PieGraph';
import LineGraph from './LineGraph';
import Dropdown from './Dropdown';


export default function Fetcher() {
    return (
        <div>
            <div >
                <div className="h-full">
                    <BarGraph />
                </div>
                <div className='grid place-items-center md:grid-cols-2 md:grid-rows-1 mt-10 h-90'>
                    <div className='flex justify-center items-center w-full h-full max-w-96 max-h-96'>
                        <PieGraph />
                    </div>
                    <div className='flex justify-center items-center w-full h-full'>
                        <LineGraph />
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center mt-14 mb-14'>
                <div className='self-center'>
                    <Dropdown />
                </div>
            </div>
        </div>
    );
}

