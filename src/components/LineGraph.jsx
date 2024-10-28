import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import axios from 'axios';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);
const bank_url='https://dbbank4545.netlify.app/api/scatterplot/age/balance'

function LineGraph() {
  const [bdata, setBdata] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        try {
            const response = await axios.get(bank_url);
            setBdata(response.data);
            setLoading(false);
        } catch (error) {
            console.log(error, "Fetch error");
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const data = {
      labels: bdata.map(item => item.age), 
      datasets: [{
        label: 'AVR Balance',
        data: bdata.map(item => parseFloat(item.average_income)), 
        fill: false,
        borderColor: '#7a37de',
        tension: 0.1,
      }],
    };
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Line Graph of Average Balance by Age'
        },
    },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Age',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Average Balance',
          },
          beginAtZero: true, 
          ticks: {
            stepSize: 500000, 
          },
        },
      }
    };
  
    return (
      <div className='flex flex-col justify-center w-full h-full'> 
        {loading ? 'Loading...' : (
          <>
          <Line  data={data} options={options} />
          </>
         
        )}
      </div>
    );
  }

export default LineGraph;
