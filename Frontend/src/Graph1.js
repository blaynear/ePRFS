
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function Graph1() {
  const chartRef = useRef();

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: [0, "1", "2", "3", "4"],
        datasets: [
          {
            label: "RFS",
            data: [0, 1156, 277262, 554369, 134023],
            backgroundColor: "rgba(255, 240, 0, 1) ",
            fill: false
          },
          {
            label: "pRFS",
            data: [0, 692, 132240, 399495, 55469],
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
            max: 600000
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

export default Graph1;

