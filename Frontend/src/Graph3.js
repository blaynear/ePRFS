
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function Graph3() {
  const chartRef = useRef();

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: ["3", "4", "5", "5", "6", "7", "8", "9", "10", "15"],
        datasets: [
          {
            label: "RFS",
            data: [0.00015, 0.00133,0.00750, 0.03117, 0.10448, 0.33227, 0.81044, 0.192533, 42.14810],
            backgroundColor: "rgba(255, 240, 0, 1) ",
            fill: false
          },
          {
            label: "pRFS",
            data: [0.00014, 0.00023, 0.00032, 0.00055, 0.00096, 0.00167, 0.00318, 0.00502, 0.04786],
            borderColor: "rgba(4, 59, 92,1)",
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
                text: 'Generations to Solve'
              },
            min: 0,
            max: 45.000
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

export default Graph3;

