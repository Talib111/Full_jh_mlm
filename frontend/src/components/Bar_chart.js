import React from 'react'
import { Bar } from 'react-chartjs-2'
import '../Styles/chart.css'

function Bar_chart() {
    
    const data = {
        labels: ['jan','feb','mar','apr','may'],
        datasets: [{ label: 'sales for 2020 (M)', data: [3,2,2,1,5],borderColor: ['black','black','black','black','black'],backgroundColor: ['red','blue','green','orange','yellow']},{ label: 'sales for 2019 (M)', data: [1,3,2,2,3],borderColor: ['black','black','black','black','black'],backgroundColor: ['red','blue','green','orange','yellow']}]
    }

    const options = {
        title:{display: true, text: 'Bar Chart'},
        scales: {yAxes:[{ ticks: {min: 0, max: 6, stepSize: 1}}]}
    }
    return (
       <React.Fragment>
           <div className="bar_chart"> <Bar  data={data} options={options} /></div>
          
       </React.Fragment>
    )
}

export default Bar_chart
