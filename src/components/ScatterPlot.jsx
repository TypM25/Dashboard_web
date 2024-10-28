import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart as ChartJS, Title, Tooltip, Legend, LinearScale, PointElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LinearScale, PointElement);
const bank_url='http://localhost:5000/api/scatterplot/age/balance'

function ScatterPlot() {
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
        datasets: [
          {
            label: 'My First Dataset',
            data: [
              { x: 1, y: 1 },
              { x: 2, y: 2 },
              { x: 3, y: 3 },
              { x: 4, y: 4 },
              { x: 5, y: 5 },
            ],
            backgroundColor: 'rgba(255, 99, 132, 1)',
          },
          {
            label: 'My Second Dataset',
            data: [
              { x: 1, y: 4 },
              { x: 2, y: 3 },
              { x: 3, y: 2 },
              { x: 4, y: 1 },
              { x: 5, y: 0 },
            ],
            backgroundColor: 'rgba(54, 162, 235, 1)',
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Scatter Plot Example',
          },
        },
      };
    
      return (
        <div>
            {loading ? 'Loading...' : (
                <>
                <h2>Scatter Plot</h2>
                <Scatter data={data} options={options} />
                </>
            )}
          
        </div>
      );
    };
    
    export default ScatterPlot;