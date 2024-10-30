import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend);

const bank_url = 'https://database-bank.onrender.com/api/pie/house/loan'

function PieGraph() {
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
    console.log(bdata);
  }, []);

  const data = {
    labels: bdata.map(item => item.loan),
    datasets: [{
      label: 'Amount',
      data: bdata.map(item => item.count),
      backgroundColor: [
        '#edde39',
        '#96c4ff',
      ],
      hoverOffset: 4
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Homeowners: Loan vs No Loan'
      },
    },
  };

  return (
    <>
      {loading ? 'Loading...' : (
        <div className='h-full w-full flex justify-center items-center'>
          <Pie data={data} options={options} />
        </div>
      )}
    </>
  )
}

export default PieGraph