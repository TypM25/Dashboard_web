import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import { useEffect, useState } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const jb_url = 'http://localhost:5000/api/bar/job/balances';
const mb_url = 'http://localhost:5000/api/bar/marital/balances';

export default function BarGraph() {
    const [jobData, setJobData] = useState([]);
    const [maritalData, setMaritalData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectJobs, setSelectJobs] = useState([]);
    const [joblist, setJoblist] = useState([])
    const [jobdd, setJobdd] = useState('')
    const [isdrill, setIsdrill] = useState(false)
    const [allJobData, setAllJobData] = useState([]);



    const drillData = {
        labels: jobData.map(item => item.balance_range),
        datasets: [
            {
                label: 'Amount',
                data: jobData.map(item => item.total_count),
                backgroundColor: '#ffbd66',
                borderColor: '#ffbd66',
                borderWidth: 1,
            },
        ],
    };
    const drillOp = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `Number of Individuals by Income Bracket of ${jobdd}`,
            },
        },
    };


    async function fetchDrilldown(a_job) {
        setLoading(true);
        try {
            const response3 = await axios.get(`https://dbbank4545.netlify.app/bar/drilldown/${a_job}`);
            console.log("API Response:" + jobdd, response3.data);
            setJobData(response3.data)
            setIsdrill(true);
            setLoading(false);
        } catch (error) {
            console.log(error, "Fetch error");
            setLoading(false);
        }
    }


    const handleJobChange = (e) => {
        const { value, checked } = e.target;

        setSelectJobs((prevSelected) => {
            if (checked) {
                return [...prevSelected, value];

            } else {
                return prevSelected.filter((job) => job !== value);
            }
        });

    };

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const response1 = await axios.get(jb_url);
                const response2 = await axios.get(mb_url);

                const filterJobData = Array.isArray(response1.data) ? response1.data.filter(item => item.job !== null && item.average_income !== null) : [];
                const filterMaritalData = Array.isArray(response2.data) ? response2.data.filter(item => item.marital !== null && item.average_income !== null) : [];

                setAllJobData(filterJobData);
                setMaritalData(filterMaritalData);
                setJobData(filterJobData);
                setJoblist(filterJobData.map(item => item.job));
                setLoading(false);
            } catch (error) {
                console.log(error, "Fetch error");
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        const filterData = selectJobs.length > 0
            ? allJobData.filter(item => selectJobs.includes(item.job))
            : allJobData;
        setJobData(filterData);
    }, [selectJobs]);


    useEffect(() => {
        if (jobdd) {
            fetchDrilldown(jobdd);
            console.log(jobdd)
        }
    }, [jobdd]);


    const data1 = {
        labels: jobData.map(items => items.job),
        datasets: [
            {
                label: 'Balance',
                data: jobData.map(items => items.average_income),
                backgroundColor: '#ffbd66',
                borderColor: '#ffbd66',
                borderWidth: 1,
            },
        ],
    };


    const options1 = {
        onClick: (event, elements) => {
            if (elements.length > 0) {
                const index = elements[0].index;
                const selectJob = data1.labels[index];
                setJobdd(selectJob);
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Average balance of each job',
            },
        },
    };



    const data2 = {
        labels: maritalData.map(items => items.marital),
        datasets: [
            {
                label: 'Balance',
                data: maritalData.map(items => items.average_income),
                backgroundColor: '#78d6ff',
                borderColor: '#78d6ff',
                borderWidth: 1,
            },
        ],
    };

    const options2 = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Average Balance by Marital Status'
            },
        },
    };

    const clearCheckboxes = () => {
        setSelectJobs([]);
        setJobdd('');
        setIsdrill(null);
    };

    return (
        <>
            {loading ? 'load' : (
                <>
                    <div className='flex'>
                        <h1 className='font-content self-center font-bold text-amber-700 mr-8'>Filter Job</h1>
                        <a href="#"><img className='h-6' src="./image/remove.png" onClick={(e) => { e.preventDefault(); clearCheckboxes(); }} /></a>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-4 '>
                        {joblist.map((job, index) => (
                            <label className="font-content text-sm" key={index}>
                                <input className="mr-2" type="checkbox" value={job} onChange={handleJobChange} checked={selectJobs.includes(job)} />
                                {job}
                            </label>
                        ))}
                    </div>
                    <div className='grid md:grid-rows-1 md:grid-cols-2 gap-10 mt-9'>
                        {loading ? 'Loading...' : (
                            <>
                                <div className='flex flex-col'>

                                    <Bar className='font-content' data={isdrill ? drillData : data1} options={isdrill ? drillOp : options1} />
                                </div>
                                <div className='flex flex-col'>
                                    <Bar data={data2} options={options2} />
                                </div>
                            </>
                        )}
                    </div>
                </>
            )}
        </>
    );
}
