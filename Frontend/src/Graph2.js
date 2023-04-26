
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function Graph2() {
  const chartRef = useRef();

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: [ "3", "4", "5", "6"],
        datasets: [
          {
            label: "pRFS",
            data: [0.10, 30.07, 126.44, 30.26],
            backgroundColor: "rgba(4, 59, 92,1) ",
            fill: false
          },
          {
            label: "RFS",
            data: [ 0.18, 369.66, 4164.83, 4074.63],
            borderColor: "rgb(255,255,0)",
            fill: false
          }
        ]
      },
      options: {
        scales: {
            x: {
                
            title: {
              display: true,
              text: 'Puzzle Size'
            }
            },
          y: {
            type: 'linear',
            title: {
                display: true,
                text: 'Time (s)'
              },
            min: 0,
            max: 4500
          }
        }
      }
    });
  }, []);

  return (
    <div style={{ width: '500px', height: '300px' }}>
      <canvas ref={chartRef} />
    </div>
  );
}

export default Graph2;

