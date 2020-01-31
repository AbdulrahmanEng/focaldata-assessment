import React from 'react';
import Chart from "react-apexcharts";

export default function BarChart({question}) {
  const categories = question.answerOptions.map(a => a.text);
  const data = question.answerOptions.map(a => a.selectedByRespondents)

  const chartData = {
    series: [
      {
        data: data // [400,430,448,470,540,580,690,1100,1200,1380]
      }
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: categories // ['South Korea','Canada','United Kingdom','Netherlands','Italy','France','Japan','United States','China','Germany']
      }
    }
  };

  return (<div className="survey__questions container">
            <div key={question.questionId}>
              <div className="row">
                <h3>{question.questionTitle}</h3>
              </div>
              <div className="row">
                <div className="mixed-chart">
                  <Chart options={chartData.options} series={chartData.series} type="bar" width="500"/>
                </div>
              </div>
            </div>
        </div>);
}
